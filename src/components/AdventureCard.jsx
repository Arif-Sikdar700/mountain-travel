import React from "react";
import { Navigate, NavLink } from "react-router-dom";

export default function AdventureCard({curData}) {
    
    const {ecoFriendlyFeatures,adventureTitle,image} = curData
	return (
		<div className="card bg-base-100  shadow-xl">
			<figure className="px-10 pt-10">
				<img
					src={image}
					className="rounded-xl h-52 w-full object-cover"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{adventureTitle}</h2>
				<p>{ecoFriendlyFeatures.join(", ")}</p>
				<div className="card-actions">
					<NavLink to={`/adventureDetails/${curData.id}`}><button className="btn btn-primary">Explore Now</button></NavLink>
				</div>
			</div>
		</div>
	);
}
