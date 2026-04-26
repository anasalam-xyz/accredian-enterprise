import { ChartNoAxesCombined, Waypoints, MonitorPlay } from "lucide-react";
import ApproachItem from "./ui/ApproachItem";
import type { LucideIcon } from "lucide-react";

type StepType = {
	icon: LucideIcon;
	title: string;
	desc: string;
	number: number;
}

export default function HowItWorks() {
	const steps: StepType[] = [
		{ 
			number: 1, 
			title: "Skill Gap Analysis",
			desc: "Assess team skill gaps and developmental needs.",
			icon: ChartNoAxesCombined,
		},
		{ 
			number: 2, 
			title: "Customized Training Plan",
			desc: "Create a tailored roadmap addressing organizational goals.",
			icon: Waypoints,
		},
		{ 
			number: 3, 
			title: "Flexible Program Delivery",
			desc: "Deliver adaptable programs aligned with industry and organizational needs.",
			icon: MonitorPlay,
		},
	];
	
	return (
		<div className="mt-12 text-center flex flex-col items-center justify-center gap-4">
			<p className="text-2xl md:text-4xl font-semibold">How We <span className="text-blue-600">Deliver Results</span> That Matter?</p>
			<p className="text-sm md:text-lg">A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span></p>
			<div className="mt-4 md:mb-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				{steps.map(step => (
					<ApproachItem key={step.number} number={step.number} title={step.title} desc={step.desc} icon={step.icon}/>
				))}
			</div>
		</div>
	);
}
