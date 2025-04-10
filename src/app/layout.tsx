import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Edison Jordan Alba Sarmiento Website",
	icons: {
		icon: "/icons/android-chrome-192x192.png",
		apple: "/icons/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	themeColor: "#f58236",
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	robots: {
		index: true,
		follow: true,
	},
	twitter: {
		card: "summary_large_image",
		site: "@EdisonJordanAlbaSarmiento",
		creator: "@EdisonJordanAlbaSarmiento",
		title: "Edison Jordan Alba Sarmiento Website",
		description: "Mi hoja de vida",
		images: ["https://www.edison.com.co/images/my3.png"],
	},
	openGraph: {
		title: "Edison Jordan Alba Sarmiento Website",
		type: "website",
		url: "https://www.edison.com.co",
		images: ["https://www.edison.com.co/images/my3.png"],
		siteName: "Edison Jordan Alba Sarmiento Website",
		locale: "es_ES",
		description: "Mi hoja de vida",
	},
	description: "Mi hoja de vida",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='es' dir='ltr' className='scroll-smooth' translate='no'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#f58236' />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='black' />
				<meta name='apple-mobile-web-app-title' content='Edison Jordan' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='application-name' content='Edison Jordan' />
				<meta name='msapplication-TileColor' content='#f58236' />
				<meta
					name='msapplication-TileImage'
					content='/icons/mstile-144x144.png'
				/>
				<meta name='msapplication-config' content='/icons/browserconfig.xml' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='shortcut icon' href='/icons/favicon.ico' />
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
