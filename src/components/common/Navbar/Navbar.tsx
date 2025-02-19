import { useState } from "react";
import { NGNFlag, WebAllyLogo } from "@/components/svgs/svg";
import Link from "next/link";
import { links } from "./data";
import { Button, Burger, Drawer } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { D_BLUE, WHITE } from "@/components/config/constants";

export default function Navbar() {
	const [opened, setOpened] = useState(false);
	const isMobile = useMediaQuery(`(max-width: 768px)`);

	return (
		<nav className="bg-white-1 w-full h-[70px] md:h-[90px] px-[15px] md:px-[30px] lg:px-[100px] py-3 lg:py-6 flex items-center justify-center">
			<div className="w-full flex items-center justify-between">
				<div className="w-[100px] md:w-[100px] xl:w-[120px] text-blue-1">
					<WebAllyLogo />
				</div>

				{isMobile && (
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
					/>
				)}

				{!isMobile && (
					<div>
						<ul className="flex items-center justify-center space-x-8">
							{links.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className="text-blue-1 text-sm md:text-base xl:text-lg hover:opacity-45 transition-all duration-300">
									{link.label}
								</Link>
							))}
						</ul>
					</div>
				)}

				{!isMobile && (
					<div className="flex items-center gap-6">
						<div className="flex gap-1 items-end">
							<div className="flex items-center">
								<span>NG</span>
								<span>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M5.01852 7.41842C5.11977 7.3173 5.25702 7.2605 5.40012 7.2605C5.54322 7.2605 5.68047 7.3173 5.78172 7.41842L9.00012 10.6368L12.2185 7.41842C12.3209 7.32304 12.4563 7.27111 12.5962 7.27358C12.7361 7.27605 12.8696 7.33272 12.9685 7.43166C13.0674 7.53059 13.1241 7.66407 13.1266 7.80397C13.129 7.94386 13.0771 8.07926 12.9817 8.18162L9.38172 11.7816C9.28047 11.8827 9.14322 11.9395 9.00012 11.9395C8.85702 11.9395 8.71977 11.8827 8.61852 11.7816L5.01852 8.18162C4.9174 8.08037 4.8606 7.94312 4.8606 7.80002C4.8606 7.65692 4.9174 7.51967 5.01852 7.41842Z"
											fill="#333F48"
										/>
									</svg>
								</span>
							</div>

							<NGNFlag />
						</div>

						<Button
							bg={D_BLUE}
							h={45}
							fw={500}
							fz={{ base: 14, md: 16, xl: 16 }}
							radius={50}
							c={WHITE}>
							Request a quote
						</Button>
					</div>
				)}
			</div>

			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				padding="xl"
				size="sm">
				<ul className="flex flex-col space-y-4">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className="text-blue-1 text-lg xl:text-lg hover:opacity-45 transition-all duration-300">
							{link.label}
						</Link>
					))}
				</ul>

				<div className="flex flex-col items-start gap-4 mt-8">
					<div className="flex gap-1 items-end">
						<div className="flex items-center">
							<span>NG</span>
							<span>
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.01852 7.41842C5.11977 7.3173 5.25702 7.2605 5.40012 7.2605C5.54322 7.2605 5.68047 7.3173 5.78172 7.41842L9.00012 10.6368L12.2185 7.41842C12.3209 7.32304 12.4563 7.27111 12.5962 7.27358C12.7361 7.27605 12.8696 7.33272 12.9685 7.43166C13.0674 7.53059 13.1241 7.66407 13.1266 7.80397C13.129 7.94386 13.0771 8.07926 12.9817 8.18162L9.38172 11.7816C9.28047 11.8827 9.14322 11.9395 9.00012 11.9395C8.85702 11.9395 8.71977 11.8827 8.61852 11.7816L5.01852 8.18162C4.9174 8.08037 4.8606 7.94312 4.8606 7.80002C4.8606 7.65692 4.9174 7.51967 5.01852 7.41842Z"
										fill="#333F48"
									/>
								</svg>
							</span>
						</div>

						<NGNFlag />
					</div>

					<Button
						w={"100%"}
						bg={D_BLUE}
						h={50}
						fw={500}
						fz={{ base: 16, md: 16, xl: 16 }}
						radius={50}
						c={WHITE}>
						Request a quote
					</Button>
				</div>
			</Drawer>
		</nav>
	);
}
