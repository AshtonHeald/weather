function Card({ className, title, children }) {
  return (
    <div className={`card w-60 bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Card;