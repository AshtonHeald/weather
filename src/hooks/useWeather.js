import { useState, useEffect } from 'react';
import axios from 'axios';

function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentHour = new Date().getHours();

  const feetToMiles = (feet) => {
    // 1 foot is approximately equal to 0.000189394 miles
    return feet * 0.000189394;
  };
  const secondsToHoursMinutes = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (minutes === 0) {
      return `${hours}hr`;
    } else {
      return `${hours}hr ${minutes}min`;
    }
  };
  

  const degreesToDirection = (degrees) => {
    // Ensure degrees are within [0, 360) range
    const normalizedDegrees = degrees % 360;
  
    // Define compass directions and their ranges
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const degreeRanges = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  
    // Find the index of the direction based on degree ranges
    for (let i = 0; i < degreeRanges.length; i++) {
      if (normalizedDegrees < degreeRanges[i]) {
        return directions[i];
      }
    }
  
    // If the degree is between 337.5 and 360 or 0 and 22.5, return 'N'
    return 'N';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast',
          {
            params: {
              latitude: 35.4676,
              longitude: -97.5164,
              timezone: 'America/Chicago',
              temperature_unit: 'fahrenheit',
              precipitation_unit: 'inch',
              //wind_speed_unit: 'mph',
              current: 'temperature_2m,weather_code,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,visibility,relative_humidity_2m,dew_point_2m,precipitation_probability,surface_pressure,is_day',
              hourly: 'weather_code,temperature_2m,is_day,precipitation_probability',
              daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,daylight_duration',
              models: 'best_match',
              forecast_days: 14,
            },
          }
        );

        console.log(response.data);
        setWeatherData({
          //General
          currentDayOrNight: response.data.current.is_day,
          hourlyDayOrNight: response.data.hourly.is_day,
          //Primary Card
          currentTemp: response.data.current.temperature_2m,
          currentWeatherCode: response.data.current.weather_code,
          apparentTemp: response.data.current.apparent_temperature,
          todayMaxTemp: response.data.daily.temperature_2m_max[0],
          todayMinTemp: response.data.daily.temperature_2m_min[0],
          // Wind Card
          windSpeed: response.data.current.wind_speed_10m,
          windDirection: degreesToDirection(response.data.current.wind_direction),
          windGusts: response.data.current.wind_gusts_10m,
          // Visibility Card
          visibility: feetToMiles(response.data.current.visibility),
          // UV Index Card
          uvIndex: response.data.current.uv_index,
          // Humidity Card
          humidity: response.data.current.relative_humidity_2m,
          dewPoint: response.data.current.dew_point_2m,
          // Precipitation Card
          precipitationProbability: response.data.current.precipitation_probability,
          precipitationSum: response.data.daily.precipitation_sum[0],
          // Pressure Card
          surfacePressure: response.data.current.surface_pressure,
          // Hourly forecast
          hourlyTemp: response.data.hourly.temperature_2m,
          hourlyWeatherCode: response.data.hourly.weather_code,
          //hourlyPrecipitationProbability: response.data.hourly.precipitation_probability,
          // Suntime Card
          daylightDuration: secondsToHoursMinutes(response.data.daily.daylight_duration[0]),
          sunrise: response.data.daily.sunrise[0],
          sunset: response.data.daily.sunset[0],
          // 7 day forecast
          dailyWeatherCode: response.data.daily.weather_code.slice(1, 8),
          dailyMaxTemp: response.data.daily.temperature_2m_max.slice(1, 8),
          dailyMinTemp: response.data.daily.temperature_2m_min.slice(1, 8),
          
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentHour]);

  return { weatherData, loading, error };
}

export default useWeather;





