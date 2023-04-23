import { createStore, applyMiddleware, compose } from "redux";
import { useSelector } from "react-redux";

const initialState = {
  modalLogout: false,
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const composeEnhancers = compose;
const store = createStore(changeState, composeEnhancers(applyMiddleware()));

export default store;

export const useTypedSelector = useSelector;
