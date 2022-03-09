import * as React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../../app/hooks";
import { authActions } from "../authSlice";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px",
  },

  box: {
    padding: "50px",
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: "bay",
        password: "1234567",
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="subtitle2" gutterBottom component="h2">
          Student manager
        </Typography>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Button variant="contained" disableElevation onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
