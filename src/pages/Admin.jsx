import React, { useState } from "react";
import { forms } from "../data/mockdata";
import NewForm from "../components/NewForm";
const Admin = () => {
  const [showModal,setShowModal] =useState(false)
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Admin Panel</h1>
      <div className="mb-4 flex justify-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer" onClick={()=>setShowModal(true)}>
          + Create New Form
        </button>
      </div>
      <div className="">
        <table className="border w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 ">Title</th>
              <th className="border p-3 ">Description</th>
              <th className="border p-3 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border p-3">{item.title}</td>
                <td className="border p-3">{item.description}</td>
                <td className="border p-3 text-center whitespace-nowrap">
                  <div className="flex justify-center gap-2">
                    <button className="bg-red-400 text-white rounded py-1 px-2 cursor-pointer">
                      View
                    </button>
                    <button className="bg-green-400 text-white rounded py-1 px-2 cursor-pointer">
                      Submissions
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div></div>
      </div>
      {showModal && <NewForm modal={setShowModal}/>}
    </div>
  );
};

export default Admin;
