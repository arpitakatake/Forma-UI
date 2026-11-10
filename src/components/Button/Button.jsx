import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`forma-button forma-button--${variant} forma-button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;