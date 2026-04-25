"use client";

import { useState, useRef, useEffect, useCallback } from "react"
import TestimonialCard from "./ui/TestimonialCard"

const testimonials = [
	{
		name: "ADP",
		imgSrc: "/logos/adp.svg",
		text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service and expertise throught the entire process.",
  	},
  	{
		name: "Bayer",
		imgSrc: "/logos/bayer.svg",
		text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to assure our needs are met and exceeded, providing reliable support and high quality service every step of the way.",
  	},
  	{
		name: "Reliance",
		imgSrc: "/logos/rel.png",
		text: "Choosing Accredian for the learning and development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help out employees.",
  	},
];

export default function Testimonials() {
	const [current, setCurrent] = useState(0);
	const [visibleCount, setVisibleCount] = useState(2);
	const trackRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const touchStartX = useRef(0);

	const totalPages = Math.ceil(testimonials.length / visibleCount);

	const updateVisibleCount = useCallback(() => {
		setVisibleCount(window.innerWidth >= 640 ? 2 : 1)
	}, [])

	useEffect(() => {
		updateVisibleCount()
	    window.addEventListener("resize", updateVisibleCount)
	    return () => window.removeEventListener("resize", updateVisibleCount)
	}, [updateVisibleCount])

	const goTo = useCallback((page: number) => {
	    const clamped = Math.max(0, Math.min(page, totalPages - 1))
	    setCurrent(clamped)
	}, [totalPages])

	useEffect(() => {
	    if (!trackRef.current || !containerRef.current) return
	    const containerWidth = containerRef.current.offsetWidth
	    const cardWidth = (containerWidth - (visibleCount - 1) * 16) / visibleCount
	    const offset = current * visibleCount * (cardWidth + 16)
	    trackRef.current.style.transform = `translateX(-${offset}px)`
	}, [current, visibleCount])

	useEffect(() => {
    	setCurrent(0)
  	}, [visibleCount])

	const cardStyle = (): React.CSSProperties => {
		if (!containerRef.current) return {}
		const containerWidth = containerRef.current.offsetWidth
		const width = (containerWidth - (visibleCount - 1) * 16) / visibleCount
		return { minWidth: width, maxWidth: width }
	}

	return (
		<div className="py-16 px-6 max-w-5xl mx-auto flex flex-col gap-8">
			<p className="text-center text-4xl font-semibold">Testimonials From <span className="text-blue-600">Our Partners</span></p>
			<p className="text-center">What <span className="text-blue-600">Our Clients </span>Are Saying?</p>

    		<div ref={containerRef} className="overflow-hidden">
 				<div
        			ref={trackRef}
        			className="flex gap-4 transition-transform duration-300 ease-in-out"
       				onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
        			onTouchEnd={e => {
            			const diff = touchStartX.current - e.changedTouches[0].clientX
            				if(Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1)
        			}}
        		>
					{testimonials.map((t, i) => (
			 			<div key={i} style={cardStyle()} className="flex-shrink-0">
				    		<TestimonialCard {...t} />
				    	</div>
				  	))}
 				</div>
    		</div>

     		<div className="flex justify-center gap-2 mt-6">
     			{Array.from({ length: totalPages }).map((_, i) => (
					<button
						key={i}
						onClick={() => goTo(i)}
						className={`w-2 h-2 rounded-full transition-colors ${
              				i === current ? "bg-gray-900" : "bg-gray-300"
            			}`}
        			/>
        		))}
    		</div>
    	</div>
	)
}
