interface Item {
	label: string;
	href: string;
}

interface Office {
	location: string;
	address: string;
}

export interface FooterItem {
	title: string;
	itemList?: Item[];
	offices?: Office[];
}

export const data: FooterItem[] = [
	{
		title: "RESOURCES",
		itemList: [
			{
				label: "Case Studies",
				href: "/about",
			},
			{
				label: "Blog",
				href: "/about",
			},
			{
				label: "FAQs",
				href: "/about",
			},
			{
				label: "SEO & Performance Tips",
				href: "/about",
			},
			{
				label: "Web Design Best Practices",
				href: "/about",
			},
		],
	},
	{
		title: "SERVICES",
		itemList: [
			{
				label: "Custom Website Development",
				href: "/about",
			},
			{
				label: "Website Revamp & Modernization",
				href: "/about",
			},
			{
				label: "Maintenance & Support",
				href: "/about",
			},
			{
				label: "Performance Optimization",
				href: "/about",
			},
			{
				label: "Corporate Web Solutions",
				href: "/about",
			},
		],
	},
	{
		title: "COMPANY",
		itemList: [
			{
				label: "About Us",
				href: "/about",
			},
			{
				label: "Industries We Serve",
				href: "/about",
			},
			{
				label: "Careers",
				href: "/about",
			},
			{
				label: "Testimonials",
				href: "/about",
			},
		],
	},
	{
		title: "OFFICES",

		offices: [
			{
				location: "Lagos, Nigeria",
				address: "13, Onikepo Akande Street, Lekki, Lagos, Nigeria",
			},
			{
				location: "United Kingdom",
				address: "NR11 5TD, 99 Wressle Road, Plumstead",
			},
		],
	},
];

export const data2: Item[] = [
	{
		label: "Terms",
		href: "",
	},
	{
		label: "Privacy policy",
		href: "",
	},
	{
		label: "Cookies",
		href: "",
	},
];

export const socialMediaIcons = [
	{
		name: "LinkedIn",
		icon: "bi:linkedin",
		href: "",
	},
	{
		name: "Instagram",
		icon: "bi:instagram",
		href: "",
	},
	{
		name: "X",
		icon: "bi:twitter-x",
		href: "",
	},
];
