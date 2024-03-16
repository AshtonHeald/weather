import { useState, useEffect } from 'react';
import axios from 'axios';

function useLocation(searchQuery) {
  const [data, setLocationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) { // Only execute the API request when searchQuery is not empty
        try {
          const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: {
              count: 10,
              name: searchQuery,
            },
          });

          // Check if the response includes a 'results' property
          if (response.data && response.data.results) {
            setLocationData(response.data.results.map(location => ({
              city: location.name,
              countryCode: location.country_code,
              admin1: location.admin1,
              latitude: location.latitude,
              longitude: location.longitude,
              timezone: location.timezone,
            })));
          }
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }
    };

    fetchData();
  }, [searchQuery]); // This will re-run the effect when `searchQuery` changes

  return data;
}

export default useLocation;