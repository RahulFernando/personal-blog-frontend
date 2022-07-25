import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextareaAutosize,
  FormHelperText,
  Grid,
  Button,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// actions
import { addComment } from "../../reducers/commentSlice";
import { resetAlert } from "../../reducers/uiSlice";

const useStyles = makeStyles({
  textArea: {
    width: "100%",
  },
});

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { success, message } = useSelector((state) => state.ui.alertData);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: Yup.object().shape({
      content: Yup.string().required("Comment is required"),
    }),
    onSubmit: (values) => dispatch(addComment({ id, ...values })),
  });

  useEffect(() => {
    if (message) {
        dispatch(resetAlert());
        formik.resetForm();
    }
  }, [dispatch, formik, message]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {message && (
          <Grid item xs={12}>
            <Alert severity={success ? "success" : "error"}>{message}</Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextareaAutosize
            name="content"
            minRows={5}
            placeholder="Your comment here..."
            className={styles.textArea}
            value={formik.values.content}
            onChange={formik.handleChange}
          />
          <FormHelperText
            error={formik.errors.content && formik.touched.content}
          >
            {formik.errors.content}
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
