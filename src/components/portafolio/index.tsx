import React from "react";

export default function Portafolio(): JSX.Element {
	const data = [
		{
			text: "Texto",
			img: "img/",
		},
		{
			text: "Texto",
			img: "img/",
		},
		{
			text: "Texto",
			img: "img/",
		},
		{
			text: "Texto",
			img: "img/",
		},
		{
			text: "Texto",
			img: "img/",
		},
		{
			text: "Texto",
			img: "img/",
		},
	];
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-center'>
				<h1 className='text-[54px]'>Portafolio</h1>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-wrap justify-center gap-[4.5rem] mx-0 my-[4%]'>
					{data.map((item) => (
						<div
							className='w-[30rem] h-[30rem] bg-[red] flex justify-center items-center rounded-2xl'
							key={item.text}
						>
							<div className='flex flex-col gap-6'>
								<p>{item.img}</p>
								<p>{item.text}</p>
							</div>
						</div>
					))}
					<button className='w-[15%] h-16 text-2xl mb-[7%] rounded-[10px] bg-[#ffc86a] text-[#31333b] font-semibold'>
						View More
					</button>
				</div>
			</div>
		</div>
	);
}
