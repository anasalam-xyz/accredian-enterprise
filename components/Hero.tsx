import { CircleCheck } from 'lucide-react'
import EnquireButton from "@/components/ui/EnquireButton";

export default function Hero() {
    return (
        <div className="my-12 mx-4 bg-blue-50 shadow-[0_0_36px_rgba(0,0,0,0.2)] 
        	flex flex-col md:flex-row-reverse justify-between rounded-3xl"
        >
            <div className="md:w-[45%]">
                <img src="/images/corporate-big-hero-v4.webp"/>
            </div>
            <div className="p-14 flex flex-col gap-10 md:w-[55%]">
                <p className="text-6xl font-medium">
                    Next-Gen <span className="text-blue-600">Expertise</span> 
                    &nbsp; for Your <span className="text-blue-600">Enterprise</span>
                </p>
                <p className="w-84 text-xl font-medium">Cultivate high-performance teams through expert learning.</p>
                <ul className="flex flex-row gap-4">
                    <li className="inline-flex items-center gap-2">
                    	<CircleCheck className="size-6 text-green-600"/>
                    	<p className="text-sm font-medium">Tailored Solutions</p>
                    </li>
                    <li className="inline-flex items-center gap-2">
                    	<CircleCheck className="size-6 text-green-600"/>
                    	<p className="text-sm font-medium">Industry Insights</p>
                    </li>
                    <li className="inline-flex items-center gap-2">
                    	<CircleCheck className="size-6 text-green-600"/>
                    	<p className="text-sm font-medium">Expert Guidance</p>
                    </li>
                </ul>
                <EnquireButton label="Enquire Now" className="md:w-48 px-4 py-2 bg-blue-500 cursor-pointer 
                	text-white text-lg font-medium rounded-lg hover:shadow-sm shadow-blue-500/50"
                />
        	</div>
        </div>
    );
}
