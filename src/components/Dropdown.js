import React from "react";

const Dropdown = () => {

  return (
    <div className="select_div">
      <select id="">
        <option value="access" defaultValue>Full access</option>
        <option value="edit">Can edit</option>
        <option value="view">Can view</option>
        <option value="noAccess">No access</option>
      </select>
    </div>
  )
};

export default Dropdown;