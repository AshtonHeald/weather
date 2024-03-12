import Card from "../../../components/Card";
import useAirQuality from "../../../hooks/useAirQuality";

const AQI_LEVELS = [
  { max: 50, level: "Good" },
  { max: 100, level: "Moderate" },
  { max: 150, level: "Unhealthy for Sensitive Groups" },
  { max: 200, level: "Unhealthy" },
  { max: 300, level: "Very Unhealthy" },
  { max: 500, level: "Hazardous" },
];

function calculateAQILevel(aqi) {
  for (let i = 0; i < AQI_LEVELS.length; i++) {
    if (aqi <= AQI_LEVELS[i].max) {
      return AQI_LEVELS[i].level;
    }
  }
  return "Unknown";
}

function AirQuality() {
  const { airQualityData, loading, error } = useAirQuality();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching air quality data.</p>;
  }

  if (airQualityData) {
    return (
      <div>
        <Card className="custom-class" title="Air Quality">
          <p>{airQualityData.usAQI}</p>
          <p>{calculateAQILevel(airQualityData.usAQI)}</p>
          <p>(Measurements in µg/m³)</p>
          <p>PM<sub>10</sub> {airQualityData.particulateMatter10}</p>
          <p>PM<sub>2.5</sub> {airQualityData.particulateMatter2_5}</p>
          <p>CO {airQualityData.carbonMonoxide}</p>
          <p>NO<sub>2</sub> {airQualityData.nitrogenDioxide}</p>
          <p>SO<sub>2</sub> {airQualityData.sulphurDioxide}</p>
          <p>O<sub>3</sub> {airQualityData.ozone}</p>
        </Card>
      </div>
    );
  }

  return null;
}

export default AirQuality;