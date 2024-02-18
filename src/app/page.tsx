"use client";
import About from "@/components/about";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experiencie";
import Header from "@/components/head";
import MySkills from "@/components/my-skills";
import NavBar from "@/components/nav-bar";
import Portfolio from "@/components/portafolio";
import ShareIcon from "@mui/icons-material/Share";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
	const main = useRef<HTMLElement | any>();

	useGSAP(
		() => {
			const boxes = gsap.utils.toArray("#setion2");
			boxes.forEach((box: any) => {
				gsap.to(box, {
					x: 0,
					scrollTrigger: {
						trigger: box,
						start: " bottom",
						end: "top 20%",
						scrub: true,
						// markers: true,
					},
				});
			});
		},
		{ scope: main },
	);

	return (
		<main ref={main}>
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
			<section className=' flex flex-row items-center justify-between sm:px-0 md:px-0 lg:px-36-py-16  bg-gray'>
				<MySkills />
			</section>

			<section className='bg-gray'>
				<Portfolio />
			</section>
			<section
				id='setion3'
				className='flex flex-row items-center justify-between px-20  bg-[#3d3e42]'
			>
				<Experience />
			</section>
			<section className='flex flex-row items-center justify-between px-36 py-16  bg-gray'>
				Coming soon...
			</section>
			<section className='flex flex-row items-center justify-between  bg-[#3d3e42] h-80'>
				<ContactMe />
			</section>
			<section className='flex flex-row items-center justify-center px-36 py-16  bg-gray'>
				<h1 className='text-[#f0bf6c] font-semibold'>Thanks for Scrolling</h1>
			</section>
			<div className='w-[4%] h-12 fixed bg-[#f0bf6c] z-[999] p-2.5 left-[97%] right-0 top-[76%] bottom-[20%] flex items-center rounded-2xl'>
				<a
					target='_blank'
					href='https://api.whatsapp.com/send?text=Ver mi pagina https://edison.com.co'
					data-action='share/whatsapp/share'
				>
					<ShareIcon sx={{ fontSize: 40 }} />
				</a>
			</div>
		</main>
	);
}
