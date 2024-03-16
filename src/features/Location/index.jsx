import React from "react";
import useLocation from "../../hooks/useLocation";

function Location({ setLocation }) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const data = useLocation(searchQuery);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleLocationSelect = (location) => {
		setLocation({
			latitude: location.latitude,
			longitude: location.longitude,
			timezone: location.timezone,
			city: location.city,
			admin1: location.admin1,
			countryCode: location.countryCode,
		});
	};

	return (
		<>
			<div className="dropdown w-full">
				<input
					className="input input-bordered w-full max-w-xs"
					placeholder="Search for a location"
					tabIndex={0}
					type="text"
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu bg-base-200 w-56 rounded-box"
				>
					{data.length > 0 ? (
						data.map((location, index) => (
							<li
								key={index}
								onClick={() =>
									setLocation({
										latitude: location.latitude,
										longitude: location.longitude,
										timezone: location.timezone,
										city: location.city,
										admin1: location.admin1,
										countryCode: location.countryCode,
									})
								}
							>
								<a className="flex flex-col">
									<div>{location.city}</div>
									<div>
										{location.admin1},{" "}
										{location.countryCode}
									</div>
								</a>
							</li>
						))
					) : (
						<li>No results</li>
					)}
				</ul>
			</div>
		</>
	);
}

export default Location;

/*
navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess({ coords }) {
	getWeather(coords.latitude, coords.longitude, Intl.DateTimeFormat().resolvedOptions().timeZone)
		.then(renderWeather)
		.catch(e => {
			console.error(e);
			alert("Error getting weather.");
		});
}
*/
