import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Table from "./Table";
import Modal from "./Modal";

const RoleManagement = () => {
  const { roles, fetchRoles, addRole, updateRole, deleteRole } = useContext(AppContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  useEffect(() => {
    fetchRoles();
  }, []);

  const handleSave = (role) => {
    currentRole ? updateRole(role) : addRole(role);
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Role Management</h1>
      <button onClick={() => setModalOpen(true)}>Add Role</button>
      <Table
        data={roles}
        onEdit={(role) => {
          setCurrentRole(role);
          setModalOpen(true);
        }}
        onDelete={deleteRole}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          initialData={currentRole}
        />
      )}
    </div>
  );
};

export default RoleManagement;
