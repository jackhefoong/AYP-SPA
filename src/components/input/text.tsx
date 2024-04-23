import { Label } from "../label";

interface TextInputProps {
  label: string;
  defaultValue: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, defaultValue }) => {
  return (
    <div>
      <Label label={label} />
      <input
        type="text"
        defaultValue={defaultValue}
        className="border-b-2 py-1 px-2 "
      />
    </div>
  );
};
