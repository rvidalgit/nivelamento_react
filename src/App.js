import React from 'react';
import {Rotas} from "./router/rotas";
import {ConnectedRouter} from 'connected-react-router';
import {history} from "./store";

function App() {
    return (
        <ConnectedRouter history={history}>
            <Rotas/>
        </ConnectedRouter>
    );
}

export default App;
