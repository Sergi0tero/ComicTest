- [Sobre la app](#comicTest)
- [Como usar](#como-usar)
- [Pruebas](#pruebas)
- [Versiones](#versiones-utilizadas)

# ComicTest

Esta aplicacion te permite ver todos los comics brindados por la api [xkcd](https://xkcd.com)

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/7958ac16-2a2c-40a5-92d7-dbf5949704be)

Puedes ver los en el orden que fueron añadidos ¡O sorprenderte con uno aleatorio!.

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/f029babc-8406-46c3-86e7-7a1d62f4ce6f)

Puedes calificar Tus comics favoritos!

## Como Usar
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

Para comenzar, se debe clonar el codigo de este repositorio en la carpeta que deseemos, usando siguiente comando en la consola 

`git clone https://github.com/Sergi0tero/ComicTest.git`

Una vez tenemos en codigo descargado, ingresamos a la carpeta ComicTest, abrimos nuevamente la consola e instalamos las dependencias necesarias con el comando

`npm install`

Estas a punto! solo falta correr el codigo, para esto tenemos que usar el comando

`ng serve`

Este comando correra el codigo de forma local, de forma que tendremos que ingresar la direccion `http://localhost:4200/` en nuestro navegador y listo!

## Pruebas

Para correr las pruebas creadas para el proyecto usando [Karma](https://karma-runner.github.io) debemos correr el siguiente comando

`ng test`

Con esto se nos abrira una nueva pestaña en el navegador como la siguiente:

![image](https://github.com/Sergi0tero/ComicTest/assets/98189066/0ba67d32-0db7-4082-b315-5bd65de1399f)

Como podemos ver, se crearon un total de 8 pruebas unitarias, la gran mayoria en el servicio en el cual se manejan todos los datos que utilizan los distintos componentes de la aplicacion

## Versiones Utilizadas:
- Angular: 18.0.5
- TypeScript 5.4.5
- Node: 22.3.0
- Eslint: 8.57.0
- Sass: 1.77.6
