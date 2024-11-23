import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("roles")}>Roles</button>
      <button onClick={() => setPage("permissions")}>Permissions</button>
    </div>
  );
};

export default Navbar;
