/**
 * aqui estaremos creando lo que es la conecion a la base de dotos 
 * creamos un clouster en mongodb Atlas
 */

const mongoose = require('mongoose')
const DB_URI = `mongodb+srv://sagenav:wonderful1177@cluster0.u3t61.mongodb.net/test`

const connectMongoose = async () => {
    try {
        await mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log("conexion a la bd exitosa")
    } catch (error) {
        console.error("error de conecion");

    }
}

module.exports = {connectMongoose}