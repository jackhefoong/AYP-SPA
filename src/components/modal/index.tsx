import { useState } from "react";

interface ModalProps {
  name: string;
}

export const Modal: React.FC<ModalProps> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <dialog
        className=" bg-white border-2 px-8 py-4 rounded-md"
        open={showModal}
      >
        name: email: status: save
        {/* <button onClick={() => updateName()}>save</button> */}
        <button onClick={() => setShowModal(false)}>cancel</button>
      </dialog>

      <button
        className="bg-slate-600 px-4 py-1 rounded-md text-white"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
    </>
  );
};
