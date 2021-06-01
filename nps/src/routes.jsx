import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import PagForm from './Pages/PagForm';
import PagAnalitic from './Pages/PagAnalitic'


const routes = [ 
{
    path: '/PagForm',
    component: PagForm,
    name: "Questionário NPS",
}, 
{
    path: '/PagAnalitic',
    component: PagAnalitic,
    name: 'Analítico da resposta do NPS',
}];


const Routes = () => (
    <BrowserRouter>
        <Header title="NPS" routes={routes}/>
        <Switch>
            {routes.map(({ component, path }) => (
                <Route
                exact
                key={path} 
                path={path} 
                component={component} />
            ))}           
        </Switch>
    </BrowserRouter>
);

export default Routes;