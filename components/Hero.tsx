
export default function Hero() {
    return (
        <div className="mx-4 bg-blue-50 flex flex-col md:flex-row-reverse justify-between">
            <div>
                <img src="/images/corporate-big-hero-v4.webp"/>
            </div>
            <div>
                <p className="text-3xl font-bold">
                    Next-Gen <span className="text-blue-400">Expertise</span> 
                    for Your <span className="text-blue-400">Enterprise</span>
                </p>
                <p>Cultivate high-performance teams through expert learning.</p>
                <ul className="flex flex-row">
                    <li>Tailored Solutions</li>
                    <li>Industry Insights</li>
                    <li>Expert Guidance</li>
                </ul>
                <button className="px-4 py-2">
                    Enquire Now
                </button>
            </div>
        </div>
    );
}
