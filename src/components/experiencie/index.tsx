import React from "react";

export default function Experience(): JSX.Element {
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-start'>
				<h1 className='text-[54px] mt-[-3%] mb-[-3%] mx-0'>Experience</h1>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-wrap justify-center gap-[4.5rem] mx-0 my-[4%]'>
					<button className='w-[15%] h-16 text-2xl mx-0 rounded-[10px] bg-[#ffc86a] text-[#31333b] font-semibold'>
						Contact Me
					</button>
				</div>
			</div>
		</div>
	);
}
