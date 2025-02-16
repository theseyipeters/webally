import { D_BLUE, GRAY, L_BLUE, WHITE } from "@/components/config/constants";
import { CrafterDashboard, RadialSvg } from "@/components/svgs/svg";
import { Box, Button, Group, Stack, Text } from "@mantine/core";
import React from "react";

export default function HeroSection() {
	return (
		<div className="bg-white-1 w-full h-[900px] px-0 md:px-[20px] lg:px-[40px]">
			<Box
				className="h-full w-full rounded-none md:rounded-3xl relative overflow-hidden"
				bg={D_BLUE}>
				<Stack
					align="center"
					mt={80}>
					<Box className="z-10 flex flex-col items-center justify-center h-full">
						<label className="text-white-1 text-sm md:text-base xl:text-lg">
							• We provide businesses with
						</label>
						<Text
							ta={"center"}
							c={WHITE}
							lh={1.2}
							fw={500}
							fz={62}>
							Your Website is <br /> NOT a placeholder
						</Text>
					</Box>
					<Box className="z-10 flex flex-col items-center justify-center h-full w-[50%]">
						<p className="text-white-1 w-full  md:w-[70%] text-center text-sm md:text-base xl:text-lg">
							Your website is your brand’s identity. At WebAlly, we build
							high-performing sites that drive credibility, clients, and
							results.
						</p>
					</Box>

					<Group>
						<Button
							bg={L_BLUE}
							h={45}
							fw={500}
							fz={{ base: 14, md: 16, xl: 16 }}
							radius={50}
							c={D_BLUE}>
							Build something for me
						</Button>
						<Button
							bg={GRAY}
							variant="outline"
							color={L_BLUE}
							h={45}
							fw={500}
							fz={{ base: 14, md: 16, xl: 16 }}
							radius={50}
							c={L_BLUE}>
							Contact sales
						</Button>
					</Group>

					<div className="z-10 mt-10">
						<CrafterDashboard />
					</div>
				</Stack>
				<div className="absolute top-0 left-[-50px] w-full h-full z-[0]">
					<RadialSvg />
				</div>
			</Box>
		</div>
	);
}
