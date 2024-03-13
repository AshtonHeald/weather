import Card from "../../../components/Card";
import { weatherIcons } from "../../../data/weatherIcons";

function HourlyForecast({
	hourlyWeatherCode,
	hourlyDayOrNight,
	hourlyTemp,
	//hourlyPrecipitationProbability,
}) {
	const currentHour = new Date().getHours();

	return (
		<Card className="custom-class" title="Hourly Forecast">
			<div className="overflow-scroll">
				<ul className="flex">
					{hourlyWeatherCode
						.slice(currentHour, currentHour + 25)
						.map((code, index) => {
							const forecastHour = (currentHour + index) % 24;
							const ampm = forecastHour < 12 ? "AM" : "PM";
							const hour =
								forecastHour % 12 === 0
									? 12
									: forecastHour % 12;
							const formattedHour =
								index === 0 ? "Now" : `${hour} ${ampm}`;

							const { day, night } = weatherIcons.get(code);
							const SelectedIcon =
								hourlyDayOrNight[currentHour + index] === 1
									? day
									: night;

							let temp = hourlyTemp[currentHour + index];
							if (isNaN(temp)) {
								temp = "N/A";
							} else {
								temp = Math.round(temp) + "°";
							}
							//const precipitationProbability = hourlyPrecipitationProbability[currentHour + index] || 0;

							return (
								<li key={index} className="p-1 m-1">
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
								</li>
							);
						})}
				</ul>
			</div>
		</Card>
	);
}

export default HourlyForecast;
