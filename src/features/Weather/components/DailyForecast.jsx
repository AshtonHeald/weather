import { weatherIcons } from "../../../data/weatherIcons";
import Card from "../../../components/MainCard";

function DailyForecast({
	dailyMaxTemp,
	dailyMinTemp,
	dailyWeatherCode,
	currentDayOrNight,
}) {
	return (
		<Card className="w-52 h-[416px]" title="7 Day Forecast">
			<ul>
				{dailyWeatherCode.map((code, index) => {
					// Calculate the day for each forecast
					const today = new Date();
					const nextDay = new Date(today);
					nextDay.setDate(today.getDate() + index + 1); // Start from tomorrow
					const dayOfWeek = nextDay.toLocaleDateString("en-US", {
						weekday: "short",
					});

					// Get the corresponding WeatherIcon for the current weather code
					const weatherIcon = weatherIcons.get(code);
					const SelectedIcon = currentDayOrNight
						? weatherIcon.day
						: weatherIcon.night;

					return (
						<li key={index} className="flex py-1 justify-between items-center">
							{dayOfWeek}{" "}
							{SelectedIcon && <SelectedIcon size={30} />}{" "}
							<span>
								H:{Math.round(dailyMaxTemp[index])}° 
                L:{Math.round(dailyMinTemp[index])}°
							</span>
						</li>
					);
				})}
			</ul>
		</Card>
	);
}

export default DailyForecast;
