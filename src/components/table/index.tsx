import { ModalTriggerButton } from "../modal/button";

interface TableProps {
  data: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  const renderTableHeader = () => {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    );
  };
  const renderTableData = () => {
    return data.map((d) => {
      return (
        <tr key={d.id} className="text-sm text-center">
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.isActive ? "ACTIVE" : "DEACTIVATED"}</td>
          <td>{d.isActive ? <ModalTriggerButton /> : null}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        {renderTableHeader()} {renderTableData()}
      </table>
    </div>
  );
};
