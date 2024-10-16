import formatPrice from "../utils/index";

const FormRange = ({ label, name, size, value, onChange }) => {
  const step = 100000;
  const maxPrice = 10000000;

  return (
    <div className="form-control">
      <label htmlFor={name} className="label-text capitalize">
        {label}
        <span>{formatPrice(value)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={value}
        onChange={onChange}
        step={step}
        className={`range range-primary ${size}`}
      />
    </div>
  );
};

export default FormRange;
