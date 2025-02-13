import Navbar from "@/components/common/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import YourDigitalAlly from "./YourDigitalAlly/YourDigitalAlly";

export default function Home() {
	return (
		<div className="bg-blue-1 relative">
			<div className="fixed w-full top-0 left-0 z-20">
				<Navbar />
			</div>
			<div className="mt-[70px] md:mt-[90px] ">
				<HeroSection />
			</div>

			<YourDigitalAlly />
		</div>
	);
}
