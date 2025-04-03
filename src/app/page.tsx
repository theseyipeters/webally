import HeroSection from "@/sections/HeroSection/HeroSection";
import RestSection from "@/sections/RestSection/RestSection";

export default function Home() {
	return (
		<>
			<div className="w-full relative">
				<div className="-z-10 relative">
					<HeroSection />
				</div>
				<div className="z-[100] w-full  relative">
					<RestSection />
				</div>
			</div>
		</>
	);
}
