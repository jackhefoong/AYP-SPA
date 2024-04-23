import data from "../data/employees.json";
import { Table } from "@/components/table";

export default function Home() {
  return (
    <div>
      <Table data={data.employees} />
    </div>
  );
}
