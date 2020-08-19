import {compose, createStore} from 'redux';
import createRootReducer from '../reducer';

//cria e limpa o estado inicial da aplicação
const initialState = {};
//possibita a inserção de várias extensões
const enhancers = [];

//verfica o modo de execução e adiciona o DEV_TOOLS caso seja no modo DEV
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

//Compose utilizado para poder inserir no createStore, pois ele não aceita um array
const composedEnhancers = compose(
    ...enhancers,
);

//cria a store da aplicação, aplica o estado inicial e carrega as extensões
export default createStore(
    createRootReducer(),
    initialState,
    composedEnhancers,
);