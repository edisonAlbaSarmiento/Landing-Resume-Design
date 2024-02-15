"use client";
import About from "@/components/about";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experiencie";
import Header from "@/components/head";
import MySkills from "@/components/my-skills";
import NavBar from "@/components/nav-bar";
import Portafolio from "@/components/portafolio";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
	const container = useRef(null);

	useGSAP(
		() => {
			// gsap code here...
			gsap.to("#setion1", { rotation: 180 }); // <-- automatically reverted
		},
		{ scope: container },
	);

	return (
		<main>
			<section className='flex flex-col items-center justify-between px-36 py-16 bg-gray'>
				<NavBar />
			</section>
			<section
				id='setion1'
				className='flex flex-col items-center justify-between  bg-[#34363a]'
			>
				<Header />
			</section>
			<section
				id='setion2'
				className='flex flex-row items-center justify-between px-36 py-16  bg-gray'
			>
				<About />
			</section>
			<section className=' flex flex-row items-center justify-between px-36 py-16  bg-gray'>
				<MySkills />
			</section>
			<section className='bg-gray'>
				<Portafolio />
			</section>
			<section
				id='setion3'
				className='flex flex-row items-center justify-between px-20  bg-[#3d3e42]'
			>
				<Experience />
			</section>
			<section className='flex flex-row items-center justify-between px-36 py-16  bg-gray'>
				<About />
			</section>
			<section className='flex flex-row items-center justify-between  bg-[#3d3e42] h-80'>
				<ContactMe />
			</section>
			<section className='flex flex-row items-center justify-center px-36 py-16  bg-gray'>
				<h1 className='text-[#f0bf6c] font-semibold'>Thanks for Scrolling</h1>
			</section>
			<div className='fixed bg-[green] z-[999] p-2.5 left-[97%] right-0 top-[76%] bottom-[20%]'>
				hola
			</div>
		</main>
	);
}
