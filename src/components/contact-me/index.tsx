import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";

export default function ContactMe(): JSX.Element {
	return (
		<div className='flex flex-1 flex-col justify-center mb-[4%]'>
			<div className='flex flex-row justify-between items-center'>
				<hr className='sm:w-1/4 xl:w-full  h-1 bg-[#f0bf6c] my-0' />
				<h1 className='sm:text-2xl  md:text-base  lg:text-[2rem] xl:text-[54px] xl:w-6/12  gap-6  text-center '>
					Contact Me
				</h1>
				<hr className='sm:w-1/4 xl:w-full  h-1 bg-[#f0bf6c] mx-0' />
			</div>
			<div className='mt-[3%] flex flex-col gap-8'>
				<div className='sm:flex-col sm:items-center flex xl:flex-row justify-center gap-6 '>
					<div className='w-[22rem] h-16 bg-[#31333b] flex items-center justify-center rounded-lg flex-row gap-3'>
						<EmailIcon sx={{ fontSize: 40 }} />
						<div className='text-[#f0bf6c]'>edi9708@hotmail.com</div>
					</div>
					<div className='w-[22rem] h-16 bg-[#31333b] flex items-center justify-center rounded-lg flex-row gap-3'>
						<PhoneIcon sx={{ fontSize: 40 }} />

						<div className='text-[#f0bf6c]'>+(57) 3114748824</div>
					</div>
				</div>
				<div className='flex flex-row justify-center'>
					<div className='w-[22rem] h-16 bg-[#31333b] flex items-center justify-center rounded-lg flex-row gap-3'>
						<RoomIcon sx={{ fontSize: 40 }} />

						<div className='text-[#f0bf6c]'>Bogota, Colombia</div>
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center mt-[2.8%] mb-[-3%] gap-6'>
				<hr className='sm:w-1/4 xl:w-full h-1 bg-[#f0bf6c]  my-0' />
				<div className='flex flex-row justify-evelyn sm:gap-8 xl:gap-12 '>
					<a
						href='https://github.com/edisonAlbaSarmiento'
						target='_blank'
						aria-label='github'
					>
						<GitHubIcon className='sm:text-2xl xl:text-[40px]' />
					</a>
					<a
						href='https://www.instagram.com/edison_alba_s/?hl=es-la'
						target='_blank'
						aria-label='instagram'
					>
						<TwitterIcon className='sm:text-2xl xl:text-[40px]' />
					</a>
					<a
						href='https://www.linkedin.com/in/edison-jordan-alba-sarmiento-866799154'
						target='_blank'
						aria-label='linkedin'
					>
						<LinkedInIcon className='sm:text-2xl xl:text-[40px]' />
					</a>
					<a
						href='https://api.whatsapp.com/send?text=Ver mi pagina https://edison.com.co'
						target='_blank'
						aria-label='whatsapp'
					>
						<WhatsAppIcon className='sm:text-2xl xl:text-[40px]' />
					</a>
				</div>
				<hr className='sm:w-1/4 xl:w-full h-1 bg-[#f0bf6c] mx-0' />
			</div>
		</div>
	);
}
