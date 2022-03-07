import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../../features/Auth/authSlice";

export interface AdminLayoutProps {}

export function AdminLayout(props: AdminLayoutProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("clik");

    dispatch(
      authActions.logout({
        navigate: navigate,
      })
    );
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
