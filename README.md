# LogisticBack

LogisticBack es la aplicación de backend tipo api rest que
permite el almacenamiento y consulta de los datos de la
aplicación LogisticApp.

## Como ejecutar

Para hacer mas facil la ejecución de este programa
se creó un archivo docke-compose que esta configurado
para construir la arquitectura necesaria para que la
aplicación corra sin inconvenientes.

Sin embargo es necesario realizar unos breves pasos para
su uso, ya que es una aplicación de prueba.

### Primero

Ejecute el comando

```
docker-compose up
```

### Segundo

Luego ingrese a http://localhost:8888 e ingrese con las siguientes
credenciales:

- user: root
- password: root

### Tercero

Una vez ingrese los datos será redireccionado a una interfaz grafica
de mongodb, en ella debe crear una base de datos llamada "logisticapp"
y dentro de ella una collección llamada "shipments" y otra llamada "users".

Una vez hecho esto ya podrá hacer uso de la aplicación de forma optima.
