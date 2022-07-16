import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { DraftailEditor } from "draftail";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import { convertToHTML } from "draft-convert";

// actions
import { addPost } from "../../reducers/postSlice";
import { fetchCategories } from "../../reducers/categorySlice";

// styles
import "./NewPost.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const sampleImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jzPq0x6yrw41vG5FbeD82rSGuMs6ShcSoQ&usqp=CAU";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const NewPost = () => {
  const dispatch = useDispatch();
  const imageRef = useRef();
  const theme = useTheme();

  const [editor, setEditor] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);

  const fetchedCategories = useSelector(
    (state) => state.category.fetchCategoryData.data
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      categories: [],
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      categories: Yup.array().required("Category is required"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("image", image);
      formData.append("content", convertToHTML(editor.getCurrentContent()));
      formData.append("categories", values.categories);

      dispatch(addPost(formData));
    },
  });

  const onChangeHandler = (state) => setEditor(state);

  const onSelectImgHandler = () => imageRef.current.click();

  const onImageChangeHandler = (event) => setImage(event.target.files[0]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const preview = image ? URL.createObjectURL(image) : sampleImage;

  return (
    <Box sx={{ marginTop: 8, height: "100vh" }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} mt={2}>
          <Grid item container spacing={2} style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <img src={preview} alt="img" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                variant="outlined"
                sx={{ textTransform: "none" }}
                onClick={onSelectImgHandler}
              >
                Select Image
              </Button>
              <input
                type="file"
                hidden
                ref={imageRef}
                onChange={onImageChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title"
                name="title"
                value={formik.values.title}
                error={formik.errors.title && formik.touched.title}
                helperText={
                  formik.errors.title &&
                  formik.touched.title &&
                  formik.errors.title
                }
                sx={{ width: "60%" }}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ width: "60%" }}>
                <InputLabel>Categories</InputLabel>
                <Select
                  multiple
                  name="categories"
                  value={formik.values.categories}
                  input={<OutlinedInput label="Category" />}
                  MenuProps={MenuProps}
                  onChange={formik.handleChange}
                >
                  {fetchedCategories.map((category) => (
                    <MenuItem
                      key={category._id}
                      value={category._id}
                      style={getStyles(
                        category._id,
                        formik.values.categories,
                        theme
                      )}
                    >
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DraftailEditor
              editorState={editor}
              onChange={onChangeHandler}
              placeholder="Tell your story..."
              plugins={plugins}
            />
            <InlineToolbar />
            <SideToolbar />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ textTransform: "none" }}
            >
              Publish
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default NewPost;
