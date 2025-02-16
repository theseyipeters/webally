export const stats = [
	{
		label: "Websites built",
		value: "+50",
	},
	{
		label: "Client satisfaction",
		value: "95%",
	},
	{
		label: "Industries served",
		value: "+10",
	},
	{
		label: "Uptime guaranteed",
		value: "99.9%",
	},
];

export interface Testimonial {
	name: string;
	image: string;
	content: string;
	positionHeld?: string;
}

export const testimonials: Testimonial[] = [
	{
		name: "Olamiposi Ekuma",
		image:
			"https://media.licdn.com/dms/image/v2/D4D03AQHDF8kT2LFjow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676234528241?e=1744848000&v=beta&t=9wsKWyEe8dPx4SkS3DnwCmNK_wsW_gfVLnEai5d4O_8",
		positionHeld: "Organizer, TxE Africa",
		content:
			"The Enugu Tech Summit needed a site as bold as its mission—and WebAlly delivered. The new platform made registrations seamless, boosted attendance, and created a lasting digital footprint for our event. If you're serious about making an impact, you need WebAlly.",
	},
	{
		name: "Wale Ajiboye",
		positionHeld: "Co-Founder, Rangeway Company",
		image:
			"https://media.licdn.com/dms/image/v2/D4D03AQHCkMwdKYo7Ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686720893881?e=1744848000&v=beta&t=_uhVF-QC5Nu2lPooZJ6Y7YS02izc4OhBKVpQkhKxNvs",
		content:
			"In entertainment, your online presence is everything. WebAlly took our scattered digital footprint and transformed it into a sleek, high-energy platform that showcases our artists and connects us with fans like never before. The website doesn’t just look good—it works hard for us every single day.",
	},
	{
		name: "Esther Ozordi",
		image:
			"https://media.licdn.com/dms/image/v2/C4D03AQGIx3aOlt2UHw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1652950408626?e=1744848000&v=beta&t=quZVRLRKiSLFfhhM5QXdIKDKXoQcdTdfKaddqJM_Ccc",
		positionHeld: "Project Manager, Scrum Master Africa",
		content:
			"Our online community needed a digital space as agile as our mindset. WebAlly delivered a seamless, high-performance platform that keeps our members engaged, informed, and coming back for more. What used to feel like a static website is now an interactive ecosystem—exactly what we envisioned",
	},
	{
		name: "David Adetoro",
		image:
			"https://media.licdn.com/dms/image/v2/D4D03AQHfpZIViFziYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712052236505?e=1744848000&v=beta&t=uYdaRoI51WCGX9b-IwSsGq-adLLWa2BTwu1m3PQi848",
		positionHeld: "Head of Design and Development, Zeeh Africa",
		content:
			"Partnering with WebAlly transformed our online presence. Their expertise in web development and design provided us with a seamless, user-friendly platform that has significantly enhanced our customer engagement.",
	},

	{
		name: "Promise Udia",
		image:
			"https://media.licdn.com/dms/image/v2/D4D03AQE3WQtx_5AkHA/profile-displayphoto-shrink_800_800/B4DZTcM8v3HYAg-/0/1738861173463?e=1744848000&v=beta&t=ju2IpRrarLFgkKYlE7I0m0Kjj7Pu_5ILGmp_rF4iJXM",
		positionHeld: "Product Designer, Crafter AI",
		content:
			"Collaborating with WebAlly was a game-changer for us. They developed an intuitive, AI-powered project management tool that has streamlined our workflows and boosted team productivity.",
	},
];
