import Card from "../../../components/Card";

function Humidity({ humidity, dewPoint }) {
  return (
    <Card className="custom-class" title="Humidity">
        <p>Humidity: {humidity}%</p>
        {/* Add additional humidity-related content here */}
        <p>
								Dew Point: {Math.round(dewPoint)}°F
							</p>
    </Card>
  );
}

export default Humidity;