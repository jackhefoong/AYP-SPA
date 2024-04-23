import { useState } from "react";
import { TextInput } from "../input/text";
import { ToggleInput } from "../input/toggle";
import { Data } from "../table";

interface ModalProps {
  data: Data;
  onSave: (data: Data) => void;
}

export const Modal: React.FC<ModalProps> = ({ data, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (field: string, value: string | boolean) => {
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
                <TextInput
                  label="name"
                  defaultValue={data.name}
                  onChange={handleChange}
                />
                <TextInput
                  label="email"
                  defaultValue={data.email}
                  onChange={handleChange}
                />
              </div>
              <ToggleInput
                label="status"
                checked={data.isActive}
                onChange={handleChange}
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
