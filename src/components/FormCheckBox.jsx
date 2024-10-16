import React from "react";

const FormCheckBox = ({ name, label, size, checked, onChange }) => {
  return (
    <div className="form-control place-items-center">
      <label htmlFor={name} className="cursor-pointerpointer label">
        <span className="labe-text capitalize">{label}</span>
      </label>
      <input
        className={`cursor-pointer checkbox checkbox-primary ${size}`}
        type="checkbox"
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
        size={size}
      />
    </div>
  );
};

export default FormCheckBox;
