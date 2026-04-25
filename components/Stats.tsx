export default function Stats() {
    return (
 		<div className="px-12 flex flex-col gap-4 text-center">
 			<p className="text-4xl font-semibold">Our <span className="text-blue-500"> Track Record</span></p>
 			<p>The Numbers Behind <span className="text-blue-600 font-medium"> Our Success</span></p>
 			<ul className="flex flex-col md:flex-row text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
			 	<li className="flex-1 py-4 px-4">
					<div className="flex flex-col items-center gap-2">
						  <p className="bg-blue-100 text-2xl font-medium text-blue-600 rounded-full px-6 py-1 inline-block w-fit">
								10K+
						  </p>
						  <p>Professionals Trained for Exceptional Career Success</p>
					</div>
			  	</li>
				<li className="flex-1 py-4 px-4">
					<div className="flex flex-col items-center gap-2">
						<p className="bg-blue-100 text-2xl font-medium text-blue-600 rounded-full px-6 py-1 inline-block w-fit">
							200+
				  		</p>
				  		<p>Sessions Delivered with Unmatched Learning Experience</p>
					</div>
			  	</li>

			  	<li className="flex-1 py-4 px-4">
					<div className="flex flex-col items-center gap-2">
				  		<p className="bg-blue-100 text-2xl font-medium text-blue-600 rounded-full px-6 py-1 inline-block w-fit">
							5K+
				  		</p>
				  		<p>Active Learners Engaged in Dynamic Courses</p>
					</div>
			  	</li>
			</ul>
 		</div>
    );
}
