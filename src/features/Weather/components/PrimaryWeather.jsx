import Card from "../../../components/Card";

import { weatherDescriptions } from "../../../data/weatherDescriptions";
import { weatherIcons } from "../../../data/weatherIcons";

function PrimaryWeather({ currentTemp, weatherCode, todayMaxTemp, todayMinTemp, apparentTemp, currentDayOrNight}) {
  const weatherIcon = weatherIcons.get(weatherCode);
  const SelectedIcon = currentDayOrNight ? weatherIcon.day : weatherIcon.night;

  return (
    <Card className="custom-class" title="Today">
        <p>{Math.round(currentTemp)}°F</p>
        {SelectedIcon  && <SelectedIcon  size={30} />}
        <p>{weatherDescriptions[weatherCode]}</p>
        <p>Feels Like: {Math.round(apparentTemp)}°F</p>
        <p>H: {Math.round(todayMaxTemp)}° L: {Math.round(todayMinTemp)}°</p>
      </Card>
  )
}

export default PrimaryWeather;