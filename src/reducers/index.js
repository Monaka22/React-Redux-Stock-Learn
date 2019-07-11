import { combineReducers } from "../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import registerReducer from "./register.reducer";
import loginReducer from "./login.reducer";
import appReducer from "./app.reducer";
import stockReducer from "./stock.reducer";
import stockEditReducer from "./stock.edit.reducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  appReducer,
  stockReducer,
  stockEditReducer,
});
