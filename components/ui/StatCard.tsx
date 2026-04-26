type StatType = {
	title: string;
	desc: string;
}

export default function StatCard({ title, desc }: StatType) {
	return (
		<li className="flex-1 py-4 px-4">
			<div className="flex flex-row md:flex-col items-center gap-2">
				<p className="min-w-32 bg-blue-100 text-base md:text-2xl font-medium text-blue-600 rounded-full px-4 md:px-6 py-1 inline-block w-fit">
					{ title }
		  		</p>
		  		<p className="text-sm md:text-base md:text-center text-left">{ desc }</p>
			</div>
	  	</li>
	);
}
