
# REACT - CURSOS, CONVENCION (ACUERDOS), EJERCICIOS Y PROYECTOS

<br>

## Tabla de contenido

- [REQUISITOS](#requisitos)
  - [1. Instalacion de NodeJS](#1.-Instalacion-de-NodeJS)
  - [2. Instalacion de NPM, YARN o NPX](#2.-instalacion-de-npm,-yarn-o-npx)
  - [3. Instalacion de Create React](#3.-Instalacion-de-Create-React-App)

- [CONVENSIONES & ACUERDOS - NC](#CONVENSIONES-&-ACUERDOS---NC)
    - [1. CREACIÓN DE PROYECYOS](#1.-CREACIÓN-DE-PROYECYOS)
    - [2. CARPETA ASSETS](#2.-CARPETA-ASSETS)
    - [3. CARPETA IMG](#3.-CARPETA-IMG)
    - [4. CARPETA STYLES](#4.-CARPETA-SRYLES)
    - [5. CARPETA COMPONENTS](#5.-CARPETA-COMPONENTS)
    - [6. CARPETA DATA](#6.-CARPETA-DATA)
    - [7. CARPETA LANGUAGE](#7.-CARPETA-LANGUAGE)
    - [8. CARPETA ROUTES](#8.-CARPETA-ROUTES)
    - [9. CARPETA TESTS](#9.-CARPETA-TESTS)
    - [10. CARPETA VIEWS](#10.-CARPETA-VIEWS)
    - [11. CARPETA UTILS](#11.-CARPETA-UTILS)
    - [12. CARPETA MUTATIONS](#12.-CARPETA-MUTATIONS)
    - [13. CARPETA QUERYS](#13.-CARPETA-QUERYS)

<br><br>

## REQUISITOS

### 1. Instalacion de NodeJS

    * Desde Linux

        Pagina web: https://nodejs.org
        <br>
        Instalacion: https://nodejs.org/es/download/package-manager/

    * Desde Windows

        Pagina web: https://nodejs.org
        <br>
        Instalacion: https://nodejs.org/es/download/

    * Desde Mac

        Pagina web: https://nodejs.org
        <br>
        Instalacion: https://nodejs.org/es/download/


<br>

### 2. Instalacion de NPM, YARN o NPX

    * NPX (Recomendado)

        Pagina web : https://www.npmjs.com/
        <br>
        Instalacion : https://yarnpkg.com/getting-started/install

    * NPM

        Pagina web : https://www.npmjs.com/
        <br>
        Instalacion : https://yarnpkg.com/getting-started/install

    * YARN

        Pagina web : https://yarnpkg.com/
        <br>
        Instalacion : https://yarnpkg.com/getting-started/install


<br>

### 3. Instalacion de Create React App

    * Instalacion desde cualquier consola del SO

    npm install -g create-react-app

    npm create-react-app my-app
    cd my-app
    npm start

    NOTA IMPORTANTE: Es recomendable usar NPX ( No necesita instalacion previa y siempre busca y descarga la ultima version )

    npx create-react-app my-app
    cd my-app
    npm start

<br> <br>


* =======================================================================================================================================

## CONVENSIONES & ACUERDOS - NC

### 1. CREACIÓN DE PROYECYOS
       * La creación de proyectos se hara con el paquete o comando create-react-app, Y se usara NPX en lugar de NPM. 

            Ejemplo de carpeta:

        npx create-react-app myapp

### 2. CARPETA ASSETS

        * ASSETS: carpeta donde se guardara las imagenes y estilos, Su nombre debe estar escrito totalmente en minuscula.

            Ejemplo de carpeta: assets 

### 3. CARPETA IMG

        * IMG : Carpeta donde se almacenarán las imagenes, Su nombre debe de estar escrito totalmente en minuscula.
            Debe de estar dentro de assets.

            Ejemplo de carpeta: img

### 4.  CARPETA STYLES

         * STYLES: Carpeta donde se alamcenarán los estilos, Su nombre debe de estar escrito totalmente en minuscula.
            Debe de estar dentro de assets, Y sus estilos se haran en JavaScript.

            Ejemplo de carpeta: styles


        * NOTAS IMPOTANTES:

            No se usara la carpeta CSS ni archivos con extension .css, En su lugar se haran los estilos en JavaScript con extension .js

            No usar la extensión .jss, En su lugar hacerlo con .js

### 5. CARPETA COMPONENTS

    * COMPONENTS: Carpeta donde se almacenara los componentes creados por NC, Su nombre debe de estar escrito totalmente en minuscula.
        Deben estar hechos en extension .js

            Ejemplo de carpeta : components


### 6. CARPETA DATA

    * CARPETA DATA:  La carpeta data es donde se almacenara todos los datos del proyecto
        (Datos que se usaran en DropDowList,
        Tablas alternas y algunos componentes) Su nombre debe de estar escrito totalmente en minuscula.
        Nota Aclaratoria: Estos datos no son los de la base de datos del proyecto (Datos alternos para la base de datos principal).

            Ejemplo: data
            Ejemplo: paise, Tipos de Documentación, etc.


### 7. CARPETA LANGUAGE

    *CARPETA LANGUAGE: La  carpeta language se usa para almacenar los lenguajes del proyecto en caso de que el proyecto se vaya a desarrollar
        en varios idiomas.
        Si el proyecto solo va a tener un lenguaje no sera necesario crearla. Su nombre debe de estar escrito totalmente en minuscula.

        Ejemplo de la carpet: language 

### 8. CARPETA ROUTES

    * CARPETA ROUTES: La carpeta routes alamacenara todas las rutas del proyecto,
        Su nombre debe de estar escrito totalmente en minuscula.

        Ejemplo de carpeta: routes 

### 9. CARPETA TESTS

    * CARPETA TEST: La carpeta tests es donde se almacenaran todos los scripts para hacer los 
        testeos al proyecto, Su nombre debe de estar escrito totalmente en minuscula.
        Deben estar hechos con extension .tests.js  nombre.tests.js

        Ejemplo de carpeta: tests

###  10. CARPETA VIEWS

    * CARPETA VIEWS: La carpeta views es donde se almacenaran todos los archivos o objetos 
        visuales, Su nombre debe de estar escrito totalmente en minuscula.
            Si el proyecto es muy grande se pueden crear  subcarpetas para una mejor organización.

            Nota Importante: En modo de desarrollo (Cuando se esta haciendo) pueden estar en .jsx si se prefiere, Una vez finalizado deben cambiarse a .js 

            Ejemplo de carpeta: views 

### 11. CARPETA UTILS

    * CARPETA UTILS: La carpeta utils es donde se almacenara todas las utilidades del componente
         visual como archivos logicos, 
        procesos y archivos que complementen el desarrollo del objeto visual, Su nombre debe de estar escrito totalmente en minuscula.
        Debe de estar dentro de views y si se crearon subcarpetas, dentro de estas

        Ejemplo de carpeta: utils


### 12. CARPETA MUTATIONS 

    * CARPETA MUTATIONS: La carpeta mutations es donde se almacenaran todas las mutaciones en caso de que el proyecto este enlazando  con base de datos y use GraphQl y/o Apollo. Su nombre debe de estar escrito totalmente en minuscula. Va dentro de views o la subcarpeta del objeto.

        Ejemplo de carpeta: mutations


### 13. CARPETA QUERYS

    * CARPETA QUERYS: La carpeta querys se usa para almacenar las consultas en caso de que el proyecto este enlazando  con base de datos y use GraphQl y/o Apollo. Su nombre debe de estar escrito totalmente en minuscula. Va dentro de views o la subcarpeta del objeto.

        Ejemplo de carpeta: querys










<br> <br>

* =======================================================================================================================================


## REACT
<br><br>

### React es Declarativa

Programación Declarativa vs Programación Imperativa

* Diferencias
En los programas imperativos un porcentaje muy alto del código está dedicado a controlar la secuencia de ejecución. En un lenguaje declarativo no existen dichas instrucciones.
Los lenguajes declarativos ofrecen menores costos de desarrollo y mayor ﬁabilidad debido al menor número de líneas que son requeridas, lo que conlleva a un menor número de errores

* Programación Declarativa Programación Imperativa
La programación declarativa describe el problema que se quiere solucionar, pero no las instrucciones necesarias para hacerlo, mientras que en la programación imperativa se detallan las instrucciones necesarias para llegar a la solución.
Los programas declarativos incluyen menos detalles que sus contrapartidas imperativas.

Ejemplo

* Imperativo
    1. Ve a la cocina
    2. Abre la nevera
    3. Coge el pollo
    4. Prepara el pollo
    5. Sirve el pollo

* Declarativa

    1. Quiero pollo

<br><br>

### React esta basada en componentes


* Divide la interfaz en trozos mas pequeños y reusables.

* Puedes crear nuevos componentes usando componentes mas pequeños.

* Cada componente encapsula su estado.

* Codigo mas reusable, Pequeño y mantenible.

<br><br>

### Programacion reactiva

* Cada componente "Reacciona" y se vueleve a renderizar cuando se produze un cambio de estado o le llegan nuevas propiedades

<br><br>


### Usa el Virtual DOM y Diffing

* Genera una copia del arbol de elementos del navegador para solo hacer los minimos cambios necesarios para reflejar el estado de nuestro componentes.
<br>

<img src="src/assets/img/virtual-dom.png" width="500px">

<br><br><br>


### Eventos sinteticos (Soluciona el problema antiguo de los eventos click)

* Abstracion de los eventos nativos de los navegadores

* Compatibilidad cross browsing sin necesidad de mas librerias

* Soporte para todos los eventos que puedas necesitar desde click y double click, Hasta eventos moviles como touchstart y touchend.

<br>

### Server Side Rendering

* Puedes renderizar tu aplicacion de React desde el servidor, Perfecto para SEO y performance.

<br>


### JSX

* Cosas que se pueden hacer con JSX

const element = <h1> Hola Mundo </h1>;

------------------------------------------------

const element = <h1> { 2 + 2 } Hola Mundo </h1>;

------------------------------------------------

function multiplicar (a, b) {
    return a * b
}

const element = <h1> { multiplicar (2, 2) } Hola Mundo </h1>;

<br>

* Expresiones ternarias

function multiplicar (a, b) {
    return a * b
}

const mostrarMultiplicacion = true

const element = <h1> { mostrarMultiplicacion ?  multiplicar (2, 2) : 'Nada que mostrar' } Hola Mundo </h1>;


* Atributos

const image = <img src='http://url-con-image.jpg' />

-------------------------------------------------------

const url = 'http://url-con-image.jpg' 
const image = <img src={url}>

<br>

* Children (2 elementos de react guardados en una misma variable)

// Esto mo se puede hacer  
const element = <h1> Hola</h1> <h2> Hola 2</h2> 

// De esta forma si (Metidos en un DIV)
const element = <div> <h1> Hola</h1> <h2> Hola 2</h2> </div> 