import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";

// components
import NewPostForm from "../../components/admin/post/NewPostForm";

// actions
import { addPost, addPostReset } from "../../reducers/postSlice";
import { fetchCategories } from "../../reducers/categorySlice";

// styles
import "./NewPost.css";

const sampleImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jzPq0x6yrw41vG5FbeD82rSGuMs6ShcSoQ&usqp=CAU";

const NewPost = () => {
  const dispatch = useDispatch();
  const imageRef = useRef();

  const [editor, setEditor] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);

  const fetchedCategories = useSelector(
    (state) => state.category.fetchCategoryData.data
  );
  const postAddSuccess = useSelector(
    (state) => state.posts.addPostData.data
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
  
  useEffect(() => {
    if (postAddSuccess) {
      formik.resetForm();
      dispatch(addPostReset());
    }
  }, [dispatch, formik, postAddSuccess]);

  const preview = image ? URL.createObjectURL(image) : sampleImage;

  return (
    <Box sx={{ marginTop: 8, height: "100vh" }}>
      <NewPostForm
        formik={formik}
        preview={preview}
        fetchedCategories={fetchedCategories}
        editor={editor}
        onChange={onChangeHandler}
        onSelectImg={onSelectImgHandler}
        onImageChange={onImageChangeHandler}
        ref={imageRef}
      />
    </Box>
  );
};

export default NewPost;
