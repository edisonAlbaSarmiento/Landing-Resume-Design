import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ label: "About", id: "section2", key: "about" },
		{ label: "Projects", id: "section4", key: "portfolio" },
		{ label: "Contact", id: "section7", key: "contact" },
	] as const;

	return (
		<nav className='flex flex-col lg:flex-row items-center justify-between w-full px-4 py-2'>
			<div className='flex w-full items-center justify-between'>
				<Image src={Logo} alt='Logo' width={100} height={100} />

				<div className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
						<CloseIcon sx={{ fontSize: 32, color: "#f9f9f9" }} />
					) : (
						<MenuIcon sx={{ fontSize: 32, color: "#f9f9f9" }} />
					)}
				</div>
			</div>

			<div className='hidden lg:flex items-center gap-4 mt-4 lg:mt-0'>
				{menuItems.map((item) => (
					<a
						key={item.key}
						className={`text-2xl transition-colors ${
							isActive[item.key] ? "text-[#f9f9f9]" : "text-[#97989a]"
						}`}
						href={`#${item.id}`}
						onClick={() =>
							setIsActive({
								about: item.key === "about",
								portfolio: item.key === "portfolio",
								contact: item.key === "contact",
							})
						}
						aria-label={item.label}
					>
						{item.label}
					</a>
				))}
			</div>

			{isMenuOpen && (
				<div className='flex flex-col gap-4 mt-4 lg:hidden'>
					{menuItems.map((item) => (
						<a
							key={item.key}
							className={`text-xl transition-colors ${
								isActive[item.key] ? "text-[#f9f9f9]" : "text-[#97989a]"
							}`}
							href={`#${item.id}`}
							onClick={() => {
								setIsMenuOpen(false);
								setIsActive({
									about: item.key === "about",
									portfolio: item.key === "portfolio",
									contact: item.key === "contact",
								});
							}}
							aria-label={item.label}
						>
							{item.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
}
