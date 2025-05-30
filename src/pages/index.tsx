import { Table } from "@/components/table";
import { useEffect, useState } from "react";
import { Data } from "./api/getEmployeeData";

export default function Home() {
  const [data, setData] = useState<Data[]>();

  const fetchData = async () => {
    const response = await fetch("/api/getEmployeeData");
    const data = await response.json();
    setData(data);
  };

  const handleDataUpdated = async (
    data: Data,
    editMode: "update" | "delete"
  ) => {
    const response = await fetch("/api/updateEmployeeData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedData: data, editMode }),
    });
    const updatedData = await response.json();
    setData(updatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 flex justify-center">
      {data ? (
        <Table data={data} onDataUpdated={handleDataUpdated} />
      ) : (
        "An error has occurred, data could not be fetched" // Basic error handling
      )}
    </div>
  );
}
