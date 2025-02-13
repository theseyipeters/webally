import { D_BLUE, L_BLUE, WHITE } from "@/components/config/constants";
import { Box, Card, Flex, Paper, SimpleGrid, Stack, Text } from "@mantine/core";

export default function YourDigitalAlly() {
	return (
		<Box
			className="pt-[100px] pb-[80px] px-[15px] md:px-[30px] lg:px-[80px]"
			bg={WHITE}>
			<Text c={D_BLUE}>• Software for Venture Capitals</Text>
			<Box className="w-full lg:w-[80%] mx-auto mt-[40px]">
				<Text
					c={D_BLUE}
					fz={{ base: 24, md: 26, lg: 30 }}
					fw={500}
					className="">
					Your Digital Ally for Growth & Transformation
				</Text>

				<Box
					mt={40}
					className="border">
					<SimpleGrid
						cols={{ base: 1, md: 2 }}
						spacing={80}>
						<Flex align={"center"}>
							<Paper
								bg={L_BLUE}
								radius={20}
								p={{ base: 20, md: 30 }}
								w={"100%"}
								h={700}>
								<Card
									radius={15}
									h={"100%"}></Card>
							</Paper>
						</Flex>
						<Flex align={"center"}>
							<Stack w={"100%"}>
								<Card h={150}></Card>
								<Card h={150}></Card>
								<Card h={150}></Card>
							</Stack>
						</Flex>
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
}
