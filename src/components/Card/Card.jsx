import "./Card.css";

function Card({
  title,
  description,
  children,
  footer,
  className = "",
}) {
  return (
    <article className={`forma-card ${className}`}>
      {title && <h3 className="forma-card__title">{title}</h3>}

      {description && (
        <p className="forma-card__description">{description}</p>
      )}

      {children && (
        <div className="forma-card__content">
          {children}
        </div>
      )}

      {footer && (
        <div className="forma-card__footer">
          {footer}
        </div>
      )}
    </article>
  );
}

export default Card;