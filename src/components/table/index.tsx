import { Modal } from "../modal";

interface TableProps {
  data: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[];
}

const HEADER_STYLING = "px-8 py-2 font-medium text-start";
const DATA_STYLING = "px-8 py-2 h-11 max-w-xl truncate";

export const Table: React.FC<TableProps> = ({ data }) => {
  const handleSave = () => {
    data[1].name = "hehe"; //doesn't update the json
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
        {data.map((d, i) => {
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
                {d.isActive ? <Modal data={d} onSave={handleSave} /> : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <div>
      <table className="border-2 border-slate-400">
        {renderTableHeader()}
        {renderTableData()}
      </table>
    </div>
  );
};
