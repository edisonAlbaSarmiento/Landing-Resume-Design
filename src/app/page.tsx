"use client";
import About from "@/components/about";
import Experience from "@/components/experiencie";
import Header from "@/components/head";
import MySkills from "@/components/my-skills";
import NavBar from "@/components/nav-bar";
import Portafolio from "@/components/portafolio";

export default function Home() {
	return (
		<main>
			<section className='flex flex-col items-center justify-between px-36 py-16 bg-gray'>
				{/* position: fixed;
    width: 100%;
    z-index: 1; */}
				<NavBar />
			</section>
			<section
				id='setion1'
				className='flex flex-col items-center justify-between  bg-gray'
			>
				<Header />
			</section>
			<section
				id='setion2'
				className='flex flex-row items-center justify-between px-36 py-16  bg-gray'
			>
				<About />
			</section>
			<section className='flex flex-row items-center justify-between px-36 py-16  bg-gray'>
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
			<section className='flex flex-row items-center justify-between px-20  bg-[#3d3e42]'>
				<Experience />
			</section>
		</main>
	);
}
