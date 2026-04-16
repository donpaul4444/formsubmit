import React from "react";
import { forms } from "../data/mockdata";
const Admin = () => {
  return (
    <div>
      <p>Admin Panel</p>
      <button className="bg-green-400">+ Create New Form</button>
      <div>
        {forms.map((item) => (
          <div key={item.id} className="flex">
            <div>{item.title}</div>
            <button className="bg-red-400 rounded">View</button>
            <button className="bg-green-200 rounded">Submissions</button>
          </div>
        ))}
      </div>
      <div>
        <p>t</p>
      </div>
    </div>
  );
};

export default Admin;
