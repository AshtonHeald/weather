import Card from "../../../components/Card";

function Precipitation({ precipitationSum, precipitationProbability }) {
	return (
		<Card class="custom-class" title="Precipitation">
			<p>{precipitationProbability}%</p>
			<p>{precipitationSum.toFixed(2)}" in last 24hr</p>
		</Card>
	);
}

export default Precipitation;
