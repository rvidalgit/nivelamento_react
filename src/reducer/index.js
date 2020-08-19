import {combineReducers} from 'redux';
import {countReducer} from "../modules/count/redux/reducer";

//combina todos os reducers da aplicação
export default () => combineReducers({
    COUNT: countReducer,
});