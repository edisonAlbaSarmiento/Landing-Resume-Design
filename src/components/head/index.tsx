import Image from "next/image";
import Logo from "../../../public/images/my.png";

export default function Header(): JSX.Element {
	return (
		<div className='flex flex-row items-center justify-between h-[48rem] w-full'>
			<div className='flex flex-col items-start'>
				<h3>I&apos;m</h3>
				<h1>Edison Alba</h1>
				<p>Tech Leader and Frontend Developer</p>
				<button>Contact Me</button>
			</div>

			<div className='relative flex flex-row justify-end items-end opacity-100 grayscale-[1] '>
				<Image src={Logo} alt='user' width={1100} />
				<div className='absolute flex flex-col items-center mx-44 my-0'>
					<p>|</p>
					<p>A</p>
					<p>B</p>
					<p>C</p>
					<p>D</p>
				</div>
			</div>
		</div>
	);
}
