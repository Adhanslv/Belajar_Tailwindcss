import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./pages/heroSection";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<HeroSection />
			<HomePayment />
			{/* <HomeReview /> */}
			<Footer />
		</div>
	);
}

function HomePayment() {
	const payments = [
		"../assets/ovo.png",
		"../assets/mandiri.png",
		"../assets/dana.png",
		"../assets/bri.png",
		"../assets/bni.png",
		"../assets/shopee.png",
		"../assets/linkaja.png",
	];

	return (
		<section className="  mx-auto my-32 w-[80vw]  flex flex-col gap-6 items-center">
			<div className=" text-2xl font-semibold items-center text-white">
				Payment methods
			</div>
			<div className=" flex items-center flex-wrap gap-4">
				{payments.map((payment, index) => {
					return (
						<img
							src={payment}
							alt="Payment"
							className="w-24 h-fit mobile:w-16"
							key={index}
						/>
					);
				})}
			</div>
		</section>
	);
}

// function HomeReview() {
// 	return (
// 		<section className="maps flex gap-12 mx-auto items-center">
// 			<div className="w-2/5  mobile:w-full tablet:w-full xl:ml-32">
// 				<iframe
// 					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6687970360467!2d117.15387807487882!3d-0.4960401994990997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67fe89ab0b99d%3A0x8effa167d67c4a43!2sKopiria%20Kartini!5e0!3m2!1sen!2sid!4v1694064337059!5m2!1sen!2sid"
// 					title="location"
// 					// width={500}
// 					// height={450}
// 					loading="lazy"
// 					referrerPolicy="no-referrer-when-downgrade"
// 					className=" w-full h-[450px] mobile:w-[90vw] tablet:w-full"
// 				></iframe>
// 			</div>
// 			<form
// 				action=""
// 				className="w-2/5 flex flex-col gap-4 mobile:w-full tablet:w-full tablet:p-0"
// 			>
// 				<div className="name flex items-center gap-3 p-3 bg-white  rounded-md mobile:w-[90vw] tablet:w-full">
// 					<label htmlFor="name" className="flex justify-center items-center">
// 						<span className="material-symbols-rounded">person</span>
// 					</label>
// 					<input
// 						id="name"
// 						type="text"
// 						placeholder="Name"
// 						className="w-full outline-none text-xl"
// 					/>
// 				</div>
// 				<div className="password flex items-center gap-3 p-3 bg-white shadow-med rounded-md mobile:w-[90vw] tablet:w-full">
// 					<label
// 						htmlFor="password"
// 						className="flex justify-center items-center"
// 					>
// 						<span className="material-symbols-rounded">psw*</span>
// 					</label>
// 					<input
// 						id="password"
// 						type="password"
// 						placeholder="Password"
// 						className="w-full outline-none text-xl"
// 					/>
// 				</div>
// 				<div className="message flex items-center gap-3 p-3 bg-white shadow-med rounded-md mobile:w-[90vw] tablet:w-full">
// 					<label
// 						htmlFor="message"
// 						className="flex justify-center items-center self-start"
// 					>
// 						<span className="material-symbols-rounded">chat</span>
// 					</label>
// 					<textarea
// 						id="message"
// 						cols="50"
// 						rows="7"
// 						placeholder="Message"
// 						className="outline-none text-xl resize-none"
// 					></textarea>
// 				</div>
// 				<button className="bg-ungu px-4 py-4 text-white font-bold">
// 					Kirim
// 				</button>
// 			</form>
// 		</section>
// 	);
// }
