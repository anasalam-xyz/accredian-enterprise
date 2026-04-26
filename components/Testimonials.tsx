"use client"
import { useState, useRef, useEffect, useCallback } from "react"
import TestimonialCard from "./ui/TestimonialCard"

interface Testimonial {
	id: number
	name: string
	imgSrc: string
	text: string
}

const GAP = 16

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(2)
  const [cardWidth, setCardWidth] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const isDraggingRef = useRef(false)

  const totalPages = testimonials.length - visibleCount + 1

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return
    const vis = window.innerWidth >= 640 ? 2 : 1
    setVisibleCount(vis)
    const w = (containerRef.current.offsetWidth - (vis - 1) * GAP) / vis
    setCardWidth(w)
  }, [])

  useEffect(() => {
    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [updateLayout])

  useEffect(() => {
    setCurrent(c => Math.min(c, testimonials.length - visibleCount))
  }, [visibleCount])

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, testimonials.length - visibleCount))
    setCurrent(clamped)
    setDragOffset(0)
  }, [visibleCount])

  const trackOffset = -(current * (cardWidth + GAP)) + dragOffset

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    setIsDragging(true)
    dragStartX.current = e.clientX
  }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      setDragOffset(e.clientX - dragStartX.current)
    }
    const onMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setIsDragging(false)
      const diff = dragStartX.current - e.clientX
      if (Math.abs(diff) > cardWidth * 0.3) {
        goTo(diff > 0 ? current + 1 : current - 1)
      } else {
        setDragOffset(0)
      }
    }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [current, cardWidth, goTo])

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e: React.TouchEvent) => {
    setDragOffset(e.touches[0].clientX - dragStartX.current)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = dragStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > cardWidth * 0.3) {
      goTo(diff > 0 ? current + 1 : current - 1)
    } else {
      setDragOffset(0)
    }
  }

  return (
    <div className="py-8 md:py-16 px-2 md:px-6 max-w-5xl mx-auto flex flex-col gap-4 md:gap-8">
      <p className="text-center text-2xl md:text-4xl font-semibold">
        Testimonials From <span className="text-blue-600">Our Partners</span>
      </p>
      <p className="text-sm md:text-lg text-center">
        What <span className="text-blue-600">Our Clients</span> Are Saying?
      </p>

      <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing select-none">
        <div
          className="flex"
          style={{
            gap: GAP,
            transform: `translateX(${trackOffset}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ minWidth: cardWidth, maxWidth: cardWidth }}
              className="flex-shrink-0"
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === current ? "w-5 bg-gray-900" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
