function UvIndex({ uvIndex }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title">UV Index</h2>
							<p>{uvIndex}</p>
						</div>
					</div>
  )
}

export default UvIndex

