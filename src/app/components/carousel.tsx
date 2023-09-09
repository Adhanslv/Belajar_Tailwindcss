import React from "react";
import hoddie from "../assets/hoddie.png";
import tshirt from "../assets/tshirt.png";
import morteil1 from "../assets/morteil1.png";
import morteil2 from "../assets/morteil2.png";
import morteil3 from "../assets/morteil3.png";
import morteil4 from "../assets/morteil4.png";

export default function Carousel() {
	// Varibale buat menampung gambar
	const imageSlide = [
		{
			img1: hoddie,
			img2: tshirt,
			img3: morteil1,
			img4: morteil2,
			img5: morteil3,
			img6: morteil4,
		},
	];

	return (
		<div>
			<h1>Asyhab Ramadhan</h1>
		</div>
	);
}
