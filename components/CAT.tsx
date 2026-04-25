import Image from "next/image";

export default function CAT() {
	return (
		<div className="py-4 mt-12 text-center flex flex-col gap-24 bg-gradient-to-r from-white via-blue-50 to-white">
			<div className="flex flex-col gap-4 justify-center items-center">
				<p className="text-4xl font-semibold">The <span className="text-blue-600">CAT Framework</span></p>
				<p>Our Proven Approach to <span className="text-blue-600">Learning Excellence</span></p>
				<Image 
					src="/images/catV2.svg"
					alt="UniqueSellingPoints"
					width={1200}
					height={600}
					className="mt-8 md:px-16 lg:px-24"	
				/>
			</div>
		</div>
	);
}
