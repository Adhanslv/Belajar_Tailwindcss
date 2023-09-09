import { Icon123 } from "@tabler/icons-react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Losáil",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="https://upload.wikimedia.org/wikipedia/id/thumb/c/cd/Logo_PDI-P.svg/1200px-Logo_PDI-P.svg.png"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
