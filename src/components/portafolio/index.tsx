import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Portfolio(): JSX.Element {
	const [visibleItems, setVisibleItems] = useState(3);

	const handleShowMore = () => {
		setVisibleItems(visibleItems + 3);
	};

	const data = [
		{
			text: "Website Testing",
			description:
				"Example of creating a website with native code, login with networks and filters",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/default.jpg",
		},
		{
			text: "Website Testing API Movies",
			description: "Curated color palate inspiration on your figure tip",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/default.jpg",
		},
		{
			text: "Landing pixel perfect",
			description: "Curated color palate inspiration on your figure tip",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/default.jpg",
		},
		{
			text: "Testing chat whit socket.io",
			description: "Curated color palate inspiration on your figure tip",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/default.jpg",
		},
		{
			text: "Clone page Imaginamos",
			description: "Create whit next js",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/default.jpg",
		},
		{
			text: "Learning flutter",
			description: "Create app music whit flutter",
			img: "https://raw.githubusercontent.com/edisonAlbaSarmiento/Landing-Resume-Design/master/images/flutter.png",
		},
	];
	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-center'>
				<h1 className='text-[54px]'>Portafolio</h1>
			</div>
			<div className='flex flex-col'>
				<div className='flex flex-wrap justify-center gap-[4.5rem] mx-0 my-[4%]'>
					{data.slice(0, visibleItems).map((item) => (
						<div
							style={{
								backgroundImage: `url(${item.img})`,
								backgroundSize: "30rem 30rem",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
							className={`w-[30rem] h-[30rem] flex justify-center items-center hover:bg-[#f0bf6c] `}
							key={item.text}
						>
							<div className='w-[25vw] h-[43vh] flex flex-col justify-center items-center gap-6 opacity-0 hover:bg-[#515155cf] hover:opacity-100 hover:transition-all hover:duration-[1s] hover:ease-[ease] hover:delay-[0s]'>
								<h1 className='font-semibold  text-2xl'>{item.text}</h1>
								<p className='w-3/5 text-center'>{item.description}</p>
								<button className='w-1/5 h-8 text-[0.8rem] mb-[7%] rounded-[10px] bg-[#ffc86a] text-[#31333b] font-semibold'>
									See More <ArrowForwardIcon sx={{ fontSize: 20 }} />
								</button>
							</div>
						</div>
					))}
					{visibleItems < data.length && (
						<button
							className='w-[15%] h-16 text-2xl mb-[7%] rounded-[10px] bg-[#ffc86a] text-[#31333b] font-semibold'
							onClick={handleShowMore}
						>
							View More
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
