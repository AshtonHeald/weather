import SubCard from "../../../components/SubCard";

function Precipitation({ precipitationSum, precipitationProbability }) {
	return (
		<SubCard class="w-52" title="Precipitation">
			<p>{precipitationProbability}%</p>
			<p>{precipitationSum.toFixed(2)}" in last 24hr</p>
		</SubCard>
	);
}

export default Precipitation;
