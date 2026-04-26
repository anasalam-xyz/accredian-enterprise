import ClientItem from './ui/ClientItem'

export default function Clients() {
	const clients: Record<string, string> = {
		reliance: "/logos/rel.png",
		hcl: "/logos/hcl.png",
		ibm: "/logos/ibm.png",
		crif: "/logos/crif.png",
		adp: "/logos/adp.svg",
		bayer: "/logos/bayer.svg",
	}
	const entries = Object.entries(clients);
	 
	return (
		<div className="mt-16 text-center flex flex-col gap-4">
			<p className="text-2xl md:text-4xl font-semibold">Our Proven <span className="text-blue-600">Partnerships</span></p>
			<p className="text-sm md:text-lg">Successful Collaborations With the <span className="text-blue-600">Industry’s Best</span></p>
			<div className="mt-12 overflow-hidden relative">
        	{/* Fade edges */}
		    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
		    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

		    <ul className="inline-flex gap-16 animate-marquee">
		      {/* Render twice for seamless loop */}
		      {[...entries, ...entries].map(([name, imgSrc], i) => (
		        <ClientItem key={`${name}-${i}`} name={name} imgSrc={imgSrc} />
		      ))}
		    </ul>
		  </div>
		</div>
	);
}
