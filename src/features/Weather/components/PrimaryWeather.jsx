import Card from "../../../components/MainCard";

import { weatherDescriptions } from "../../../data/weatherDescriptions";
import { weatherIcons } from "../../../data/weatherIcons";

function PrimaryWeather({ currentTemp, weatherCode, todayMaxTemp, todayMinTemp, apparentTemp, currentDayOrNight}) {
  const weatherIcon = weatherIcons.get(weatherCode);
  const SelectedIcon = currentDayOrNight ? weatherIcon.day : weatherIcon.night;

  return (
    <Card className="size-52" title="Today">
      <div className="flex justify-between items-center">
        <p className="text-4xl font-bold">{Math.round(currentTemp)}<span className="text-2xl">°F</span></p>
        {SelectedIcon  && <SelectedIcon  size={50} />}
      </div>
      <div className="flex flex-col">
        <p>{weatherDescriptions[weatherCode]}</p>
        <p>Feels Like: {Math.round(apparentTemp)}°F</p>
        <p>H: {Math.round(todayMaxTemp)}° L: {Math.round(todayMinTemp)}°</p>

      </div>
      </Card>
  )
}

export default PrimaryWeather;