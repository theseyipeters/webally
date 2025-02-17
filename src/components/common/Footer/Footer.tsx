import { WebAllyLogo } from "@/components/svgs/svg";
import { Box, Stack, Text } from "@mantine/core";
import { data, FooterItem } from "./data";
import Link from "next/link";
import { WHITE } from "@/components/config/constants";

export default function Footer() {
	return (
		<Box
			className="py-[50px] lg:py-[100px] px-[15px] md:px-[30px] lg:px-[80px]"
			bg={"#000"}>
			<Stack>
				<div className="flex gap-4 items-start justify-between">
					<div className="w-[80px] md:w-[100px] xl:w-[120px] text-white-1">
						<WebAllyLogo />
					</div>

					<div className="grid grid-cols-2 lg:grid-cols-4 items-start justify-between">
						{data.map((item, index) => (
							<FooterBox
								footerItem={item}
								key={index}
							/>
						))}
					</div>
				</div>
			</Stack>
		</Box>
	);
}

interface FooterItemProps {
	footerItem: FooterItem;
}

function FooterBox({ footerItem }: FooterItemProps) {
	return (
		<Stack>
			<p className="font-medium uppercase text-lg text-white-1">
				{footerItem.title}
			</p>

			{footerItem.itemList && (
				<Stack mt={10}>
					{footerItem.itemList.map((item, index) => (
						<Link
							key={index}
							className="w-fit text-white-1 hover:underline underline-offset-4 transition-all duration-300"
							href={item.href}>
							{item.label}
						</Link>
					))}
				</Stack>
			)}

			{footerItem.offices && (
				<Stack mt={10}>
					{footerItem.offices.map((item, index) => (
						<div key={index}>
							<span className="flex gap-2 items-center">
								<svg
									width="17"
									height="17"
									viewBox="0 0 17 17"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.0655 6.49967C13.0655 5.88684 12.9448 5.28 12.7103 4.71382C12.4758 4.14763 12.132 3.63318 11.6987 3.19984C11.2653 2.7665 10.7509 2.42276 10.1847 2.18824C9.61851 1.95371 9.01168 1.83301 8.39884 1.83301C7.78601 1.83301 7.17917 1.95371 6.61299 2.18824C6.0468 2.42276 5.53235 2.7665 5.09901 3.19984C4.66567 3.63318 4.32193 4.14763 4.08741 4.71382C3.85288 5.28 3.73218 5.88684 3.73218 6.49967C3.73218 7.42434 4.00484 8.28434 4.46884 9.00968H4.46351L8.39884 15.1663L12.3342 9.00968H12.3295C12.8101 8.26074 13.0656 7.38956 13.0655 6.49967ZM8.39884 8.49967C7.86841 8.49967 7.3597 8.28896 6.98463 7.91389C6.60956 7.53882 6.39884 7.03011 6.39884 6.49967C6.39884 5.96924 6.60956 5.46053 6.98463 5.08546C7.3597 4.71039 7.86841 4.49967 8.39884 4.49967C8.92928 4.49967 9.43799 4.71039 9.81306 5.08546C10.1881 5.46053 10.3988 5.96924 10.3988 6.49967C10.3988 7.03011 10.1881 7.53882 9.81306 7.91389C9.43799 8.28896 8.92928 8.49967 8.39884 8.49967Z"
										fill="white"
									/>
								</svg>
								<Text
									c={WHITE}
									fw={500}>
									{item.location}
								</Text>
							</span>

							<Text c={WHITE}>{item.address}</Text>
						</div>
					))}
				</Stack>
			)}
		</Stack>
	);
}
