import categorySlice from "./categorySlice";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";

const rootReducer = {
  authentication: authSlice,
  category: categorySlice,
  ui: uiSlice,
};

export default rootReducer;
