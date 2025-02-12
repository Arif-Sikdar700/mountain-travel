import React from "react";
import hiking1 from "../assets/hakings/1.jpg";
import hiking2 from "../assets/hakings/2.jpg";
import hiking3 from "../assets/hakings/3.jpg";

export default function Hiking() {
	return (
		<div>
			<h3 className="text-center font-bold my-20 text-3xl">Why Hikings?</h3>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
				<div className="shadow-xl flex flex-col items-center space-y-3 px-4 py-5">
					<img
						className="w-16 h-16 object-cover rounded-full ring"
						src={hiking1}
						alt=""
					/>
					<h3 className="font-bold text-2xl">110 + mountains</h3>
					<p className="text-center">
						Towering peaks kiss the sky, their snow-capped summits shimmering
						under the golden sun, offering breathtaking views and serene
						landscapes.
					</p>
				</div>
				<div className="shadow-xl flex flex-col items-center space-y-3 px-4 py-5">
					<img
						className="w-16 h-16 object-cover rounded-full ring"
						src={hiking2}
						alt=""
					/>
					<h3 className="font-bold text-2xl">110 + hiking</h3>
					<p className="text-center">
						Towering peaks kiss the sky, their snow-capped summits shimmering
						under the golden sun, offering breathtaking views and serene
						landscapes.
					</p>
				</div>
				<div className="shadow-xl flex flex-col items-center space-y-3 px-4 py-4">
					<img
						className="w-16 h-16 object-cover rounded-full ring"
						src={hiking3}
						alt=""
					/>
					<h3 className="text-2xl font-bold">110 + customer</h3>
					<p>
						Towering peaks kiss the sky, their snow-capped summits shimmering
						under the golden sun, offering breathtaking views and serene
						landscapes.
					</p>
				</div>
			</div>
		</div>
	);
}
