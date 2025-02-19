/* eslint-disable @typescript-eslint/no-explicit-any */

import { D_BLUE, L_BLUE, WHITE } from "@/components/config/constants";
import {
	Box,
	Card,
	Flex,
	Group,
	Image,
	Paper,
	rem,
	SimpleGrid,
	Stack,
	Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useEffect, useRef, useState } from "react";
import carouselStyles from "@/styles/carousel2.module.css";
import { data, items } from "./data";
import styles from "./YourDigitalAlly.module.css";

export default function YourDigitalAlly() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const emblaRef = useRef<any>(null);
	const handleSlideChange = (index: number) => {
		setActiveSlide(index);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % data.length);

			if (emblaRef.current) {
				emblaRef.current.scrollTo(activeSlide);
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [activeSlide]);

	const slides = data.map((item, index) => (
		<Carousel.Slide key={index}>
			<Cardd {...item} />
		</Carousel.Slide>
	));
	return (
		<Box
			className="pt-[50px] lg:pt-[100px] pb-[60px] lg:pb-[80px] px-[15px] md:px-[30px] lg:px-[80px]"
			bg={WHITE}>
			<Text c={D_BLUE}>• Software for Venture Capitals</Text>
			<Box className="w-full xl:w-[80%] mx-auto mt-[40px]">
				<Text
					c={D_BLUE}
					fz={{ base: 24, md: 26, lg: 30 }}
					fw={500}
					className="">
					Your Digital Ally for Growth & Transformation
				</Text>

				<Box mt={40}>
					<SimpleGrid
						cols={{ base: 1, md: 2 }}
						spacing={80}>
						<Flex
							w={{ base: "100%", sm: "60%", md: "100%", xl: "90%" }}
							align={"center"}
							mx={"auto"}>
							<Paper
								bg={L_BLUE}
								radius={20}
								p={{ base: 20, md: 30 }}
								w={"100%"}
								// h={"fit-content"}
								h={{ base: "fit-content", lg: 600 }}>
								<Card
									radius={15}
									h={"100%"}>
									<Carousel
										w={"100%"}
										withIndicators
										slideSize={"100%"}
										h={"100%"}
										height={"100%"}
										slideGap={{ base: rem(2), sm: "sm" }}
										align="start"
										slidesToScroll={1}
										getEmblaApi={(api) => (emblaRef.current = api)}
										containScroll="keepSnaps"
										withControls={false}
										controlSize={35}
										onSlideChange={handleSlideChange}
										classNames={carouselStyles}>
										{slides}
									</Carousel>
								</Card>
							</Paper>
						</Flex>
						<Flex align={"center"}>
							<Stack w={"100%"}>
								{items.map((item, index) => (
									<Card
										className="transition-all duration-300"
										bg={hoveredIndex === index ? "#fff" : "transparent"}
										key={index}
										onMouseEnter={() => setHoveredIndex(index)}
										onMouseLeave={() => setHoveredIndex(null)}>
										<Flex
											align={"center"}
											gap={15}>
											{hoveredIndex === index && (
												<div className="h-full">
													<svg
														width="5"
														height="100%"
														viewBox="0 0 5 100"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<rect
															y="0.213867"
															width="5"
															height="100%"
															rx="2.5"
															fill="#333F48"
														/>
													</svg>
												</div>
											)}

											<Stack gap={5}>
												<Text
													fz={24}
													fw={500}
													className="">
													{item.title}
												</Text>
												<Text className="opacity-70">{item.desc}</Text>
											</Stack>
										</Flex>
									</Card>
								))}
							</Stack>
						</Flex>
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}

interface CardProps {
	content?: string;
	name?: string;
	logo?: string;
	img?: string;
}

function Cardd({ content, logo, name, img }: CardProps) {
	return (
		<Stack
			align={"start"}
			gap={20}
			justify={"flex-start"}
			h={"100%"}
			w={"100%"}>
			<Group>
				<Flex
					align={"center"}
					justify={"center"}
					w={50}>
					<Image
						className="w-full"
						src={logo}
						alt=""
						w={"100%"}
						h={"100%"}
					/>
				</Flex>

				<Text
					fw={500}
					lts={-1.9}
					fz={30}>
					{name}
				</Text>
			</Group>

			<Card
				w={"fit-content"}
				m={"auto"}
				p={25}
				radius={5}
				bg={"#F0F0F0"}
				className={styles.card}>
				<Stack
					gap={10}
					align="center">
					<Flex
						align={"center"}
						justify={"center"}
						w={{ base: "100%", md: 300 }}>
						<Image
							className="w-full"
							src={img}
							alt=""
							w={"100%"}
							h={"100%"}
						/>
					</Flex>
					<Text
						ta={"center"}
						fz={14}
						fw={400}
						c={D_BLUE}>
						{content}
					</Text>
				</Stack>
			</Card>
		</Stack>
	);
}
