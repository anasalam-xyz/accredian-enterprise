import Testimonials from "./Testimonials"

interface Testimonial {
  	id: number
  	name: string
  	imgSrc: string
  	text: string
}

async function getTestimonials(): Promise<Testimonial[]> {
  	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  	const res = await fetch(`${baseUrl}/api/testimonials`, { cache: "no-store" })
  	return res.json()
}

export default async function TestimonialsWrapper() {
  	const testimonials = await getTestimonials()
  	return <Testimonials testimonials={testimonials} />
}
