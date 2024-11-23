import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionEditor from "./components/PermissionEditor";
import { AppProvider } from "./context/AppContext";

function App() {
  const [page, setPage] = useState("users");

  const renderPage = () => {
    switch (page) {
      case "users":
        return <UserManagement />;
      case "roles":
        return <RoleManagement />;
      case "permissions":
        return <PermissionEditor />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <AppProvider>
      <Navbar setPage={setPage} />
      <div className="main-container">{renderPage()}</div>
    </AppProvider>
  );
}

export default App;