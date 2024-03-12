import { useState, useEffect } from 'react';
import axios from 'axios';

function useAirQuality() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://air-quality-api.open-meteo.com/v1/air-quality',
          {
            params: {
              latitude: 47.6062,
              longitude: -122.3321,
              timezone: 'America/Los_Angeles',
              current: 'pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi',
            }
          }
        );
        
        console.log(response.data);
        setAirQualityData({
          particulateMatter10: response.data.current.pm10,
          particulateMatter2_5: response.data.current.pm2_5,
          carbonMonoxide: response.data.current.carbon_monoxide,
          nitrogenDioxide: response.data.current.nitrogen_dioxide,
          sulphurDioxide: response.data.current.sulphur_dioxide, 
          ozone: response.data.current.ozone,
          usAQI: response.data.current.us_aqi,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return { airQualityData, loading, error };
}

export default useAirQuality;
