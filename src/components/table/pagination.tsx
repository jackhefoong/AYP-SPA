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

  const goTo = (idx: number) => {
    onPageChange(idx);
  };

  return (
    <div className="flex gap-4 justify-center">
      {Array.from({ length: data.totalPages }).map((_, i) => {
        return (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            className={
              data.currentPage === i + 1
                ? "text-red-500 font-semibold underline"
                : ""
            }
          >
            {i + 1}
          </button>
        );
      })}
      {/* <button
        onClick={handleBack}
        disabled={data.currentPage === 1}
      >{`<`}</button>
      <Label label={data.currentPage.toString()} />
      <button
        onClick={handleForward}
        disabled={data.currentPage === data.totalPages}
      >{`>`}</button> */}
    </div>
  );
};
