import Navbar from "@/components/common/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import YourDigitalAlly from "./YourDigitalAlly/YourDigitalAlly";
import Head from "next/head";
import HelpingSMEs from "./HelpingSMEs/HelpingSMEs";
import TestimonialsAndStats from "./TestimonialsAndStats/TestimonialsAndStats";
import Tailored from "./Tailored/Tailored";
import Footer from "@/components/common/Footer/Footer";
import Script from "next/script";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Webally - Building high-performing sites that drive credibility,
					clients, and results.
				</title>
				<meta
					name="description"
					content="Elevate your brand with WebAlly. We specialize in creating websites that are not only visually stunning but also optimized for performance, ensuring your business stands out online."
				/>
				<link
					rel="icon"
					href="/favicon.svg"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>

				{/* <!-- Open Graph Meta Tags --> */}
				<meta
					property="og:title"
					content="Webally - Building high-performing sites that drive credibility, clients, and results."
				/>
				<meta
					property="og:description"
					content="Your website is your brand’s identity. At WebAlly, we build high-performing sites that drive credibility, clients, and results."
				/>
				<meta
					property="og:image"
					content="https://www.imghippo.com/i/TG7850Pg.jpg"
				/>
				<meta
					property="og:url"
					content="https://webally-mauve.vercel.app/"
				/>
				<meta
					property="og:type"
					content="website"
				/>

				{/* <!-- Twitter Card Meta Tags (optional, for Twitter) --> */}
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta
					name="twitter:title"
					content="Webally - Building high-performing sites that drive credibility, clients, and results."
				/>
				<meta
					name="twitter:description"
					content="Elevate your brand with WebAlly. We specialize in creating websites that are not only visually stunning but also optimized for performance, ensuring your business stands out online."
				/>
				<meta
					name="twitter:image"
					content="https://www.imghippo.com/i/iBxj6659Qxk.jpg"
				/>

				{/* <!-- Additional Taglines as Meta Keywords (Optional) --> */}
				<meta
					name="keywords"
					content="WebAlly, high-performing websites, credibility, client attraction, results-driven design, web development, brand identity"
				/>

				{/* meta taglines */}

				<meta
					name="tagline"
					content="Your brand, amplified. WebAlly creates websites that drive credibility and growth."
				/>

				<meta
					name="tagline"
					content="WebAlly: Where design meets performance. Let’s build a website that works for you.."
				/>

				<meta
					name="tagline"
					content="Websites that captivate, convert, and grow. Powered by WebAlly."
				/>
				<meta
					name="tagline"
					content="WebAlly: Crafting high-performing websites for brands that mean business."
				/>
			</Head>
			<Script
				src="//code.jivosite.com/widget/PeBIhfOe4u"
				async></Script>
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
