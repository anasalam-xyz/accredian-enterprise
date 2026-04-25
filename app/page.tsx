import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge"

export default function Home() {
  return (
    <main className="my-16 flex flex-col gap-18">
    	<section id="hero">
    		<Hero/>
    	</section>
    	<section id="stats">
    		<Stats/>
    	</section>
    	<section id="clients">
    		<Clients/>
    	</section>
    	<section id="accredian-edge">
    		<AccredianEdge/>
    	</section>
    </main>
  );
}
