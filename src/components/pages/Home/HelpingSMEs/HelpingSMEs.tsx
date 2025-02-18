import { WHITE } from "@/components/config/constants";
import { Box, Card, Group, Image, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { data } from "./data";

export default function HelpingSMEs() {
	return (
		<Box
			className="pt-[50px] lg:pt-[100px] pb-[380px] lg:pb-[480px] px-[15px] md:px-[30px] lg:px-[80px]"
			bg={"#000"}>
			<Text c={WHITE}>• Software for SMEs</Text>

			<Box className="w-full lg:w-[80%] mx-auto mt-[40px]">
				<Box className="w-full lg:w-1/2">
					<Text
						c={WHITE}
						fz={{ base: 24, md: 26, lg: 30 }}
						fw={500}
						className="w-fit">
						Helping SMEs Build, Scale, and Thrive Online
					</Text>
					<p className="text-white-1/70 w-auto mt-1">
						For small and medium-sized businesses, a strong online presence is
						no longer optional—it&apos;s essential. Whether you&apos;re a
						startup, service provider, or retail business,{" "}
						<span className="text-[#fff] font-medium">WebAlly</span> helps SMEs
						build scalable, high-converting websites that drive sales,
						visibility, and business growth.
					</p>
				</Box>

				<Stack
					className="w-full py-2 flex"
					gap={40}
					mt={40}>
					{data.map((item, index) => (
						<ItemCard
							key={index}
							item={item}
						/>
					))}
				</Stack>
			</Box>
		</Box>
	);
}

interface Item {
	src: string;
	title: string;
	description: string;
	link: string;
}

interface ItemCardProps {
	item: Item;
}

function ItemCard({ item }: ItemCardProps) {
	return (
		<Group
			gap={50}
			className="w-full lg:w-[80%] mx-auto">
			<Card
				h={250}
				w={250}
				bg={WHITE}
				radius={15}
				p={20}>
				<Image
					src={item.src}
					alt=""
				/>
			</Card>

			<Stack className="w-full lg:w-[60%]">
				<Text
					c={WHITE}
					fz={{ base: 24, md: 26, lg: 30 }}
					fw={500}
					className="w-fit">
					{item.title}
				</Text>
				<p className="text-white-1/70 w-auto mt-1">{item.description}</p>

				<Link
					className="text-[#9EB7E2] flex gap-2"
					href={item.link}>
					Learn More{" "}
					<span>
						<svg
							width="21"
							height="22"
							viewBox="0 0 21 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M10.5 5.75H5.25C4.78587 5.75 4.34075 5.93437 4.01256 6.26256C3.68437 6.59075 3.5 7.03587 3.5 7.5V16.25C3.5 16.7141 3.68437 17.1592 4.01256 17.4874C4.34075 17.8156 4.78587 18 5.25 18H14C14.4641 18 14.9092 17.8156 15.2374 17.4874C15.5656 17.1592 15.75 16.7141 15.75 16.25V11M9.625 11.875L17.5 4M17.5 4H13.125M17.5 4V8.375"
								stroke="#9EB7E2"
								stroke-width="1.75"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</Link>
			</Stack>
		</Group>
	);
}
