import Image from "next/image";
import Logo from "../../../public/images/my.png";

export default function Header(): JSX.Element {
	return (
		<div className='flex flex-row items-center justify-between h-[71vh] w-full'>
			<div className='flex flex-col items-start w-1/3 ml-[13%] mr-[3%]'>
				<div>
					<div className='text-[42px] flex flex-row items-center gap-8'>
						I&apos;M <div className='text-[55px]'>Edison Alba</div>
					</div>
				</div>

				<p className='text-bold text-4xl'>Tech Leader and Frontend Developer</p>
				<button className='w-1/2 h-16 text-2xl mx-0 my-[13%] rounded-[10px] border-4 border-solid  border-[#ffc86a]'>
					Contact Me
				</button>
			</div>

			<div className='flex flex-row justify-end items-end opacity-100 grayscale-[1]  gap-8 text-[38px] mr-[0vw] mx-[1vw] my-[0%]'>
				<Image src={Logo} alt='user' width={850} />
				<div className='absolute flex flex-col items-center mx-44 my-0  w-1/12'>
					<div className='h-32 border-l-[thick] border-l-[#ff0000] border-solid'></div>
					<p>A</p>
					<p>B</p>
					<p>C</p>
					<p>D</p>
				</div>
			</div>
		</div>
	);
}
