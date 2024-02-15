import React from "react";

export default function ContactMe(): JSX.Element {
	return (
		<div className='flex flex-1 flex-col justify-center mb-[5%]'>
			<div className='flex flex-row justify-center items-center'>
				<hr className='w-full h-1.5 bg-[red] mr-[2%] my-0' />
				<h1 className='text-[54px] w-6/12'>Contact Me</h1>
				<hr className='w-full h-1 bg-[red] mx-0' />
			</div>
			<div className='mt-[3%] flex flex-col gap-8'>
				<div className='flex flex-row justify-center gap-6'>
					<div className='w-[22rem] h-16 bg-[red] flex items-center justify-center rounded-lg flex-row gap-3'>
						<div>s</div>
						<div>edi9708@hotmail.com</div>
					</div>
					<div className='w-[22rem] h-16 bg-[red] flex items-center justify-center rounded-lg flex-row gap-3'>
						<div>s</div>
						<div>(57) 3114748824</div>
					</div>
				</div>
				<div className='flex flex-row justify-center'>
					<div className='w-[22rem] h-16 bg-[red] flex items-center justify-center rounded-lg flex-row gap-3'>
						<div>s</div>
						<div>Bogota, Colombia</div>
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center mt-[3.3%] mb-[-3%]'>
				<hr className='w-full h-1.5 bg-[red]  my-0' />
				<div className='flex flex-row justify-center gap-12 w-6/12'>
					<div>A</div>
					<div>A</div>
					<div>A</div>
					<div>A</div>
				</div>
				<hr className='w-full h-1 bg-[red] mx-0' />
			</div>
		</div>
	);
}
