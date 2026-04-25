interface TestimonialCardProps {
	name: string
  	img: string
  	text: string
}

export default function TestimonialCard({ name, imgSrc, text }: TestimonialCardProps) {
  	return (
    	<div className="bg-white border border-gray-200 rounded-xl p-5 flex-shrink-0 box-border">
 			<div className="flex items-center gap-3 mb-3">
				<img src={imgSrc} alt={name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
				<p className="text-sm text-gray-400">{name}</p>
			</div>
			<p className="text-sm text-gray-800 leading-relaxed">"{text}"</p>
		</div>
	)
}
