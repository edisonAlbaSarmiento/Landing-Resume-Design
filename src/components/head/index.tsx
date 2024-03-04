import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Logo from "../../../public/images/my.png";

export default function Header(): JSX.Element {
	return (
		<div className='flex flex-row items-center justify-between h-[71vh] w-full'>
			<div className='flex flex-col items-start w-1/3 ml-[13%] mr-[3%] sm:w-5/6'>
				<div>
					<div className='text-[42px] flex flex-row items-center gap-8 sm:gap-4'>
						I&apos;M
						<h6 className='text-[80px] text-[#f0bf6c] sm:text-4xl'>
							Edison Alba
						</h6>
					</div>
				</div>

				<p className='text-bold text-4xl'>Tech Leader and Frontend Developer</p>
				<button className='w-1/2 h-16 text-2xl mx-0 my-[13%] rounded-[10px] border-4 border-solid  border-[#ffc86a]'>
					Contact Me
				</button>
			</div>

			<div className='flex flex-row justify-end items-end opacity-100   gap-8 text-[38px] mr-[0vw] mx-[1vw] my-[0%] sm:hidden'>
				<Image className='grayscale-[1]' src={Logo} alt='user' width={751} />
				<div className='absolute flex flex-col items-center mx-44 my-0 w-1/12'>
					<hr className='rounded-[10px] h-32 border-l-[medium]  bg-[#f0bf6c] border-solid border-[#f0bf6c]' />

					<a
						href='https://www.facebook.com/edison.albasarmiento/'
						target='_blank'
					>
						<FacebookOutlinedIcon sx={{ fontSize: 40 }} />
					</a>
					<a
						href='https://www.instagram.com/edison_alba_s/?hl=es-la'
						target='_blank'
					>
						<TwitterIcon sx={{ fontSize: 40 }} />
					</a>
					<a
						href='https://www.linkedin.com/in/edison-jordan-alba-sarmiento-866799154'
						target='_blank'
					>
						<LinkedInIcon sx={{ fontSize: 40 }} />
					</a>
					<a
						href='https://api.whatsapp.com/send?text=Ver mi pagina https://edison.com.co'
						target='_blank'
					>
						<WhatsAppIcon sx={{ fontSize: 40 }} />
					</a>
				</div>
			</div>
		</div>
	);
}
