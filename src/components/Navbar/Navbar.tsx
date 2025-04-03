import Link from "next/link";
import { WeballyLogo } from "../svgs/svgs";
import { links } from "./data";

export default function Navbar() {
	return (
		<nav className="h-[80px] px-[15px] md:px-[30px] lg:px-[150px] flex justify-between items-center z-[250]">
			<div className="flex items-center">
				<div className="w-[200px]">
					<WeballyLogo />
				</div>

				<div className="flex gap-[30px]">
					{links.map((link, index) => (
						<Link
							key={index}
							className="font-semibold text-lg tracking-tight"
							href={link.href}>
							{link.label}
						</Link>
					))}
				</div>
			</div>

			<div>
				<button className="bg-[#142828] rounded-full text-white px-6 py-2">
					Let&apos;s talk
				</button>
			</div>
		</nav>
	);
}
