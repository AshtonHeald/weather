import Card from "../../../components/MainCard";
import { weatherIcons } from "../../../data/weatherIcons";
import SubCard from "../../../components/SubCard";

function HourlyForecast({
	hourlyWeatherCode,
	hourlyDayOrNight,
	hourlyTemp,
	currentTemp,
	weatherCode,
	currentDayOrNight,
	//hourlyPrecipitationProbability,
}) {
	const currentHour = new Date().getHours();
	const weatherIcon = weatherIcons.get(weatherCode);
	const SelectedIcon = currentDayOrNight
		? weatherIcon.day
		: weatherIcon.night;
	return (
		<Card className="w-full" title="24 Hour Forecast">
			<div className="overflow-scroll">
				<ul className="flex">
					<li className="p-1 m-1">
						<SubCard>
						<div className="w-12 grid place-items-center">
							{"Now"}
							{SelectedIcon && <SelectedIcon size={30} />}
							{isNaN(currentTemp)
								? "N/A"
								: Math.round(currentTemp) + "°"}
						</div>
						</SubCard>
					</li>
					{hourlyWeatherCode
						.slice(currentHour + 1, currentHour + 26)
						.map((code, index) => {
							const forecastHour = (currentHour + index + 1) % 24;
							const ampm = forecastHour < 12 ? "AM" : "PM";
							const hour =
								forecastHour % 12 === 0
									? 12
									: forecastHour % 12;
							const formattedHour = `${hour} ${ampm}`;

							const { day, night } = weatherIcons.get(code);
							const SelectedIcon =
								hourlyDayOrNight[currentHour + index + 1] === 1
									? day
									: night;

							let temp = hourlyTemp[currentHour + index + 1];
							if (isNaN(temp)) {
								temp = "N/A";
							} else {
								temp = Math.round(temp) + "°";
							}
							//const precipitationProbability = hourlyPrecipitationProbability[currentHour + index + 1] || 0;

							return (
								<li key={index} className="p-1 m-1">
									<SubCard>

									<div className="w-12 grid place-items-center">
										{formattedHour}
										{SelectedIcon && (
											<SelectedIcon size={30} />
											)}{" "}
										{temp}
										{/*precipitationProbability > 0 && (
											<span>{precipitationProbability}%</span>
										)*/}
									</div>
										</SubCard>
								</li>
							);
						})}
				</ul>
			</div>
		</Card>
	);
}

export default HourlyForecast;
