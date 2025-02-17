import Navbar from "@/components/common/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import YourDigitalAlly from "./YourDigitalAlly/YourDigitalAlly";
import Head from "next/head";
import HelpingSMEs from "./HelpingSMEs/HelpingSMEs";
import TestimonialsAndStats from "./TestimonialsAndStats/TestimonialsAndStats";
import Tailored from "./Tailored/Tailored";
import Footer from "@/components/common/Footer/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Webally - Building high-performing sites that drive credibility,
					clients, and results.
				</title>
				<desc>
					Your website is your brand’s identity. At WebAlly, we build
					high-performing sites that drive credibility, clients, and results.
				</desc>
				<link
					rel="icon"
					href="/favicon.svg"
				/>
			</Head>
			<div className="bg-blue-1 relative">
				<div className="fixed w-full top-0 left-0 z-20">
					<Navbar />
				</div>
				<div className="mt-[0px] md:mt-[65px]">
					<HeroSection />
				</div>

				<YourDigitalAlly />
				<HelpingSMEs />
				<TestimonialsAndStats />
				<Tailored />
				<Footer />
			</div>
		</>
	);
}
