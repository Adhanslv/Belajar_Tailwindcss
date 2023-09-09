import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
	IconMenu2,
	IconHome,
	IconFileDescription,
	IconBrandGoogleMaps,
	IconAddressBook,
	IconArrowBigRight,
	IconShoppingCart,
} from "@tabler/icons-react";

export default function Navbar() {
	return (
		// Navbar
		<nav className="px-[10vw] py-3 flex items-center  justify-between z-50 mobile:p-2 mobile:px-[5%] tablet:px-[5%] bg-[#212326]">
			<div className="container p-[1rem] ">
				<div className="flex items-center justify-between  ">
					<img src="../assets/logo.png" alt="" className="w-[120px]" />
					<IconMenu2 className="text-white  sm:hidden " />
					<div className=" hidden lg:block ">
						<ul className="flex ml-20  gap-3 cursor-pointer">
							<li className="text-md font-bold text-white hover:text-ungu">
								Home
							</li>
							<span className="text-white">|</span>
							<li className="text-md font-bold text-white hover:text-ungu">
								Store
							</li>
							{/* <li className="text-md font-bold text-white">Maps</li>
							<li className="text-md font-bold text-white">Kontak</li> */}
						</ul>
					</div>
					<div className="hidden sm:block">
						<div className="flex gap-4">
							<button className=" px-7 py-4 font-bold text-white rounded text-sm">
								<span>Login</span>
							</button>
							<button className="bg-ungu px-4 py-4 font-bold text-white rounded-md text-sm">
								<span>Sign Up</span>
							</button>
							<button className=" px-4 py-4 font-bold text-white rounded-md text-sm">
								<IconShoppingCart />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className=" fixed bottom-0 right-0 left-0  border-t  border-[#363535] lg:hidden p-4 bg-hitam ">
				<ul className=" text-white flex gap-3 justify-evenly ">
					<li>
						<button className="text-white opacity-30 flex flex-col items-center text-base gap-2 b">
							<IconHome />
							<span className="text-base font-normal">Home</span>
						</button>
					</li>
					<li>
						<button className="text-white opacity-30 flex flex-col items-center text-base gap-2 ">
							<IconFileDescription />
							<span className="text-base font-normal">News</span>
						</button>
					</li>
					<li>
						<button className="text-white opacity-30 flex flex-col items-center text-base gap-2">
							<IconBrandGoogleMaps />
							<span className="text-base font-normal">Maps</span>
						</button>
					</li>
					<li>
						<button className="text-white opacity-30 flex flex-col items-center text-base gap-2">
							<IconAddressBook />
							<span className="text-base font-normal">Kontak</span>
						</button>
					</li>
					<li>
						<button className="text-white opacity-30 flex flex-col items-center text-base gap-2">
							<IconMenu2 />
							<span className="text-base font-normal">Opsi</span>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
