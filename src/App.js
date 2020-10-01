import React from 'react';
import {Rotas} from "./router/rotas";
import {ConnectedRouter} from 'connected-react-router';
import {history} from "./store";
import {CssBaseline, MuiThemeProvider} from '@material-ui/core';
import theme from './theme';

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <ConnectedRouter history={history}>
                <Rotas/>
            </ConnectedRouter>
        </MuiThemeProvider>
    );
}

export default App;
