/**
 * desde aqui endremos el control de la ejecucion del proyecto, aqui daremos las indicaciones de 
 * como se ira ejecutado el proyecto, a que bd se conectara y porque puerto se ejecutara el proyecto
 *  
 */
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


app.get('/', (request, response)=>response.send("Bienvenidos Al Juego De Dados "));
routerApi(app);

app.listen(3000, ()=>{console.log('conectado')});

