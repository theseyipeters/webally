import SectionWrap from "@/components/common/SectionWrap/SectionWrap";
import { Asterix } from "@/components/svgs/svgs";
import React from "react";

export default function Banner() {
	return (
		<SectionWrap>
			<div className="pt-[120px] w-full">
				<div className="flex items-start w-full">
					<div className="w-[220px]">
						<Asterix />
					</div>

					<div className="w-full">
						<h1 className="text-[74px] tracking-tighter font-medium leading-[82px]">
							Let’s make digital growth seamless and reliable with WebAlly.
						</h1>
					</div>
				</div>

				<div className="mt-[200px] flex items-start justify-between">
					<div className="flex">
						<div className="flex items-center gap-2 w-[180px]">
							<div className="bg-black rounded-full w-3 h-3"></div>
							<h3 className="font-semibold">WA/00</h3>
						</div>

						<div>
							<p className="tracking-tighter w-[600px] font-medium text-lg">
								Your website is your brand’s identity. At WebAlly, we build
								high-performing sites that drive credibility, clients, and
								results.
							</p>
						</div>
					</div>
					<div>
						<h3 className="font-medium tracking-tight">/ home</h3>
					</div>
				</div>
			</div>
		</SectionWrap>
	);
}
