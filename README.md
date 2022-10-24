![calentamiento-global](https://user-images.githubusercontent.com/81165701/197537074-19da1f0d-4a3c-4089-85d1-633b60c5e55b.png)

# Climate App

## Objetivos del Proyecto

- Construir una App utlizando React, utilizando `react-router`
- Aprender mejores prácticas.
- Practicar mas css y html.
- Implementar normalice y framer-motion.
- Trabajar con peticiones a una API externa


## Instalar dependencias

Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Para instalarlas necesitamos hacer npm i o npm install en la terminal bash, hay que asegurarse de estar parado sobre el archivo.

Las versiónes necesarias que debemos tener son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

## BoilerPlate

El boilerplate cuenta con varias carpetas: `img-screen`, `public` y `src`. A la altura de estas mismas carpetas se debe crear un archivo llamado: `.env` que tenga la siguiente informacion:

```env
REACT_APP_MYAPIKEY= apikey
```
Esta `apikey` deberan obtenerla creandose una cuenta en la pagina de https://openweathermap.org/api, sin necesidad de comprar ningun plan, es totalmente grtuita y proporciona la informacion necesaria para esta App.
Se recuerda que el archivo .env es ignorado cuando se suba a gitHub

## Levantar la aplicacion de manera local
Si se quiere levantar localmente la aplicacion, puede hacerlo ejecutando el comando npm start en la terminal bash, siempre y cuando se encuentre ubicado en el mismo archivo genelar ./

### Enrutado de nuestra aplicacion.
Tenemos tres rutas en las que podremos navegar:
 - **"/"**: El home, acá vamos a ver las cartas con informacion de la temperatura minima y maxima de la/s ciudad/es buscada/s.
 - **"/extended-Forecast/:cityId/"**: en esta ruta, vamos a tener el pronostico extendido a 5 dias de una ciudad en particular, notese que usamos el ID de una ciudad para identificarla y no el nombre.
 - **"/about"**: Explicacion un poco de que va la `ClimateApp`.
 - **"/city/Additional-Information"**: en esta ruta, vamos a tener informacion un poco mas detallada sobre las ciudades buscadas en el home.

------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Objectives

- Build an App using React, using `react-router`
- Learn best practices.
- Practice more css and html.
- Implement normalize and framer-motion.
- Work with requests to an external API


## Install dependencies

It is necessary to have at least the latest stable version of Node and NPM. Make sure you have it to be able to correctly install the necessary dependencies to run the project. To install them we need to do npm i or npm install in the bash terminal, make sure you're standing on the file.

The necessary versions that we must have are:

- __Node__: 12.18.3 or higher
- __NPM__: 6.14.16 or mayor

## BoilerPlate

The boilerplate has several folders: `img-screen`, `public` and `src`. At the height of these same folders, a file called: `.env` must be created that has the following information:

```send
REACT_APP_MYAPIKEY= access key
```
This `apikey` must be obtained by creating an account on the https://openweathermap.org/api page, without the need to buy any plan, it is totally free and provides the necessary information for this App.
Remember that the .env file is ignored when uploading to gitHub

## Launch the application locally
If you want to start the application locally, you can do so by issuing the npm start command in the bash terminal, as long as it is located in the same general ./ file.

### Routing of our application.
We have three routes in which we can navigate:
 - **"/"**: The home, here we are going to see the charts with information on the minimum and maximum temperature of the city(ies) searched.
 - **"/extended-Forecast/:cityId/"**: in this route, we are going to have the 5-day extended forecast of a particular city, note that we use the ID of a city to identify it and not the name.
 - **"/about"**: A little explanation of what the `ClimateApp` is about.
 - **"/city/Additional-Information"**: in this route, we are going to have a little more detailed information about the cities searched in the home.



