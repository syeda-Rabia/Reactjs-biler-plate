import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./style.module.scss";
const LoadingScreen = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderinner}>
        <Box sx={{ display: "flex" }}>
          <CircularProgress color={styles.color} size={60} />
        </Box>
      </div>
    </div>
  );
};

export default LoadingScreen;
