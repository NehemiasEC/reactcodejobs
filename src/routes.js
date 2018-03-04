import React from "react"
import {Route, Switch} from "react-router-dom"


import App from "./components/App"


import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Page404 from "./components/page404/Page404";


const AppRoutes = ()=>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
            <Route component={Page404}/>
        </Switch>
    </App>;


export default AppRoutes;