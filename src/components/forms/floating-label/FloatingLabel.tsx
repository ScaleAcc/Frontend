import "./FloatingLabel.css";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

interface Inputprop<TFloatingLabel extends FieldValues> {
  type: "text" | "password" | "email" | "date";
  label: string;
  name: Path<TFloatingLabel>;
  register: UseFormRegister<TFloatingLabel>;
  error?: string;
}
const FloatingLabel = <TFloatingLabel extends FieldValues>({
  type,
  label,
  register,
  name,
  error,
}: Inputprop<TFloatingLabel>) => {
  return (
    <div className="floating__label">
      <input
        type={type}
        autoComplete="off"
        id={`${type}-${label}`}
        placeholder={label}
        {...register(name)}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      <label htmlFor={`${type}-${label}`}>{label}</label>
    </div>
  );
};

export default FloatingLabel;
