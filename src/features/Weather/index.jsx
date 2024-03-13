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
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

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
			<div className="flex">
				<div>
					<PrimaryWeather
						currentTemp={weatherData.currentTemp}
						weatherCode={weatherData.currentWeatherCode}
						apparentTemp={weatherData.apparentTemp}
						todayMaxTemp={weatherData.todayMaxTemp}
						todayMinTemp={weatherData.todayMinTemp}
						currentDayOrNight={weatherData.currentDayOrNight}
					/>
					<DailyForecast
						dailyWeatherCode={weatherData.dailyWeatherCode}
						dailyMaxTemp={weatherData.dailyMaxTemp}
						dailyMinTemp={weatherData.dailyMinTemp}
						currentDayOrNight={weatherData.currentDayOrNight}
					/>
				</div>
				<div>
					<UvIndex uvIndex={weatherData.uvIndex} />
					<AirQuality />
				</div>
				<div>
					<SunTime
						sunrise={weatherData.sunrise}
						sunset={weatherData.sunset}
						daylightDuration={weatherData.daylightDuration}
					/>
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
				</div>
				<div>
					<HourlyForecast
						hourlyDayOrNight={weatherData.hourlyDayOrNight}
						hourlyWeatherCode={weatherData.hourlyWeatherCode}
						hourlyTemp={weatherData.hourlyTemp}
						hourlyPrecipitationProbability={
							weatherData.hourlyPrecipitationProbability
						}
					/>
				</div>
			</div>
		);
	}
	return null;
}

export default Weather;
