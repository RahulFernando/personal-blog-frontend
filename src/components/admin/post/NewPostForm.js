import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import {
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
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

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

const NewPostForm = forwardRef(
  (
    {
      formik,
      preview,
      fetchedCategories,
      editor,
      onChange,
      onSelectImg,
      onImageChange,
    },
    ref
  ) => {
    const theme = useTheme();

    console.log(ref)

    return (
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
                onClick={onSelectImg}
              >
                Select Image
              </Button>
              <input
                type="file"
                hidden
                ref={ref}
                onChange={onImageChange}
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
              onChange={onChange}
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
    );
  }
);

NewPostForm.propTypes = {
  formik: PropTypes.object.isRequired,
  preview: PropTypes.string.isRequired,
  fetchedCategories: PropTypes.array,
  editor: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectImg: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  imageRef: PropTypes.any.isRequired,
};

NewPostForm.defaultProps = {
  fetchedCategories: [],
};

export default NewPostForm;
