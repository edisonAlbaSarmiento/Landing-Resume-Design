import Image from "next/image";
import Logo from "../../../public/icons/android-chrome-192x192.png";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

type NavBarProps = {
	about: boolean;
	portfolio: boolean;
	contact: boolean;
};

export default function NavBar(): JSX.Element {
	const [isActive, setIsActive] = useState<NavBarProps>({
		about: true,
		portfolio: false,
		contact: false,
	});
	return (
		<nav className='flex sm:flex-col sm:gap-8 lg:flex-row items-center justify-between w-full'>
			<Image src={Logo} alt='Logo' width={100} height={100} />
			<div className='flex gap-4'>
				<a
					className={`text-2xl ${
						isActive.about ? "text-[#f9f9f9]" : "text-[#97989a]"
					}`}
					href='#section2'
					onClick={() =>
						setIsActive({
							about: true,
							portfolio: false,
							contact: false,
						})
					}
					aria-label='About'
				>
					About
				</a>
				<a
					className={`text-2xl ${
						isActive.portfolio ? "text-[#f9f9f9]" : "text-[#97989a]"
					}`}
					href='#section4'
					onClick={() =>
						setIsActive({
							about: false,
							portfolio: true,
							contact: false,
						})
					}
					aria-label='portfolio'
				>
					Portafolio
				</a>
				<a
					className={`text-2xl ${
						isActive.contact ? "text-[#f9f9f9]" : "text-[#97989a]"
					}`}
					href='#section7'
					onClick={() =>
						setIsActive({
							about: false,
							portfolio: false,
							contact: true,
						})
					}
					aria-label='contact'
				>
					Contact
				</a>
			</div>
			<div className='w-72 h-16 flex items-center justify-center bg-[#3d3e42] p-[2%] rounded-[10px]'>
				<input
					className='bg-[transparent] outline-none'
					type='text'
					placeholder='Buscar'
					name='search'
				/>
				<SearchIcon sx={{ fontSize: 30, color: "#9c9c9e" }} />
			</div>
		</nav>
	);
}
