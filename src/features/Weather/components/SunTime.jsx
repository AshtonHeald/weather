import Card from "../../../components/Card";

function SunTime({ sunrise, sunset, daylightDuration }) {
  return (
    <Card className="custom-class" title="Sunset & Sunrise">
							<p>Daylight: {daylightDuration}</p>
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
						</Card>
  )
}

export default SunTime