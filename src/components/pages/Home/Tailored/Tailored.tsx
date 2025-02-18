import { D_BLUE, L_BLUE, WHITE } from "@/components/config/constants";
import {
	Box,
	Button,
	Card,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "@mantine/core";
import { data, logos } from "./data";
import { RadialSvg } from "@/components/svgs/svg";
import { useMediaQuery } from "@mantine/hooks";

export default function Tailored() {
	const isMobile = useMediaQuery(`(max-width: 768px)`);
	return (
		<Box bg={D_BLUE}>
			<Box
				className="pt-[50px] lg:pt-[100px] pb-[60px] lg:pb-[80px] px-[15px] md:px-[30px] lg:px-[80px] lg:rounded-bl-3xl lg:rounded-br-3xl"
				bg={"#F3F3F3"}>
				<Stack
					align="center"
					className="w-full lg:w-1/2 mx-auto">
					<div className="flex -gap-4">
						{logos.map((logo, index) => (
							<Image
								className={`border-2 border-white-1 -mr-6`}
								radius={50}
								src={logo}
								alt=""
								key={index}
								h={isMobile ? 60 : 80}
								w={isMobile ? 60 : 80}
							/>
						))}
					</div>

					<div className="flex flex-col items-center">
						<Text
							ta={"center"}
							lh={1.2}
							c={D_BLUE}
							fz={{ base: 24, md: 30, lg: 36 }}
							fw={500}
							className="w-fit">
							We build for Businesses, SMEs & Industry Leaders
						</Text>

						<p className="text-blue-1/70 w-auto mt-2 text-center">
							WebAlly is built for companies that see their website as a growth
							tool, not just an online placeholder.
						</p>
					</div>
				</Stack>

				<SimpleGrid
					mt={40}
					className="w-full lg:w-[80%] mx-auto"
					cols={{ base: 1, sm: 2, lg: 2 }}>
					{data.map((item, index) => (
						<Card
							py={40}
							key={index}>
							<Stack align="center">
								<Image
									src={item.icon}
									alt=""
									h={30}
									w={30}
								/>
								<Text
									ta={"center"}
									lh={1.2}
									c={D_BLUE}
									fz={20}
									fw={500}
									className="w-fit">
									{item.title}
								</Text>
							</Stack>
							<Box className="">
								<p className="text-blue-1/70 w-auto mt-2 text-center">
									{item.description}
								</p>
							</Box>
						</Card>
					))}
				</SimpleGrid>
			</Box>

			<Box className="relative overflow-hidden pt-[50px] lg:pt-[100px] pb-[60px] lg:pb-[80px] px-[15px] md:px-[30px] lg:px-[80px]">
				<Box className="hidden lg:flex justify-between">
					<Text c={WHITE}>• Let’s get started</Text>

					<Box mt={50}>
						<Stack gap={10}>
							<Text
								c={WHITE}
								fz={{ base: 32, md: 42, lg: 52 }}
								ml={40}
								fw={500}
								lh={1}
								className="">
								Your Website Should Work
							</Text>
							<Text
								c={WHITE}
								fz={{ base: 32, md: 42, lg: 52 }}
								fw={500}
								lh={1}
								className="">
								As Hard As You Do!
							</Text>
						</Stack>
					</Box>

					<Box mt={50}>
						<Button
							bg={L_BLUE}
							h={45}
							fw={500}
							fz={{ base: 14, md: 16, xl: 16 }}
							radius={50}
							c={D_BLUE}>
							Build something for me
						</Button>
					</Box>
				</Box>
				<Box className="flex flex-col lg:hidden justify-between">
					<Text c={WHITE}>• Let’s get started</Text>

					<div>
						<Box mt={20}>
							<Stack gap={10}>
								<Text
									c={WHITE}
									fz={{ base: 32, md: 42, lg: 52 }}
									fw={500}
									lh={1}
									className="">
									Your Website Should Work As Hard As You!
								</Text>
							</Stack>
						</Box>

						<Box mt={20}>
							<Button
								bg={L_BLUE}
								h={45}
								fw={500}
								fz={{ base: 14, md: 16, xl: 16 }}
								radius={50}
								c={D_BLUE}>
								Build something for me
							</Button>
						</Box>
					</div>
				</Box>
				<div className="absolute top-0 left-[-50px] w-full h-full z-[0]">
					<RadialSvg />
				</div>
			</Box>
		</Box>
	);
}
