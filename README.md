- [Sobre la app](#comicTest)
- [Cómo usar](#cómo-usar)
- [Pruebas](#pruebas)
- [Versiones utilizadas](#versiones-utilizadas)

# ComicTest

Esta aplicación te permite ver todos los cómics brindados por la API [xkcd](https://xkcd.com).

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/7958ac16-2a2c-40a5-92d7-dbf5949704be)

¡Puedes verlos en el orden que fueron añadidos o sorprenderte con uno aleatorio!

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/f029babc-8406-46c3-86e7-7a1d62f4ce6f)

¡Puedes calificar tus cómics favoritos!

## Cómo usar

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.0.5.

Para comenzar, clona el código de este repositorio en la carpeta que desees, usando el siguiente comando en la consola:

```bash
git clone https://github.com/Sergi0tero/ComicTest.git
```

Una vez tengamos el código descargado, ingresamos a la carpeta ComicTest, abrimos nuevamente la consola e instalamos las dependencias necesarias con el comando:

`npm install`

¡Estás a punto! Solo falta correr el código. Para esto, usamos el comando:

`ng serve`

Este comando correrá el código de forma local, por lo que tendremos que ingresar la dirección http://localhost:4200/ en nuestro navegador, ¡y listo!

## Pruebas

Para correr las pruebas creadas para el proyecto usando [Karma](https://karma-runner.github.io), debemos correr el siguiente comando:

`ng test`

Con esto se nos abrirá una nueva pestaña en el navegador similar a la siguiente:

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/0ba67d32-0db7-4082-b315-5bd65de1399f)

Como podemos ver, se crearon un total de 8 pruebas unitarias, la mayoría en el servicio donde se manejan todos los datos que utilizan los distintos componentes de la aplicación.

## Versiones Utilizadas:
- Angular: 18.0.5
- TypeScript 5.4.5
- Node: 22.3.0
- Eslint: 8.57.0
- Sass: 1.77.6
