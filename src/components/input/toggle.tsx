import { useState } from "react";
import { Label } from "../label";

interface ToggleInputProps {
  label: string;
  checked: boolean;
  onChange: (field: string, value: boolean) => void;
}

export const ToggleInput: React.FC<ToggleInputProps> = ({
  label,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange("status", e.target.checked);
  };

  return (
    <label className="inline-block">
      <Label label={label} />
      <input
        type="checkbox"
        checked={isChecked}
        className="hidden"
        onChange={handleChange}
      />
      <div
        className={`relative w-11 h-6 rounded-full transition-colors duration-150 mt-2 ${
          isChecked ? "bg-slate-800" : "bg-slate-400"
        }`}
      >
        <div
          className={`absolute h-5 w-5 rounded-full bg-white top-0.5  transition-all duration-300  ${
            isChecked ? "right-0.5" : "left-0.5"
          }`}
        />
      </div>
    </label>
  );
};
