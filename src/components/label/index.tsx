interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return <p className="text-slate-500 font-medium capitalize">{label}</p>;
};
