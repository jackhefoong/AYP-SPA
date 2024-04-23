import data from "../data/employees.json";
import { Table } from "@/components/table";

export default function Home() {
  return (
    <div className="p-4">
      <Table data={data.employees} />
    </div>
  );
}
