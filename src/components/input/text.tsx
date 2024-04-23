import { useState } from "react";
import { Label } from "../label";

interface TextInputProps {
  label: string;
  defaultValue: string;
  onChange: (field: string, value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(label, e.target.value);
  };

  return (
    <div>
      <Label label={label} />
      <input
        type="text"
        className="border-b-2 py-1 px-2 "
        value={value}
        onChange={handleChange}

      />
    </div>
  );
};
