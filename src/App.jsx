// App.jsx
import React, { useEffect, useState } from 'react';
import Weather from "./features/Weather";
import Location from "./features/Location";

function App() {
  const [location, setLocation] = useState(JSON.parse(localStorage.getItem('lastLocation')) || null);
  const [showWeather, setShowWeather] = useState(false);

  useEffect(() => {
    if (location) {
      setShowWeather(true);
    }
    localStorage.setItem('lastLocation', JSON.stringify(location));
  }, [location]);

  return (
    <div className="font-mono w-[800px] overflow-hidden">
      {!showWeather && <Location setLocation={setLocation} />}
      {showWeather && <Weather location={location} setLocation={setLocation} />}
    </div>
  )
}

export default App;
