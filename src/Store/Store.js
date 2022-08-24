import { Provider } from "react-redux";
import { createStore } from "redux";
import { RootReducer } from "./CombineReducers";


const store = createStore(RootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const AppStore = ({children}) => {
    return(
        <Provider store={store}>{children}</Provider>
    )
}

export default AppStore