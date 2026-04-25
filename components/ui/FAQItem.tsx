"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
 	question: string
 	answer: string
 	isOpen: boolean
	onClick: () => void
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
	return (
		<div className="border border-gray-200 rounded-lg overflow-hidden">
			<button
				onClick={onClick}
				className="w-full text-left px-4 py-4 flex justify-between items-center 
					cursor-pointer font-medium text-sm bg-white hover:bg-gray-50"
			>
				<span className={`${isOpen ? "text-blue-500" : "" }`}>{question}</span>
				<span className="text-xl text-gray-400 flex-shrink-0 ml-3">
					{isOpen ? <ChevronUp className="size-6"/> : <ChevronDown className="size-6"/>}
				</span>
			</button>
			{isOpen && (
				<div className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
					{answer}
				</div>
			)}	
		</div>
	);
}
