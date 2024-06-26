import "./FloatingLabel.css";
import { TFloatingLabel } from "@customTypes/floatingLabel";

const FloatingLabel = ({ type, label }:TFloatingLabel) => {
  return (
        <div className="floating__label">
          <input
            type={type}
            autoComplete="off"
            id={`${type}-${label}`}
            placeholder={label}
          />
          <label htmlFor={`${type}-${label}`}>{label}</label>
        </div>
  );
};

export default FloatingLabel;
