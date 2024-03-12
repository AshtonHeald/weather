import { weatherDescriptions } from "../../../data/weatherDescriptions";

function PrimaryWeather({ currentTemp, weatherCode, todayMaxTemp, todayMinTemp, apparentTemp}) {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Today</h2>
              <p>{Math.round(currentTemp)}°F</p>
              <p>{weatherDescriptions[weatherCode]}</p>
							<p>Feels Like: {Math.round(apparentTemp)}°F</p>
							<p>H: {Math.round(todayMaxTemp)}° | L: {Math.round(todayMinTemp)}°</p>
							<p></p>
						</div>
					</div>
  )
}

export default PrimaryWeather