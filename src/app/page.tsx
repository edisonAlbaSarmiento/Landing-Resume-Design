"use client";
import About from "@/components/about";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experiencie";
import Header from "@/components/head";
import MySkills from "@/components/my-skills";
import NavBar from "@/components/nav-bar";
import Portfolio from "@/components/portafolio";
import ShareIcon from "@mui/icons-material/Share";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
	const main = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const mainSectionRef = useRef<HTMLElement>(null);

	// 🔁 Referencias para animar componentes
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const portfolioRef = useRef(null);
	const experienceRef = useRef(null);
	const contactMeRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToMain = () => {
		if (mainSectionRef.current) {
			mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useGSAP(
		() => {
			const animate = (target: any, direction: "left" | "right" | "scale") => {
				let from: gsap.TweenVars = { opacity: 0 };

				if (direction === "left") from.x = -100;
				else if (direction === "right") from.x = 100;
				else if (direction === "scale") from.scale = 0.8;

				gsap.fromTo(target, from, {
					opacity: 1,
					x: 0,
					scale: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: target,
						start: "top 100%",
						toggleActions: "play none none none",
					},
				});
			};

			animate(aboutRef.current, "left");
			animate(skillsRef.current, "right");
			animate(portfolioRef.current, "left");
			animate(experienceRef.current, "right");
			animate(contactMeRef.current, "left");
		},
		{ scope: main },
	);

	return (
		<>
			<main ref={main}>
				<section ref={mainSectionRef} id='main' className='px-36 py-16 bg-gray'>
					<NavBar />
				</section>
				<section id='section1' className='bg-[#34363a]'>
					<Header />
				</section>

				<section id='section2' className='bg-gray px-8 lg:px-36 py-16'>
					<div ref={aboutRef}>
						<About />
					</div>
				</section>

				<section id='section3' className='bg-gray px-8 lg:px-36 py-16'>
					<div ref={skillsRef}>
						<MySkills />
					</div>
				</section>

				<section id='section4' className='bg-gray px-8 lg:px-20'>
					<div ref={portfolioRef}>
						<Portfolio />
					</div>
				</section>

				<section id='section5' className='bg-[#3d3e42] px-8 lg:px-20'>
					<div ref={experienceRef}>
						<Experience />
					</div>
				</section>

				<section id='section7' className='bg-[#3d3e42] h-80'>
					<div ref={contactMeRef}>
						<ContactMe />
					</div>
				</section>

				<div className='fixed z-[999] flex flex-col gap-4 items-end right-4 bottom-8'>
					<a
						target='_blank'
						href='https://api.whatsapp.com/send?text=Ver mi pagina https://edison.com.co'
						aria-label='whatsapp'
						className='bg-[#f0bf6c] p-3 rounded-full shadow-lg hover:scale-105 transition'
					>
						<ShareIcon sx={{ fontSize: 32 }} />
					</a>

					{isVisible && (
						<button
							onClick={scrollToMain}
							aria-label='Subir'
							className='bg-[#f0bf6c] p-3 rounded-full shadow-lg hover:scale-105 transition'
						>
							<ExpandLessIcon sx={{ fontSize: 32 }} />
						</button>
					)}
				</div>
			</main>

			<footer className='flex justify-center px-36 py-16 bg-gray'>
				<h1 className='text-[#f0bf6c] font-semibold text-center'>
					Thanks for Scrolling
				</h1>
			</footer>
		</>
	);
}
