

function SunTime({ sunrise, sunset }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Sunset & Sunrise</h2>
							<p>
								Sunrise:{" "}
								{new Date(sunrise).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
							<p>
								Sunset:{" "}
								{new Date(sunset).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
						</div>
					</div>
  )
}

export default SunTime