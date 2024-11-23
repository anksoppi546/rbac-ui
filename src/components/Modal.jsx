import React, { useState } from "react";

const Modal = ({ onClose, onSave, initialData, isRole, allRoles }) => {
  const [formData, setFormData] = useState(initialData || { name: "", email: "" });

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{initialData ? "Edit" : "Add"} {isRole ? "Role" : "User"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {!isRole && (
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        )}
        {isRole && allRoles && (
          <select
            value={formData.parentRole || ""}
            onChange={(e) => setFormData({ ...formData, parentRole: e.target.value })}
          >
            <option value="">No Parent</option>
            {allRoles.map((role) => (
              <option key={role.id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        )}
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal; 
