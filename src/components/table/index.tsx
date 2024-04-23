import { Modal } from "../modal";

interface TableProps {
  data: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[];
}

const DATA_STYLING = "px-4 py-2 text-center";

export const Table: React.FC<TableProps> = ({ data }) => {
  const renderTableHeader = () => {
    return (
      <tr>
        <th className={DATA_STYLING}>ID</th>
        <th className={DATA_STYLING}>Name</th>
        <th className={DATA_STYLING}>Email</th>
        <th className={DATA_STYLING}>Status</th>
        <th className={DATA_STYLING}>Action</th>
      </tr>
    );
  };

  const renderTableData = () => {
    return data.map((d, i) => {
      return (
        <tr
          key={d.id}
          className={`text-sm ${i % 2 === 0 ? "bg-slate-200" : "bg-slate-50"}`}
        >
          <td className={DATA_STYLING}>{d.id}</td>
          <td className={DATA_STYLING}>{d.name}</td>
          <td className={DATA_STYLING}>{d.email}</td>
          <td className={DATA_STYLING}>
            {d.isActive ? "ACTIVE" : "DEACTIVATED"}
          </td>
          <td className={DATA_STYLING}>{d.isActive ? <Modal name={d.name} /> : null}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="border-2 border-slate-400">
        {renderTableHeader()} {renderTableData()}
      </table>
    </div>
  );
};
