import React from 'react';
import {Route, Switch} from "react-router";
import Count from '../modules/Count/view/index';
import Login from "../modules/Login/view/Login";

const Teste = () => {
    return (
        <h1>Ops, não tem nada aqui!</h1>
    );
};

//cria um filtro que intercepta a "mudança" de página, como a aplicação é um SPA, o react router intercepta
// o path e direciona para o componente correto
export const Rotas = () => (
    <Switch>
        <Route exact path="/" name="Login" component={Login}/>
        <Route exact path="/count" name="Count" component={Count}/>
        <Route exact path="/teste" name="Teste" component={Teste}/>
    </Switch>
);