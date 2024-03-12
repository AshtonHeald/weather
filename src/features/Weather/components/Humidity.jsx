// Humidity.jsx
function Humidity({ humidity, dewPoint }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Humidity</h2>
        <p>Humidity: {humidity}%</p>
        {/* Add additional humidity-related content here */}
        <p>
								Dew Point: {Math.round(dewPoint)}°F
							</p>
      </div>
    </div>
  );
}

export default Humidity;