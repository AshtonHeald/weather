import SubCard from "../../../../components/SubCard";
import compass from "./compass.module.css";

function Wind({ windSpeed, windDirection, windGusts }) {
	const rotateStyle = {
		transform: `rotate(${windDirection}deg)`,
	};

	const rotateOppositeStyle = {
		transform: `rotate(${windDirection + 180}deg)`, // 180 degrees more than the original
	};

	return (
		<SubCard className="size-48" title="Wind">
			<div className="grid place-items-center gap-2">
				<div className={compass.compass}>
					<div
						className={compass.fromNeedle}
						style={rotateStyle}
					></div>
					<div
						className={compass.toNeedle}
						style={rotateOppositeStyle}
					></div>
					<div className={compass.center}>
						<div className="text-center">
							<div className="font-bold text-2xl leading-none">
								{Math.round(windSpeed)}
							</div>
							<div>mph</div>
						</div>
					</div>
					{/* Marker N*/}
					<div className={compass.markerN}>N</div>
					{/* Marker E*/}
					<div className={compass.markerE}>E</div>
					{/* Marker S*/}
					<div className={compass.markerS}>S</div>
					{/* Marker W*/}
					<div className={compass.markerW}>W</div>
				</div>
				<p className="text-center text-xs">
					Gusts: {Math.round(windGusts)} mph
				</p>
			</div>
		</SubCard>
	);
}

export default Wind;
