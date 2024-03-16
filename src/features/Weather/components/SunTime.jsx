import SubCard from "../../../components/SubCard";

function SunTime({ sunrise, sunset, daylightDuration }) {
  return (
    <SubCard className="size-48" title="Sun Time">
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
						</SubCard>
  )
}

export default SunTime