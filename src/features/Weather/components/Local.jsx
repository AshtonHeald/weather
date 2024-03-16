import React from "react";
import Card from "../../../components/MainCard";

function Local({ location }) {
	console.log("Location object:", location);
	return (
		<Card class="w-60 h-[120px]" title="Location">
			{location ? (
				<>
					<div className="text-sm">
						<p>
							{location.city}, {location.admin1}
						</p>
					</div>
				</>
			) : (
				<p>No location data available.</p>
			)}
		</Card>
	);
}

export default Local;
