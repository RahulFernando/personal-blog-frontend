import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditorState } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import { convertToHTML } from "draft-convert";

// components
import PostForm from "../../components/admin/post/PostForm";

// aactions
import { fetchPostById } from "../../reducers/postSlice";
import { fetchCategories } from "../../reducers/categorySlice";

// styles
import "./NewPost.css";

let sampleImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jzPq0x6yrw41vG5FbeD82rSGuMs6ShcSoQ&usqp=CAU";

const UpdatePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const imageRef = useRef();

  const [editor, setEditor] = useState(EditorState.createEmpty());
  const [image, setImage] = useState(null);

  const post = useSelector((state) => state.posts.fetchPostByIdData.data);
  const fetchedCategories = useSelector(
    (state) => state.category.fetchCategoryData.data
  );

  const onChangeHandler = (state) => setEditor(state);

  const onSelectImgHandler = () => imageRef.current.click();

  const onImageChangeHandler = (event) => setImage(event.target.files[0]);

  const formik = useFormik({
    initialValues: {
      title: post ? post.title : '',
      categories: post ? post.categories : [],
    },
    enableReinitialize: true,
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

      //   dispatch(addPost(formData));
    },
  });

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(fetchCategories());
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setEditor(EditorState.createWithContent(stateFromHTML(post.content)));
      sampleImage = `${process.env.REACT_APP_API}/v1/api/images/${post.image}`;
    }
  }, [post]);

  const preview = image ? URL.createObjectURL(image) : sampleImage;

  return (
    <Box sx={{ marginTop: 8, height: "100vh" }}>
      <PostForm
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

export default UpdatePost;
