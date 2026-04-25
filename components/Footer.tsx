import Image from "next/image";
import { UserStar, ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="px-18 py-4">
			<div className="h-52 bg-blue-600 bg-[url('https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/cta-circle.svg')] 
				bg-no-repeat bg-[length:60%] bg-[position:right_top] rounded-xl"
			>
				<div className="h-full px-16 flex flex-row justify-between items-center gap-8 ">
					<UserStar className="size-18 bg-white text-blue-500 rounded-xl border-2 border-blue-300"/>
					<div className="text-left text-white">
						<p className="my-4 text-3xl font-semibold">Want to Learn More About Our Training Solutions?</p>
						<p>Get Expert Guidance for Your Team’s Success!</p>
					</div>
					<button className="px-6 py-3 bg-white text-lg font-medium rounded-lg text-blue-500 inline-flex cursor-pointer">
						Contact us
						<ChevronRight className="size-6"/>
					</button>
				</div>
			</div>
			
			<div className="mt-36 flex flex-col gap-4 divide-y">
				<div className="py-8 flex flex-col md:flex-row justify-between items-end">
					<div>
						<Image
							src="/logos/logo.webp" 
							alt="AccredianLogo" 
							width={150} 
							height={150} 	
						/>
						<div className="mt-4 flex flex-row gap-4">
							<a href="https://facebook.com/accredianlearn">
								<FaFacebookSquare className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer"/>
							</a>
							<a href="https://www.linkedin.com/company/accredianedu/">
								<FaLinkedin className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer"/>
							</a>
							<a href="https://twitter.com/accredianedu">
								<FaTwitter className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer"/>
							</a>
							<a href="https://www.instagram.com/accredian_edu">
								<FaInstagram className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer"/>
							</a>
							<a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA">
								<FaYoutube className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer"/>
							</a>
						</div>
					</div>
					<div className="">
						<button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md cursor-pointer">
							Enquire Now
						</button>
						<p className="mt-2 text-sm">Speak with our Advisor</p>
					</div>
				</div>
				<div className="pb-4 flex flex-col md:flex-row justify-between">
					<div className="text-gray-800">
						<p className="my-2 text-black font-bold">Accredian</p>
						<ul>
							<li className="my-1 hover:text-blue-500"><a href="https://accredian.com/About">About</a></li>
							<li className="my-1 hover:text-blue-500"><a href="https://blog.accredian.com/">Blog</a></li>
							<li className="my-1 hover:text-blue-500"><a href="https://accredian.com/whyaccredian">Why Accredian</a></li>
						</ul>
					</div>
					<div className="text-gray-800">
						<p className="my-2 text-black font-bold">Contact Us</p>
						<p className="text-sm my-2">
							Email us: 
							<a href="mailto:enterprise@accredian.com" className="text-blue-500"> enterprise@accredian.com</a>
						</p>
						<p className="text-sm">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,</p>
						<p className="text-sm">Gurugram, Haryana</p>
					</div>
				</div>
				<p className="mb-2 text-gray-800 text-sm text-center">
					© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
