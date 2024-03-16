import SubCard from "../../../components/SubCard";

function Humidity({ humidity, dewPoint }) {
  return (
    <SubCard className="w-52" title="Humidity">
        <p>Humidity: {humidity}%</p>
        {/* Add additional humidity-related content here */}
        <p>
								Dew Point: {Math.round(dewPoint)}°F
							</p>
    </SubCard>
  );
}

export default Humidity;