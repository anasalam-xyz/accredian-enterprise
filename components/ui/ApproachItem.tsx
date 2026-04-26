type ApproachItemProps = {
	icon: LucideIcon;
	title: string;
	desc: string;
	number: number;
};

export default function ApproachItem({ icon: Icon, title, desc, number }: ApproachItemProps) {
	return (
		<div className="w-72 lg:h-80 flex flex-row items-center justify-center">
			<div className="h-16 w-1 lg:h-32 lg:w-2 bg-blue-500 rounded-3xl flex-shrink-0"/>
			
			<div className="flex-1">
				<div className="flex flex-col gap-4 bg-blue-50 justify-center items-center 
					border border-blue-300 rounded-xl shadow-md shadow-blue-200"
				>
					<div className="relative left-1 top-1 md:left-4 md:top-4 self-start w-6 h-6 bg-white text-blue-500 rounded-full 
		  				flex items-center justify-center font-bold text-sm shadow border border-blue-400"
		  			>
						{number}
					</div>
					<div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center">
				  		<Icon className="w-6 h-6 text-white"/>
					</div>
					<div>
					 	 <p className="md:text-lg md:font-medium">{title}</p>
					 	 <p className="hidden md:block mb-8 text-xs text-gray-600 mt-1 leading-snug">
				    		{desc}
				  		</p>
				  		<p className="md:hidden h-4">
				  		</p>
					</div>
				</div>
			</div>
			
			<div className="h-16 w-1 lg:h-32 lg:w-2 bg-blue-500 rounded-3xl flex-shrink-0"/>
		</div>
	);
}

