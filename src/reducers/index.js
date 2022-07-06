import categorySlice from "./categorySlice";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";
import postSlice from "./postSlice";

const rootReducer = {
  authentication: authSlice,
  category: categorySlice,
  ui: uiSlice,
  posts: postSlice,
};

export default rootReducer;
