import StatCard from "./ui/StatCard";

type StatType = {
	title: string;
	desc: string;
}

export default function Stats() {
    const stats: StatType[] = [
    	{ title: "10K+", desc: "Professionals Trained for Exceptional Career Success" },
    	{ title: "200+", desc: "Sessions Delivered with Unmatched Learning Experience" },
    	{ title: "5K+", desc: "Active Learners Engaged in Dynamic Courses" },
    ];
    
    return (
 		<div className="px-12 flex flex-col gap-4 text-center">
 			<p className="text-2xl md:text-4xl font-semibold">Our <span className="text-blue-500"> Track Record</span></p>
 			<p className="text-sm md:text-lg">The Numbers Behind <span className="text-blue-600 font-medium"> Our Success</span></p>
 			<ul className="flex flex-col md:flex-row text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
				{stats.map(stat => (
					<StatCard key={stat.title }title={stat.title} desc={stat.desc}/>
				))}
			</ul>
 		</div>
    );
}

