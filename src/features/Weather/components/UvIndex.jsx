import Card from "../../../components/Card";

function getUvIndexLevel(uvIndex) {
  if (uvIndex <= 2) {
    return "Low";
  } else if (uvIndex <= 5) {
    return "Moderate";
  } else if (uvIndex <= 7) {
    return "High";
  } else if (uvIndex <= 10) {
    return "Very High";
  } else {
    return "Extreme";
  }
}

function UvIndex({ uvIndex }) {
  return (
    <Card className="custom-class" title="UV Index">
        <p>{uvIndex}</p>
        <p>{getUvIndexLevel(uvIndex)}</p>
      </Card>
  );
}

export default UvIndex;