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
import Local from "./components/Local";
import Location from "../../features/Location";
import Card from "../../components/MainCard";

function Weather({ location, setLocation }) {
	const { weatherData, loading, error } = useWeather(location);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error fetching air quality data.</p>;
	}

	if (weatherData) {
		return (
			<>
				<div>
					<Location setLocation={setLocation} />
				</div>
				<div className="flex gap-3">
					<div className="flex flex-col gap-3">
						<Local location={location} />
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
					<div className="flex flex-col gap-3">
						<Card className="flex gap-3">
							<div className="flex gap-3">
								<div className="flex flex-col gap-3">
									<UvIndex uvIndex={weatherData.uvIndex} />
									<AirQuality />
								</div>
								<div className="flex flex-col gap-3">
									<SunTime
										sunrise={weatherData.sunrise}
										sunset={weatherData.sunset}
										daylightDuration={
											weatherData.daylightDuration
										}
									/>
									<Wind
										windSpeed={weatherData.windSpeed}
										windDirection={
											weatherData.windDirection
										}
										windGusts={weatherData.windGusts}
									/>
									<Visibility
										visibility={weatherData.visibility}
									/>
									<Humidity
										humidity={weatherData.humidity}
										dewPoint={weatherData.dewPoint}
									/>
									<Precipitation
										precipitationProbability={
											weatherData.precipitationProbability
										}
										precipitationSum={
											weatherData.precipitationSum
										}
									/>
									<Pressure
										surfacePressure={
											weatherData.surfacePressure
										}
									/>
								</div>
							</div>
						</Card>
						<div>
							<HourlyForecast
								hourlyDayOrNight={weatherData.hourlyDayOrNight}
								hourlyWeatherCode={
									weatherData.hourlyWeatherCode
								}
								hourlyTemp={weatherData.hourlyTemp}
								currentTemp={weatherData.currentTemp}
								weatherCode={weatherData.currentWeatherCode}
								currentDayOrNight={
									weatherData.currentDayOrNight
								}
								hourlyPrecipitationProbability={
									weatherData.hourlyPrecipitationProbability
								}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
	return null;
}

export default Weather;
