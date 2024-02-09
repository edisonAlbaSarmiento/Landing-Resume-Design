"use client";
import About from "@/components/about";
import Header from "@/components/head";
import NavBar from "@/components/nav-bar";

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
			<section className='flex flex-row items-center justify-between px-36 py-16  bg-gray'>
				<About />
			</section>
		</main>
	);
}
