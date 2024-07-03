import "./FloatingLabel.css";
import { TFloatingLabel } from "@customTypes/floatingLabel";

const FloatingLabel = ({ type, label, value, onChange }:TFloatingLabel) => {
  return (
        <div className="floating__label">
          <input
            type={type}
            autoComplete="off"
            id={`${type}-${label}`}
            placeholder={label}
            value={value}
            onChange={onChange}
          />
          <label htmlFor={`${type}-${label}`}>{label}</label>
        </div>
  );
};

export default FloatingLabel;
