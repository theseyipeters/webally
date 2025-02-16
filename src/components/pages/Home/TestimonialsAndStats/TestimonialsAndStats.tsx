/* eslint-disable @typescript-eslint/no-explicit-any */

import { D_BLUE, WHITE } from "@/components/config/constants";
import { Box, Card, Group, Image, rem, Stack, Text } from "@mantine/core";
import React, { useRef, useState } from "react";
import { stats, Testimonial, testimonials } from "./data";
import testimonialStyles from "@/styles/testimonialCarousel.module.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mantine/hooks";

export default function TestimonialsAndStats() {
	const isMobile = useMediaQuery(`(max-width: 768px)`);
	const [activeSlide, setActiveSlide] = useState(0);
	const autoplay = useRef(Autoplay({ delay: 6000 }));
	const emblaRef = useRef<any>(null);

	const handleSlideChange = (index: number) => {
		setActiveSlide(index);
		if (emblaRef.current) {
			emblaRef.current.scrollTo(index);
		}
	};

	const slides = testimonials.map((item, index) => (
		<Carousel.Slide key={index}>
			<Cardd testimonial={item} />
		</Carousel.Slide>
	));

	return (
		<Box
			className="pb-[80px] px-[0px] md:px-[30px] lg:px-[80px] relative"
			bg={"#fff"}>
			<Card
				radius={isMobile ? 0 : 20}
				pt={50}
				px={{ base: 20, md: 50 }}
				bg={D_BLUE}
				h={{ base: "fit-content" }}
				className="w-full lg:w-[80%] mx-auto absolute -top-[300px] ">
				<Group>
					{testimonials.map((item, index) => (
						<Box
							key={index}
							onClick={() => handleSlideChange(index)}
							h={{ base: 40, md: 50 }}
							w={{ base: 40, md: 50 }}
							className={`${activeSlide === index ? "" : "opacity-45"}`}
							style={{ cursor: "pointer", position: "relative" }}>
							<Image
								src={item.image}
								alt=""
								radius={5}
							/>
							{activeSlide === index && (
								<svg
									className="w-[65px] md:w-[75px] h-[65px] md:h-[75px] absolute -top-[12.5px] -left-[12px] pointer-events-none"
									viewBox="0 0 60 60">
									<path
										d="M5,5 L55,5 L55,55 L5,55 Z"
										fill="none"
										stroke={WHITE}
										strokeWidth="2"
										strokeDasharray="200"
										strokeDashoffset={activeSlide === index ? 0 : 0}
										style={{
											transition: `stroke-dashoffset ${1000}ms linear  ${1000}ms`,
										}}
									/>
								</svg>
							)}
						</Box>
					))}
				</Group>
				<Carousel
					w={"100%"}
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
					plugins={[autoplay.current]}
					// onMouseEnter={autoplay.current.stop}
					// onMouseLeave={autoplay.current.reset}
					classNames={testimonialStyles}>
					{slides}
				</Carousel>
			</Card>

			<Box className="w-full lg:w-[80%] mx-auto -mt-[250px] lg:-mt-[200px]">
				{/* <SimpleGrid cols={{ base: 2, sm: 2, lg: 4 }}> */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grow flex-wrap">
					{stats.map((stat, index) => (
						<Stat
							stat={stat}
							key={index}
						/>
					))}
				</div>
				{/* </SimpleGrid> */}
			</Box>
		</Box>
	);
}

interface Stat {
	label: string;
	value: string;
}
interface StatProps {
	stat: Stat;
}
function Stat({ stat }: StatProps) {
	return (
		<Stack
			align="center"
			gap={0}>
			<p className="leading-[90px] text-[55px] sm:text-[70px] md:text-[80px]">
				{stat.value}
			</p>
			<Text>{stat.label}</Text>
		</Stack>
	);
}

interface CarddProps {
	testimonial: Testimonial;
}

function Cardd({ testimonial }: CarddProps) {
	return (
		<Box>
			<Stack>
				<Text
					fz={{ base: 20, md: 30 }}
					c={WHITE}>
					&quot;<span className="ml-0 md:ml-[40px]">{testimonial.content}</span>
					&quot;
				</Text>

				<Box mt={{ base: 50, md: 100 }}>
					<Text
						fz={20}
						fw={500}
						c={WHITE}>
						{testimonial.name}
					</Text>
					<Text
						fz={16}
						c={WHITE}>
						{testimonial.positionHeld}
					</Text>
				</Box>
			</Stack>
		</Box>
	);
}
