import express from "express";
import webpack from "webpack";
import path from "path";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import open from "open";
import exphbs  from "express-handlebars";

//webpack Configuration



// helpers

import * as hbsHelper from "../lib/handlebars";

//utils

import {isMobile} from "../lib/utils/device";

import webpackConfig from "../../webpack.config.babel";


//API
import blogApi from "./api/blog"


//server port

const port =3030;


//enviromennt

const isDevelopment = process.env.NODE_ENV!=="production";
//express app

const app = express();

//public

app.use(express.static(path.join(__dirname,'../public')));

//handlebars setup
app.engine('.hbs',exphbs({
    extname:'.hbs',
    helpers:hbsHelper
}));


//view engine

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','.hbs');


//webpack compiler

const webpackCompiler = webpack(webpackConfig);

//webpack Middleware

if (isDevelopment){

    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
}
//Device detector

app.use((req, res, next)=>{
    console.log(req.headers['user-agent']);
    res.locals.isMobile=isMobile(req.headers['user-agent']);
    return next();
});


// API Dispatches
app.use("/api/blog",blogApi);


//sending all traffic to react

app.get('*',(req, res)=>{
    res.render('frontend/index',{
        layout:false
    })
});


app.listen(port,err=>{
    if(!err){

        open(`http://localhost:${port}`);
    }
});
