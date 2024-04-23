import { useState } from "react";
import { TextInput } from "../input/text";
import { ToggleInput } from "../input/toggle";

interface ModalProps {
  data: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  onSave: (v: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }) => void;
}

export const Modal: React.FC<ModalProps> = ({ data, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleToggleStatus = (field: string, value: string | boolean) => {
    console.log(field, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveData = () => {
    onSave(formData);
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
            className="min-w-[20%] bg-white border-2 px-8 py-4 rounded-md z-10 h-min"
            open={showModal}
          >
            <div className="font-medium text-lg text-start">
              Update employee data
            </div>
            <div className="pb-4 flex flex-col">
              <div className="flex py-4 gap-4">
                <TextInput label="Name" defaultValue={data.name} />
                <TextInput label="Email" defaultValue={data.email} />
              </div>
                <ToggleInput
                  label="Status"
                  checked={data.isActive}
                  onChange={handleToggleStatus}
                />
            </div>
            <div className="flex justify-end gap-4 border-t-2 pt-4">
              <button
                className="bg-red-700 px-4 py-1 rounded-md text-white font-medium"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-lime-800 px-4 py-1 rounded-md text-white font-medium"
                onClick={handleSaveData}
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
