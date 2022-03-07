import React from "react";
import { Typography, AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const useStyles = makeStyles({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    border: "2px solid black",
  },
  images : {
    marginLeft : "15px",
  },
  wrapper : {
      display : "flex",
      flexDirection: "column",
      alignItems: 'center',
      width: "100%"

  }
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h3" align="center">
          Vidéo Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
