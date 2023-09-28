import "./Button.css";

export function Button({
  children,
  btnStyle,
  text = "",
  hasIcon = false,
  hover = false,
}) {
  return (
    <div>
      <p className={`p-default ${hover ? "hover-focus" : ""}`}>{text}</p>
      <button className={btnStyle}>
        {hasIcon ? (
          <>
            <span className="icon-text">{children}</span>
            <span className="material-symbols-outlined icon">
              add_shopping_cart
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    </div>
  );
}
