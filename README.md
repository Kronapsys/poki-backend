# POKI (API)

Esta API restful contiene todo el CRUD para la app POKI.

# Para poder empezar :
La API estará deployada en Heroku, si aún así prefieres descargarla y usarla por tu cuenta: </br>

1. Instalar las dependencias citadas mas abajo.
2. Arranca el servidor con el comando: npm run start:dev

# Organización de la faena :

He utilizado diferentes herramientas para organizarme: </br>

Utilicé MIRO para el diseño de la BBDD, pensar en los diagramas de flujo que podía tener mi APP, pensar en los colores que iba a utilizar, etc... ejemplos: </br>

![diagrama_padres](https://i.imgur.com/B5PKkxg.png) </br>
![diagrama_profesores_1](https://i.imgur.com/12u9ECI.png) </br>
![diagrama_profesores_2](https://i.imgur.com/vMTi2cS.png) </br>

Por otro lado, utilicé Trello para organizarme las diferentes faenas que tenía que desarrollar en el backend

![trello](https://i.imgur.com/Ef7V6QM.jpg) </br>


# Diseño BBDD :

La BBDD está hecha con mongoDB y trabajo con mongoose con ella, estas son las colecciones que al final usé en mi API:

![db_model_1](https://i.imgur.com/aFnLk6c.png) </br>
![db_model_1](https://i.imgur.com/qb0W5nI.png) </br>

# CRUD con POSTMAN :
Aquí puedes ver todos los métodos implementados: </br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14551941-5817bd2b-cefa-464b-a27d-8e87cf0b7785?action=collection%2Ffork&collection-url=entityId%3D14551941-5817bd2b-cefa-464b-a27d-8e87cf0b7785%26entityType%3Dcollection)

# Tecnologías usadas :
![JS](https://i.imgur.com/lDoNwKn.png)
![nodejs](https://i.imgur.com/JsJ02dB.png)
![mongoDB](https://i.imgur.com/FKM0Ojo.png)
![mongoose](https://i.imgur.com/pIbZINY.png)
![postman](https://i.imgur.com/cXur21z.png)

# Dependencias usadas :
- bcrypt </br>
- cors </br>
- express </br>
- jsonwebtoken </br>
- moment </br>
- mongoose </br>
- morgan  </br>
- nodemailer </br>