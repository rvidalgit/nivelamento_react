import React from 'react';
import {Route, Switch} from "react-router";
import Count from '../modules/Count/view/index';

const Teste = () =>{
    return (
        <h1>Ops, não tem nada aqui!</h1>
    );
};

export const Rotas = () => (
    <Switch>
        <Route exact path="/" name="Count" component={Count}/>
        <Route exact path="/teste" name="Teste" component={Teste}/>
    </Switch>
);