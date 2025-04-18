import { useState } from "react";
import { Modal } from "../modal";
import { Pagination } from "./pagination";
import { Data } from "@/pages/api/getEmployeeData";

interface TableProps {
  data: Data[];
  onDataUpdated: (data: Data, editMode: "update" | "delete") => void;
}

const DATA_PER_PAGE = 3;
const HEADER_STYLING = "px-8 py-2 font-medium text-start";
const DATA_STYLING = "px-8 py-2 h-11 max-w-xl truncate"; // Truncates data if data is too long

export const Table: React.FC<TableProps> = ({ data, onDataUpdated }) => {
  const TOTAL_PAGES = Math.ceil(data.length / DATA_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedData, setSearchedData] = useState(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedData(
      data.filter(
        (sd) =>
          sd.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          sd.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th className={HEADER_STYLING}>ID</th>
          <th className={HEADER_STYLING}>Name</th>
          <th className={HEADER_STYLING}>Email</th>
          <th className={HEADER_STYLING}>Status</th>
          <th className={HEADER_STYLING}>Action</th>
        </tr>
      </thead>
    );
  };

  const renderTableData = () => {
    return (
      <tbody>
        {searchedData
          .slice((currentPage - 1) * DATA_PER_PAGE, currentPage * DATA_PER_PAGE)
          .map((d, i) => {
            return (
              <tr
                key={d.id}
                className={`text-sm ${
                  i % 2 === 0 ? "bg-slate-200" : "bg-slate-50"
                }`}
              >
                <td className={DATA_STYLING}>{d.id}</td>
                <td className={DATA_STYLING}>{d.name}</td>
                <td className={DATA_STYLING}>{d.email}</td>
                <td className={DATA_STYLING}>
                  {d.isActive ? "ACTIVE" : "DEACTIVATED"}
                </td>
                <td className={DATA_STYLING}>
                  <Modal
                    data={d}
                    onSave={onDataUpdated}
                    editMode={d.isActive ? "update" : "delete"}
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    );
  };

  return (
    <div>
      {/* Broke down rendering for header and data for easier changes targeting the two, individually in future if needed. */}
      <input
        placeholder="Search"
        onChange={handleSearch}
        className="mb-2 border-b-2"
      />
      <table className="border-2 border-slate-400">
        {renderTableHeader()}
        {renderTableData()}
      </table>
      <Pagination
        data={{
          currentPage: currentPage,
          totalPages: TOTAL_PAGES,
        }}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
