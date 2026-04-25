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
	return (
		<div className="mt-16 text-center flex flex-col gap-4">
			<p className="text-4xl font-semibold">Our Proven <span className="text-blue-600">Partnerships</span></p>
			<p>Successful Collaborations With the <span className="text-blue-600">Industry’s Best</span></p>
			<ul className="mt-12 inline-flex items-center justify-evenly">
				{Object.entries(clients).map(([name, imgSrc]) => (
    				<ClientItem key={name} name={name} imgSrc={imgSrc}/>
  				))}
			</ul>
		</div>
	);
}
