# LogisticBack

LogisticBack es la aplicación de backend tipo api rest que permite el
almacenamiento y consulta de los datos de la aplicación LogisticApp.

## Como ejecutar

Para hacer mas facil la ejecución de este programa se creó un archivo
docke-compose que esta configurado para construir la arquitectura necesaria para
que la aplicación corra sin inconvenientes.

Sin embargo es necesario realizar unos breves pasos para su uso, ya que es una
aplicación de prueba.

### Requerimientos para ejecutar

- Debes tener Docker y Docker Compose instalado localmente.
- Debes tener las siguiente imagenes de docker:
  - node:18.16.0-buster-slim (Motor/Interprete de JavaScript)
  - mongo-express:latest (Motor de Base de Datos MongoDB)
  - mongo:latest (Interface Grafica de MongoDB)
- Acceso a interner

### Primero

Ejecute el comando

```
yarn dev
```

El comando anterior debería descargar las imagenes en caso de que no las tenga
instaladas, pero preferiblemente asegurese de que se encuentran disponibles en
su entorno de docker.

### Segundo

Luego ingrese a http://localhost:8888, el servicio de la base de datos debe
estar en ejecución, de no ser así, verifique el paso anterior, en caso de que
pueda ingresar identifiquese con las siguientes credenciales:

- user: root
- password: root

### Tercero

Una vez ingrese los datos será redireccionado a una interfaz grafica de mongodb,
en ella debe crear una base de datos llamada "logisticapp" y dentro de ella una
collección llamada "shipments" y otra llamada "users".

Una vez hecho esto ya podrá hacer uso de la aplicación de forma optima.

## Desarrollo

Por ahora la imagen joshdev15/logisticapp:latest no se encuentra almacenada en
Docker Hub, por esa razon, preferiblemente, siga los pasos anteriores.

El servicio API corre en http://localhost:9876

Para los endpoints funcionales debe usar la ruta /api: http://localhost/9876/api

!Saludos ✌🏼!
