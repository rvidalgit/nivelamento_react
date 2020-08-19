import {combineReducers} from 'redux';
import {countReducer} from "../modules/Count/redux/reducer";

//combina todos os reducers da aplicação
export default () => combineReducers({
    COUNT: countReducer,
});