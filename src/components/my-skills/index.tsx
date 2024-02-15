import React from "react";
import Image from "next/image";

export default function MySkills(): JSX.Element {
	const data = [
		{
			text: "Javascript",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
		},
		{
			text: "Typescript",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
		},
		{
			text: "Next JS",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
		},
		{
			text: "React",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
		},
		{
			text: "Redux",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
		},
		{
			text: "Html",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
		},
		{
			text: "CSS3",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain-wordmark.svg",
		},
		{
			text: "Mysql",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
		},
		{
			text: "Node Js",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
		},
		{
			text: "Git Source Control",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
		},
		{
			text: "Firebase",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg",
		},
		{
			text: "Flutter in progress",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
		},
	];
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-center'>
				<h1 className='text-[54px]'>My Skills</h1>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-wrap justify-center gap-[4.5rem] mx-0 my-[4%]'>
					{data.map((item) => (
						<div
							className='transition-colors duration-300 ease-out w-[19rem] h-[19rem] bg-[#3d3e42] flex justify-center items-center rounded-2xl  hover:bg-[#f0bf6c]  '
							key={item.text}
						>
							<div className='flex flex-col gap-6 justify-center items-center'>
								<Image
									src={item.img}
									width={100}
									height={100}
									alt={`${item.text}`}
								/>
								<p className='text-xl font-bold'>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
