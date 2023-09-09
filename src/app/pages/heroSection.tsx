import React from "react";
import { IconShoppingCartPlus, IconGardenCart } from "@tabler/icons-react";

export default function HeroSection() {
	const items = [
		{
			img: "../assets/hoddie.png",
			title: "Hoddie Losáil - Somebody just tell somebody",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta!",
			price: "Rp 600.000",
			sold: "⭐15.0 | 120+ Sold",
		},
		{
			img: "../assets/tshirt.png",
			title: "Tshirt Losáil - Somebody just tell somebody",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta!",
			price: "Rp 600.000",
			sold: "⭐9.0 | 120+ Sold",
		},
		{
			img: "../assets/morteil1.png",
			title: "Hoddie morteils",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta lorem kontols",
			price: "Rp 400.000",
			sold: "⭐5.0 | 120+ Sold",
		},
		{
			img: "../assets/morteil2.png",
			title: "Hoddie morteils",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta!",
			price: "Rp 800.000",
			sold: "⭐5.0 | 120+ Sold",
		},
		{
			img: "../assets/morteil3.png",
			title: "Jersey morteils",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta!",
			price: "Rp 1.600.000",
			sold: "⭐5.0 | 120+ Sold",
		},
		{
			img: "../assets/morteil4.png",
			title: "Work Jacket morteils",
			desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, soluta!",
			price: "Rp 800.000",
			sold: "⭐5.0 | 120+ Sold",
		},
	];

	return (
		<section className="mx-auto items-center">
			<div className="container px-3 py-4 mx-auto ">
				<h1 className="text-white text-center font-bold font-mono mt-12 mb-12">
					{/* News Apparel | Made By Adhan | @Losáil */}
				</h1>
				<div className=" items-center justify-center flex flex-wrap">
					<div>
						<img src="../assets/hoddie.png" alt="" className="w-[380px]" />
					</div>
					<div>
						<img src="../assets/tshirt.png" alt="" className="w-[380px]" />
					</div>
				</div>
				<div className="flex flex-wrap justify-center md:justify-evenly ipad:gap-3 ">
					{items.map((item, index) => {
						return (
							<div
								className="max-w-sm   border border-[#474747] rounded mb-12"
								key={index}
							>
								<img src={item.img} alt={item.title} className="w-[380px]" />
								<div className="p-6 border-t border-[#474747]">
									<a href="">
										<h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
											{item.title}
										</h5>
									</a>
									<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
										{item.desk}
									</p>
									<code className="text-white">{item.price}</code>
									<div className="flex items-center gap-5 mx-auto md:flex-wrap">
										<p className="text-white">{item.sold}</p>
										<button className="flex items-center bg-ungu px-2 py-2 gap-x-2 font-bold text-white rounded-sm text-sm">
											<IconShoppingCartPlus />
											<span>Add</span>
										</button>
										<button className="flex items-center bg-[#32a852] px-2 py-2 gap-x-2 font-bold text-white rounded-sm text-sm">
											<IconGardenCart />
											<span>Buy</span>
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
