function Card({ className, title, children }) {
  return (
    <div className={`card bg-base-200 ${className}`}>
      <div className="card-body p-4">
        <h2 className="card-title text-sm text-primary-content/50">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Card;