"use client";

import EnquireButton from "@/components/ui/EnquireButton";
import { useState } from "react"
import FAQItem from "./ui/FAQItem"

const faqData = [
	{
	    id: "course",
	    label: "About the course",
	    faqs: [
			{ q: "What type of corporate training programs does Accredian offer?", a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech."},
		    { q: "What domain specializations are available?", a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI." },
	    ],
	},
  	{
		id: "delivery",
		label: "About the delivery",
		faqs: [
			{ q: "Can the course be customized for specific industries or teams?", a: "YAbsolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals." },
			{ q: "Who are the instructors for these programs?", a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights." },
			{ q: "What formats are the programs delivered in?", a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements."}
		],
  	},
  	{
    	id: "misc",
    	label: "Miscellaneous",
    	faqs: [
    	 	 { q: "What is the ideal team size for corporate training?", a: "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts." },
    	 	 { q: "How do we get started with Accredian?", a: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs." },
    	],
  	},
]

export default function FAQ() {
	const [activeTopic, setActiveTopic] = useState(faqData[0].id);
	const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
	const currentFaqs = faqData.find(t => t.id === activeTopic)?.faqs || []

	const handleTopicChange = (id: string) => {
		setActiveTopic(id)
		setActiveQuestion(null)
  	}

	return (
	    <div className="pt-16 pb-8 px-6 max-w-5xl mx-auto flex flex-col">
	   		<h2 className="text-2xl md:text-4xl font-semibold mb-10">
        		Frequently Asked 
        		<span className="text-blue-500"> Questions</span>
      		</h2>
      		<div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
		    	<div className="flex flex-row overflow-x-auto md:flex-col md:overflow-x-visible gap-2 pb-1 md:pb-0">
		    		{faqData.map(topic => (
				    	<button
				    		key={topic.id}
				      		onClick={() => handleTopicChange(topic.id)}
				      		className={`flex-shrink-0 text-left px-4 py-2.5 rounded-lg border border-gray-200 text-sm transition-colors ${
								activeTopic === topic.id
								  ? "bg-gray-100 font-medium text-blue-500 border-0"
								  : "text-gray-500 hover:bg-gray-50"
							  }`}
				    	>
				      		{topic.label}
				    	</button>
		      		))}
		    	</div>
		    	<div className="pl-8 flex flex-col gap-2 border-l border-gray-200">
		      		{currentFaqs.map((faq, i) => (
		        		<FAQItem
							key={i}
						  	question={faq.q}
						  	answer={faq.a}
						  	isOpen={activeQuestion === i}
						  	onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
						/>
					))}
				</div>
			</div>
			<EnquireButton label="Enquire Now" className="mt-8 self-center px-4 py-2 rounded-lg bg-blue-500 text-white"/>
		</div>
	);
}
