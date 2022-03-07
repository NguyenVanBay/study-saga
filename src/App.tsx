import React from "react";
import { Route, Routes } from "react-router-dom";

import { NotFound, RequireAuth } from "./components/Common";
import { AdminLayout } from "./components/Layout";
import LoginPage from "./features/Auth/pages/LoginPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <RequireAuth redirectTo="/login">
            <AdminLayout />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
