import { useState } from "react";

interface ModalProps {
  data: {
    name:string;
    email:string;
    isActive: boolean
  };
}

export const Modal: React.FC<ModalProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const handleUpdateData = () => {
    setShowModal(false);
    
  };

  return (
    <>
      {showModal && (
        <>
          <div
            className="top-0 bottom-0 left-0 right-0 bg-black opacity-40 absolute"
            onClick={() => setShowModal(false)}
          />
          <dialog
            className="min-w-[30%] bg-white border-2 px-8 py-4 rounded-md z-10 h-min"
            open={showModal}
          >
            <div className="font-medium text-lg text-start">
              Update employee data
            </div>
            <div>
              Name: <input type="text" defaultValue={data.name}></input>
              Email: <input type="text" defaultValue={data.email}></input>
              Status: <input type="checkbox" checked={data.isActive}></input>

            </div>
            <div className="flex justify-end gap-4">
              {/*  border-t-2 pt-4 */}
              <button
                className="bg-red-700 px-4 py-1 rounded-md text-white font-medium"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-lime-800 px-4 py-1 rounded-md text-white font-medium"
                onClick={handleUpdateData}
              >
                Save
              </button>
            </div>
          </dialog>
        </>
      )}

      <button
        className="bg-slate-600 px-4 py-1 rounded-md text-white"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
    </>
  );
};
