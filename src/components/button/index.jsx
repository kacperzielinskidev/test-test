import './index.css';

const Button = ({
  children,
  className,
  role,
  href,
  type = 'button',
  onClick,
  ariaLabel,
}) => {
  if (href) {
    return (
      <a
        href={href}
        type={type}
        role={role}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      role={role}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
