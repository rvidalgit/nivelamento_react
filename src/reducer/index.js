import {combineReducers} from 'redux';
import {countReducer} from "../modules/Count/redux/reducer";
import {connectRouter} from "connected-react-router";

//combina todos os reducers da aplicação
//para o gerenciamento da sessão o reducer precisa estar conectado com o react router
export default (history) => combineReducers({
    COUNT: countReducer,
    router: connectRouter(history)
});