import React, { useEffect, useState } from "react";

const data = [
	{
		id: 1,
		text: "Fronten Ssr at Siigo",
		description: `As a Frontend SSR Developer, I specialize in creating efficient, high-performance user interfaces using technologies like React, Next.js, and related tools. My main focus is to optimize server-side rendering to ensure fast loading and optimal user experience. With experience in collaborative environments, I contribute my technical skills to the success of the team and the achievement of project objectives. My goal is to develop visually attractive, functional and accessible solutions for users.`,
		dates: "March — Present",
		date: "2024",
	},
	{
		id: 2,
		text: "Technical Leader at Imaginamos",
		description: `As a development team leader, I apply my strong knowledge and soft skills to foster a collaborative environment. My approach consists of delegating tasks jointly with my team, which allows us to work in harmony and achieve established objectives within the planned deadlines. My leadership is based on the application of effective communication skills, conflict resolution and empathy. These qualities allow me to guide my team efficiently, ensuring that each member feels valued and engaged in the process. I have led successful projects in which we have strictly met deadlines. This time management ability has been demonstrated on numerous occasions, supporting our track record of high-quality, timely delivery. My focus is to not only achieve goals, but also cultivate a work environment that inspires excellence and continued growth. I am committed to leading with passion and dedication, ensuring our team reaches its full potential on every project.`,
		dates: "Sep 2022 — Feb 2024",
		date: "2024",
	},
	{
		id: 3,
		text: "Frontend Developer at Imaginamos",
		description: `As a Front-End Developer, I have worked with a variety of technologies, including Loopback,
		React-admin, React, React Native, NextJS, Ant Design, Material-UI, Redux, and Redux Toolkit.
		My focus was on creating exceptional user experiences and developing high-performing web
		and mobile applications.
		As a Full Stack Developer, I gained experience in JavaScript (React-admin, Material-UI,
		React, NextJS, React Native, Loopback and Redux), which allowed me to approach projects
		comprehensively and ensure an efficient workflow.
		During this period, I also specialized in creating mobile applications with React Native and
		building web pages with Next.js, which brought flexibility and performance to the projects I
		participated in.
		Additionally, I managed servers in Linux environments and carried out deployments on various
		platforms, such as Google Cloud and DigitalOcean.`,
		dates: "Jul 2019 — Oct 2022",
		date: "2022",
	},
	{
		id: 4,
		text: "Full stack JS Developer at Chiper S.A.S",
		description: `As a Junior Front-End Developer, I had the opportunity to work with various technologies,
		including JavaScript (React-admin, Material-UI, React, React Native, Redux, Loopback) and
		MySQL. During my time at the company, I played a key role in various aspects of web and
		mobile development.
		My responsibilities included creating modules in the management system, where I
		implemented Redux and Loopback to improve data management and interaction with the API.
		I was also responsible for developing custom filters, which allowed users to access relevant
		information more efficiently by consuming API endpoints.
		Additionally, I contributed to the development of user interfaces in mobile applications using
		React Native. These screens were designed following Material-UI and Style Components
		guidelines, resulting in an attractive and easy-to-use user experience.`,
		dates: "Oct 2018 — Jul 2019",
		date: "2019",
	},
	{
		id: 5,
		text: "Full stack JS Developer at Imaginamos",
		description: `Provided support for a wide range of technologies and systems, including WordPress,
		PHP, Laravel, CodeIgniter, CSS, JavaScript, jQuery and MySQL. My focus was on website
		management and maintenance, as well as configuring and administering servers in
		environments such as Linode, DigitalOcean and Site5 with Linux-based operating systems and
		control panels such as CPanel.
		As a Junior Full Stack Developer, I worked with various technologies, including PHP, JavaScript,
		MySQL, Loopback, React-admin, Material-UI, React, and JQuery. Developed web applications
		using frameworks such as CodeIgniter, Laravel and WordPress, and worked on the Front-End
		using CSS, JavaScript, Bootstrap and JQuery.
		I also had the opportunity to delve into Full Stack development using JavaScript, which
		expanded my technical skills. In addition, I gained experience in managing Linux servers and
		worked under the Scrum methodology for agile projects.`,
		dates: "Sep 2017 — Oct 2018",
		date: "2018",
	},
	{
		id: 6,
		text: "Data Analyst at ETB",
		description: `During my internship, I provided support in port validation of ETB services, managing
		databases and administering ports. My role involved ensuring ETB services ran efficiently and
		without interruption.
		In addition, I participated in the fixing of cards that were blocked. I used verification tools and
		made the necessary changes to restore normal operation. I also carried out network coverage
		tests and configured ONT, AP and PLC equipment appropriately.
		My internship provided me with the opportunity to apply my knowledge and skills in a
		real-world environment, whilst contributing to the smooth running of ETB services. I am
		excited to continue learning and developing in this field.`,
		dates: "Jul 2017 — Aug 2017",
		date: "2017",
	},
];
export default function Experience(): JSX.Element {
	const [lineHeights, setLineHeights] = useState<Record<number, string>>({});
	const [firstRender, setFirstRender] = useState<boolean>(true);

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			const updatedLineHeights: Record<number, string> = {};
			data.forEach((item) => {
				const descriptionLength = item.description.length;
				let lineHeight = "";
				if (descriptionLength <= 800) {
					lineHeight = "h-64";
				} else if (descriptionLength <= 900) {
					lineHeight = "h-64";
				} else if (descriptionLength > 900) {
					lineHeight = "h-96";
				}
				updatedLineHeights[item.id] = lineHeight;
			});
			setLineHeights(updatedLineHeights);
		}
	}, [firstRender]);

	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-start'>
				<h1 className='text-[54px] mt-[-3%] mb-[-3%] my-[10%]'>Experience</h1>
			</div>
			<div className='mt-[5%]'>
				{data.map((item) => (
					<div className='' key={item.id}>
						<div className='flex sm:flex-col lg:flex-row justify-start lg:gap-10 sm:gap-2   sm:px-0 md:px-0 lg:px-48 xl:px-48 pb-8'>
							<div className='flex flex-row'>
								<div className='flex justify-center flex-row h-[53px] items-center'>
									<div className='sm:w-auto lg:w-[5vw] bg-[gray] h-[5vh] flex justify-center items-center'>
										<div>{item?.date}</div>
									</div>
									<div className='lg:flex sm:hidden  w-0 h-0  border-t-[16px] border-b-[24px] border-l-[24px] border-l-[gray] border-y-[24px] border-y-transparent border-solid border-[transparent_transparent_transparent_#FF4532]' />
								</div>
							</div>

							<div className='lg:flex flex-col items-center gap-5 sm:hidden'>
								<div className='bg-[#f0bf6c] shadow-[0px_1px_20px_#cca25c,inset_7px_7px_14px_#ffdc7c] w-[39px] h-[39px] rounded-[50%]' />
								<div
									className={`${
										lineHeights[item.id]
									} border-l-[thick] border-l-[#fff] border-solid`}
								/>
							</div>
							<div className='flex flex-col gap-[5%]'>
								<h1>{item?.text}</h1>
								<p>{item?.dates}</p>
								<p>{item?.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
