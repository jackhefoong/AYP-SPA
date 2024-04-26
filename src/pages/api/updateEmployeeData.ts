import { NextApiRequest, NextApiResponse } from "next";

import fsPromises from "fs/promises";

import data from "./employees.json";

export type Data = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  try {
    const { updatedData, editMode } = req.body;

    const indexOfEmployee = data.employees.findIndex(
      (e) => e.id === updatedData.id
    );

    if (editMode === "delete") {
      const filteredData = data.employees.filter(
        (e) => e.id !== updatedData.id
      );

      await fsPromises.writeFile(
        "./src/pages/api/employees.json",
        JSON.stringify({ employees: filteredData })
      );

      res.status(200).json(filteredData);
    } else {
      data.employees[indexOfEmployee] = updatedData;

      await fsPromises.writeFile(
        "./src/pages/api/employees.json",
        JSON.stringify(data)
      );

      res.status(200).json(data.employees);
    }
  } catch (error) {
    res.status(500);
  }
}
