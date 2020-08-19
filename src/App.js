import React from 'react';
import {Rotas} from "./router/rotas";
import {ConnectedRouter} from 'connected-react-router';
import {history} from "./store";

function App() {
    /*return (
        <div>
            <header>
                <h1>Primeiro código!!</h1>
            </header>

            <main>
                <Count/>
            </main>
        </div>
    );*/

    return (
        <ConnectedRouter history={history}>
            <Rotas/>
        </ConnectedRouter>
    );
}

export default App;
