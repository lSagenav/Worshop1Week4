# Worshop1Week4 with Nodejs-Express-MongodbAtlas

## Caracteristicas 
> nodeJs  v16.14.2
> express v4.16.1
> cors v2.8.5
> express v4.18.1
> mongoose v6.3.3
> pug v3.0.2
> uuid v8.3.2

## Ejecucion del proyecto
> desarrollado con el IDE Intellij IDEA
> para ejecutar el proyecto usaremos el siguiente comando: npm run dev
> el proyecto se estara ejecutando por el puerto 3000 en la siguiente urel http://localhost:3000

## Descrpcion 
 
Cuando se ejecuta el proyecto, lo podremos observar atreves de la url indicada anteriormente, donde nos saldrá un breve mensaje de bienvenida.
Posterior a eso deberás escribir las rutas de manera manual para poder visualizar los Json con la respuesta respectivas a la petición que se haya realizado anteriormente.
Las rutas a las cuales podrás acceder son las siguientes:
http://localhost:3000/ -------->pagina inicial donde saldrá un breve mensaje de bienvenida 
http://localhost:3000/createGame -------> pagina inicial donde daremos los datos de los 3 jugadores de la partida 
http://localhost:3000/startGame ------> ruta donde daremos inicio al juego creado, donde daremos el id del juego creado y de la apuesta de cada jugador
http://localhost:3000/game/ + el id del juego creado /winner ----> ruta donde podremos ver el ganador del juego

## Antes de ejecutar el proyecto usaremos los siguientes comandos en la terminal del IDE de preferiencia 

> npm install
> npm pug

## DataBase
> usamos mongodb atlas y creamos un clouster
> tambien de manera local nos conectamos atravez de mongodbCompas a mongodbAtlas con esta direccion: mongodb+srv://sagenav:wonderful1177@cluster0.u3t61.mongodb.net/test
en la confuguracion de la base de datos en mongodbAtlas en las confuguraciones de acceso deje la conexion desde la ip 0.0.0.0/0 para que se pueda acceder desde cualquier ip. la he dejado asi por cuestiones del taller. por lo general alli solo se ponen las ips de los equipos que esten trabajando en el  proyecto y que nadie mas pueda acceder a la base de datos por cuestiones de seguridad.






