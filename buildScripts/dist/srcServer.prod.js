"use strict";var express=require("express"),path=require("path"),open=require("open"),webpack=require("webpack"),config=require("../webpack.config.dev"),port=3e3,app=express(),compiler=webpack(config);app.use(require("webpack-dev-middleware")(compiler,{noInfo:!0,publicPath:config.output.publicPath})),app.get("/",function(e,p){p.sendFile(path.join(__dirname,"../src/index.html"))}),app.listen(port,function(e){e?console.log(e):open("http://localhost:"+port)});