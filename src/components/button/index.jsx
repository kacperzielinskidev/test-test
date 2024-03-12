import './index.css';

/**
 * A versatile button component that can render as either an <a> (link) or <button>.
 * @param {JSX.Element} children - The content of the button.
 * @param {string} className - Additional CSS class names for styling.
 * @param {string} role - The ARIA role attribute for accessibility.
 * @param {string} href - The URL for the link (if rendered as an <a>).
 * @param {string} type - The type attribute for the button element.
 * @param {function} onClick - The click event handler function.
 * @param {string} ariaLabel - The ARIA label for accessibility.
 * @returns {JSX.Element} - The rendered Button component.
 */

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
