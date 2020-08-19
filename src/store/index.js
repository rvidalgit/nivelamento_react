import {applyMiddleware, compose, createStore} from 'redux';
import createRootReducer from '../reducer';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

//cria e limpa o estado inicial da aplicação
const initialState = {};
//possibita a inserção de várias extensões
const enhancers = [];

//permite que se gerencie facilmente o histórico da sessão em qualquer lugar
export const history = createBrowserHistory();

//combina os middleware disponível em um array
const middleware = [routerMiddleware(history)];

//verfica o modo de execução e adiciona o DEV_TOOLS caso seja no modo DEV
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

//Compose utilizado para poder inserir no createStore, pois ele não aceita um array
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

//cria a store da aplicação, aplica o estado inicial e carrega as extensões
export default createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers,
);