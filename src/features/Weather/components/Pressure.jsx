import Card from "../../../components/Card";

function Pressure({ surfacePressure }) {
  // Convert hPa to inHg
  const hPaToInHg = (hPa) => {
    return hPa * 0.029529983071445;
  };

  // Convert surface pressure from hPa to inHg
  const surfacePressureInInHg = hPaToInHg(surfacePressure);

  return (
    <Card class="custom-class" title="Pressure">
      <p>{surfacePressureInInHg.toFixed(2)} inHg</p>
    </Card>
  );
}

export default Pressure;