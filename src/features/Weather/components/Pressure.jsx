import SubCard from "../../../components/SubCard";

function Pressure({ surfacePressure }) {
  // Convert hPa to inHg
  const hPaToInHg = (hPa) => {
    return hPa * 0.029529983071445;
  };

  // Convert surface pressure from hPa to inHg
  const surfacePressureInInHg = hPaToInHg(surfacePressure);

  return (
    <SubCard className="size-52" title="Pressure">
      <p>{surfacePressureInInHg.toFixed(2)} inHg</p>
    </SubCard>
  );
}

export default Pressure;