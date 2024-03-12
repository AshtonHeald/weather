import Card from "../../../components/Card";
function Wind({ windSpeed, windDirection, windGusts }) {
	return (
		<Card class="custom-class" title="Wind">
			<p>{Math.round(windSpeed)} mph</p>
			<p>
				{windDirection}, gusts {windGusts} mph
			</p>
		</Card>
	);
}

export default Wind;
