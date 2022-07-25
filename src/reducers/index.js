import categorySlice from "./categorySlice";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";
import postSlice from "./postSlice";
import commentSlice from "./commentSlice";

const rootReducer = {
  authentication: authSlice,
  category: categorySlice,
  ui: uiSlice,
  posts: postSlice,
  comments: commentSlice,
};

export default rootReducer;
