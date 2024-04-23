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
    const { id, name, email, isActive } = req.body;

    const indexOfEmployee = data.employees.findIndex((e) => e.id === id);

    data.employees[indexOfEmployee] = {
      id,
      name,
      email,
      isActive,
    };

    await fsPromises.writeFile("./src/pages/api/employees.json", JSON.stringify(data));
    res.status(200).json(data.employees);
  } catch (error) {
    res.status(500);
  }
}
