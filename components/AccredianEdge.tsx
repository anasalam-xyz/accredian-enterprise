import Image from "next/image";
import { Lightbulb, Brain, Users, ChartNoAxesColumnIncreasing, Settings, Globe, Banknote } from 'lucide-react';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';
import ProgramItem from './ui/ProgramItem';
import SegmentItem from './ui/SegmentItem';
import AudienceItem from './ui/AudienceItem';
import type { LucideIcon } from "lucide-react";

type Program = {
  	label: string;
  	icon: LucideIcon;
};
type CourseSegment = {
	title: string;
	courses: string;
	imgSrc: string;
};
type Audience = {
	title: string;
	desc: string;
	icon: LucideIcon;
};

export default function AccredianEdge() {
	const programs: Program[] = [
		{ label: "Product and Innovation Hub", icon: Lightbulb },
		{ label: "Gen-AI Mastery", icon: Brain },
		{ label: "Leadership Elevation", icon: Users },
		{ label: "Tech and Data Insights", icon: ChartNoAxesColumnIncreasing },
		{ label: "Operations Excellence", icon: Settings },
		{ label: "Digital Enterprise", icon: Globe },
		{ label: "Fintech Innovation Lab", icon: Banknote },
	];	
	
	const courseSegments: CourseSegment[] = [
		{ 
			title: "Program Specific", 
			courses: "Certificate, Executive, Post Graduate Certificate", 
			imgSrc: "/images/project-management-v2.webp"
		},
		{ 
			title: "Industry Specific", 
			courses: "IT, Healthcare, Retail, Finance, Education, Manufacturing", 
			imgSrc: "/images/digital-transformation-v2.webp"
		},
		{ 
			title: "Topic Specific", 
			courses: "Machine Learning, Design, Analytics, Cybersecurity, Cloud", 
			imgSrc: "/images/data-science-v2.webp"
		},
		{ 
			title: "Level Specific", 
			courses: "Senior Leadership, Mid-Career Professionals, Freshers", 
			imgSrc: "/images/senior-management-v2.webp"
		},
	];
	
	const audience: Audience[] = [
		{
			title: "Tech Professionals",
			desc: "Enhance expertise, embrace tech, drive innovation.",	
			icon: MonitorCheck,
    	},
		{
			title: "Non-Tech Professionals",
			desc: "Adapt digitally, collaborate in tech environments.",
			icon: MonitorX,
		},
		{
			title: "Emerging Professionals",
			desc: "Develop powerful skills for rapid career growth.",
			icon: GraduationCap,
		},
		{
			title: "Senior Professionals",
			desc: "Strengthen leadership, enhance strategic decisions.",
			icon: Briefcase,
		},
	];

	return (
		<div className="mt-12 text-center flex flex-col gap-8 md:gap-24">
			<div className="flex flex-col gap-4">
				<p className="text-2xl md:text-4xl font-semibold">The <span className="text-blue-600">Accredian Edge</span></p>
				<p className="text-sm md:text-lg">Key Aspects of <span className="text-blue-600">Our Strategic Training</span></p>
				<Image 
					src="/images/accredian-edge-usp-v3.svg"
					alt="UniqueSellingPoints"
					width={1200}
					height={600}
					className="hidden md:block md:px-16 lg:px-24"	
				/>
				<Image 
					src="/images/accredian-edge-usp-mobile.svg"
					alt="UniqueSelllingPointPhone"
					width={600}
					height={450}
					className="my-4 md:hidden"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl md:text-4xl font-semibold">Our <span className="text-blue-600">Domain Expertise</span></p>
				<p className="text-sm md:text-lg"><span className="text-blue-600">Specialized Programs </span>Designed to Fuel Innovation</p>
				<ul className="mt-6 flex flex-wrap justify-center gap-10">
					{programs.map(program => (
						<ProgramItem key ={program.label} label={program.label} icon={program.icon}/>
					))}
				</ul>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl md:text-4xl font-semibold">Tailored <span className="text-blue-600">Course Segmentation</span></p>
				<p className="text-sm md:text-lg">Explore <span className="text-blue-600">Custom-Fit Courses </span>Designed to Address Every Professional Focus</p>
				<ul className="mt-8 flex flex-row overflow-x-auto gap-6 pb-3
    				md:flex-wrap md:overflow-x-visible md:justify-center md:gap-10"
    			>
					{courseSegments.map(segment => (
						<SegmentItem key ={segment.title} title={segment.title} courses={segment.courses} imgSrc={segment.imgSrc}/>
					))}
				</ul>
			</div>
			<div className="text-left text-white my-10 lg:mx-28 px-4 md:px-12 pt-8 bg-blue-600 rounded-lg flex flex-col md:flex-row">
				<div className="flex flex-col justify-between">
					<div>
						<p className="mt-4 font-medium text-lg">Who Should Join?</p>
						<p className="my-2 text-2xl md:text-4xl font-bold">Strategic Skill Enhancement</p>
					</div>
					<Image
						src="/images/imagehuman.png"
						alt="Human Illustration"
						width={300}
						height={0} 
						className="hidden lg:block w-72 h-auto object-contain"
					/>
				</div>
				<ul className="mb-4 w-full md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4">
					{audience.map(aud => {
						const Icon = aud.icon;
						return (
							<li key={aud.title} 
								className="text-white w-full md:w-72 py-4 md:px-4 rounded-xl flex flex-row md:flex-col 
								items-end md:items-start gap-2"
							>
								<Icon className="size-10 md:size-12"/>
								<div className="mx-2 md:mx-0 flex-col">
									<p className="mt-4 text-sm md:text-xl font-semibold">{aud.title}</p>
									<p className="text-xs md:text-sm">{aud.desc}</p>
								</div>
							</li>
						);
					})}
				</ul>	
			</div>
		</div>
	);
}
