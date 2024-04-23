import { Label } from "../label";

interface PaginationProps {
  data: {
    currentPage: number;
    totalPages: number;
  };
  onPageChange: (v: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  data,
  onPageChange,
}) => {

  const handleBack = () => {
    if (data.currentPage === 1) {
      return;
    }
    onPageChange(data.currentPage - 1);
  };
  
  const handleForward = () => {
    if (data.currentPage === data.totalPages) {
      return;
    }
    onPageChange(data.currentPage + 1);
  };
  
  return (
    <div className="flex gap-4 justify-end">
      <button
        onClick={handleBack}
        disabled={data.currentPage === 1}
      >{`<`}</button>
      <Label label={data.currentPage.toString()} />
      <button
        onClick={handleForward}
        disabled={data.currentPage === data.totalPages}
      >{`>`}</button>
    </div>
  );
};
