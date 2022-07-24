import React from "react";
import { TextareaAutosize } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textArea: {
    width: "100%",
  },
});

const CommentForm = () => {
  const styles = useStyles();
  return (
    <TextareaAutosize
      minRows={5}
      placeholder="Your comment here..."
      className={styles.textArea}
    />
  );
};

export default CommentForm;
