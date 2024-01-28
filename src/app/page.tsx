"use client";
import Header from "@/components/head";
import NavBar from "@/components/nav-bar";

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between px-36 py-16 bg-gray'>
			<NavBar />
			<Header />
		</main>
	);
}
