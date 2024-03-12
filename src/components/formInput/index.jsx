import './index.css';
import { FULL } from '../../constants';

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  style,
}) => {
  const formStyle =
    style === FULL ? 'formInput formInput-full' : 'formInput formInput-half';

  return (
    <input
      className={formStyle}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};

export default FormInput;
