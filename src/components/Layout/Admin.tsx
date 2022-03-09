import { Button } from "@mui/material";
import * as React from "react";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../../features/Auth/authSlice";

export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      <Button variant="contained" disableElevation onClick={handleLogout}>
        Logout
      </Button>
      Admin layout
    </div>
  );
}
