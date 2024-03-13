import Card from "../../../components/Card";
function Wind({ windSpeed, windDirection, windGusts }) {
	return (
		<Card class="" title="Wind">
			<p>{Math.round(windSpeed)} mph</p>
			<p>
				{windDirection}, gusts {Math.round(windGusts)} mph
			</p>
		</Card>
	);
}

export default Wind;
