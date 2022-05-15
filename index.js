const express = require("express");

const cors = require("cors");
const routerApi = require('./routes');
const {connectMongoose} = require("./config/db");

/* const req = require("express/lib/request");
const res = require("express/lib/response"); */


const app = express();
connectMongoose();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');


app.use(express.urlencoded({extended:true}));


app.get('/', (request, response)=>response.send("si funciono la app"));
routerApi(app);

app.listen(3000, ()=>{console.log('conectado')});

