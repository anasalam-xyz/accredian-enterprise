import Image from 'next/image';

type SegmentItemProps = {
	title: string;
	courses: string;
	imgSrc: string;
}

export default function SegmentItem({ title, courses, imgSrc }: SegmentItemProps) {
	return (
		<li className="flex-shrink-0 w-[90%] md:w-56 h-80 rounded-xl border border-gray-300 shadow-md overflow-hidden bg-white flex flex-col">
 			<div className="h-1/2">
 				<Image
					src={imgSrc}
					alt={title}
					width={300}
					height={300}
					className="w-full h-full object-cover"
				/>
  			</div>
 			<div className="h-1/2 p-4 flex flex-col justify-center gap-2">
				<p className="font-semibold text-blue-500 text-lg leading-tight">
	 				{title}
				</p>
				<p className="text-xs text-gray-600 leading-snug">
					{courses}
				</p>
			</div>
		</li>
	);
}
