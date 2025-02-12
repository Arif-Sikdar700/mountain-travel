import React from "react";
import AdventureCard from "./AdventureCard";

export default function AdventureExperiences({ AdventureData }) {

	return (
		<div>
			<h1 className="mt-14 font-bold text-3xl">
				Adventure Experiences Section
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-4">
				{AdventureData.map((curData) => {
					return <AdventureCard key={curData.id} curData={curData}></AdventureCard>;
				})}
			</div>
		</div>
	);
}
