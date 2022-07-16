import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { DraftailEditor } from "draftail";
import { EditorState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";

// styles
import "./NewPost.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const NewPost = () => {
  const [editor, setEditor] = useState(EditorState.createEmpty());

  const onChangeHandler = (state) => setEditor(state);

  return (
    <Box sx={{ marginTop: 8, height: "100vh" }}>
      <Grid container spacing={2} mt={2}>
        <Grid
          item
          container
          style={{textAlign: "center"}}
        >
          <Grid item xs={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jzPq0x6yrw41vG5FbeD82rSGuMs6ShcSoQ&usqp=CAU"
              alt="img"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" sx={{ textTransform: "none" }}>
              Select Image
            </Button>
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
      </Grid>
    </Box>
  );
};

export default NewPost;
