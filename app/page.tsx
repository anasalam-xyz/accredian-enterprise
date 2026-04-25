import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import CAT from "@/components/CAT";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";

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
    	<section id="cat">
    		<CAT/>
    	</section>
    	<section id="how-it-works">
    		<HowItWorks/>
    	</section>
    	<section id="faqs">
    		<FAQs/>
    	</section>
    	<section id="testimonials">
    		<Testimonials/>
    	</section>
    </main>
  );
}
