import { X } from "lucide-react";

const NewForm = ({ modal }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center ">
      <div className="bg-white w-1/2 h-1/2 rounded p-6  space-y-2">
        <h1 className="text-2xl mb-4">Create New Form</h1>
        <div className="space-y-1">
          <p>Title</p>
          <input type="text" className="border p-2 rounded w-1/2" />
        </div>
        <div className="space-y-1">
          <p>Description</p>
          <textarea type="text" className="border p-2 rounded w-1/2" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <p>Label</p>
          <p>Type</p>
          <p>required</p>
          <p>Delete</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <input type="text" className="border rounded p-2" />
          <select name="" id="" className="border rounded p-2">
            <option value="">Text</option>
            <option value="">Number</option>
            <option value="">Dropdown</option>
          </select>
          <input type="checkbox" className="w-2 h-2"/>
          <X color="#ff0000" />
        </div>
        <button
          onClick={() => modal(false)}
          className="cursor-pointer bg-red-500 rounded px-2 text-white mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default NewForm;
