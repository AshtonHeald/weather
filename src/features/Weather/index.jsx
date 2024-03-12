import useWeather from "../../hooks/useWeather";
import Humidity from "./components/Humidity";
import SunTime from "./components/SunTime";
import UvIndex from "./components/UvIndex";
import PrimaryWeather from "./components/PrimaryWeather";
import Visibility from "./components/Visibility";
import Wind from "./components/Wind";
import Precipitation from "./components/Precipitation";
import Pressure from "./components/Pressure";
import AirQuality from "./components/AirQuality";

function Weather() {
	const { weatherData, loading, error } = useWeather();

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error fetching air quality data.</p>;
	}

	if (weatherData) {
		return (
			<div>
				<PrimaryWeather
					currentTemp={weatherData.currentTemp}
					weatherCode={weatherData.weatherCode}
					apparentTemp={weatherData.apparentTemp}
					todayMaxTemp={weatherData.todayMaxTemp}
					todayMinTemp={weatherData.todayMinTemp}
				/>
				<SunTime
					sunrise={weatherData.sunrise}
					sunset={weatherData.sunset}
				/>
				<UvIndex uvIndex={weatherData.uvIndex} />
				<AirQuality />
				<Wind
					windSpeed={weatherData.windSpeed}
					windDirection={weatherData.windDirection}
					windGusts={weatherData.windGusts}
				/>
				<Visibility visibility={weatherData.visibility} />
				<Humidity
					humidity={weatherData.humidity}
					dewPoint={weatherData.dewPoint}
				/>
				<Precipitation
					precipitationProbability={
						weatherData.precipitationProbability
					}
					precipitationSum={weatherData.precipitationSum}
				/>
				<Pressure surfacePressure={weatherData.surfacePressure} />
				{/* 7 Day Forecast */}
				{/* Hourly Forecast */}
			</div>
		);
	}
	return null;
}

export default Weather;
