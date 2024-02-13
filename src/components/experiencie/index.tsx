import React from "react";

export default function Experience(): JSX.Element {
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-start'>
				<h1 className='text-[54px] mt-[-3%] mb-[-3%] my-[10%]'>Experience</h1>
			</div>
			<div className='flex flex-row justify-start gap-10 px-48 py-24'>
				<div className='flex flex-row'>
					<div className='w-[5vw] bg-[gray] h-[8vh] flex justify-center items-center'>
						<div>2021</div>
					</div>
					<div className='w-0 h-0 border-l-[24px] border-l-[green] border-y-[24px] border-y-transparent border-solid' />
				</div>

				<div className='flex flex-col items-center gap-5'>
					<div className='bg-[red] w-[39px] h-[39px] rounded-[50%]' />
					<div className='h-32 border-l-[thick] border-l-[#ff0000] border-solid' />
				</div>
				<div>
					<div>titulo</div>
					<div>sub titulos</div>
					<div>descriptio</div>
				</div>
			</div>
			{/* <div className='flex flex-col'>
				<div className='flex flex-wrap justify-center gap-[4.5rem] mx-0 my-[4%]'>
					<button className='w-[15%] h-16 text-2xl mx-0 rounded-[10px] bg-[#ffc86a] text-[#31333b] font-semibold'>
						Contact Me
					</button>
				</div>
			</div> */}
		</div>
	);
}
