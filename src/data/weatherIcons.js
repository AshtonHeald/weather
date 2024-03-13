import { WiDaySunny, WiNightClear, WiCloudy, WiDayCloudy, WiNightAltCloudy, WiFog, WiSprinkle, WiShowers, WiRain, WiSleet, WiSnowflakeCold, WiStormShowers } from "react-icons/wi";

export const weatherIcons = new Map();

function addMapping(values, dayIcon, nightIcon = dayIcon) {
  values.forEach((value) => {
    weatherIcons.set(value, { day: dayIcon, night: nightIcon });
  });
}

addMapping([0, 1], WiDaySunny, WiNightClear); // Clear sky & Mainly clear
addMapping([2], WiDayCloudy, WiNightAltCloudy); // Partly Cloudy

addMapping([3], WiCloudy); // Cloudy
addMapping([45, 48], WiFog); // Fog & Depositing rime fog

addMapping([51, 53, 55], WiSprinkle); // Drizzle
addMapping([56, 57, 66, 67], WiSleet); // Freezing Drizzle & Freezing Rain

addMapping([61, 63, 65], WiShowers); // Rain
addMapping([80, 81, 82], WiRain); // Rain Showers

addMapping([71, 73, 75, 77, 85, 86], WiSnowflakeCold);

addMapping([95, 96, 99], WiStormShowers); // Thunderstorm