import {combineReducers} from 'redux';
import {countReducer} from "../modules/Count/redux/reducer";
import {connectRouter} from "connected-react-router";

//combina todos os reducers da aplicação
export default (history) => combineReducers({
    COUNT: countReducer,
    router: connectRouter(history)
});