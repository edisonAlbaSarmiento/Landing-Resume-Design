import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Edison Hoja de Vida",
	description: "Mi hoja de vida",
	manifest: "/public/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/icons/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icons/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/icons/favicon-16x16.png'
				/>
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f58236' />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
