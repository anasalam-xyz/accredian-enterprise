import { NextResponse } from "next/server";

const testimonials = [
	{
		name: "ADP",
		imgSrc: "/logos/adp.svg",
		text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service and expertise throughout the entire process.",
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

export async function GET() {
	return NextResponse.json(testimonials)
}
