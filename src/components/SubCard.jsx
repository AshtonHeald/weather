function SubCard({ className, title, children }) {
  return (
    <div className={`card bg-base-300 ${className}`}>
      <div className="card-body gap-0 p-3">
        <h2 className="card-title text-sm text-primary-content/50">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default SubCard;