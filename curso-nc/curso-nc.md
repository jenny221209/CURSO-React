
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
    - [14. IMAGEN DE LA ESTRUCTURA DE CARPETAS](#14.-IMAGEN-DE-LA-ESTRUCTURA-DE-CARPETAS)

- [REACT - REACT.JS - REACTJS](#REACT---REACT.JS---REACTJS)
    - [Que es React](#Que-es-React)
    - [React es Declarativa](#React-es-Declarativa)
    - [React esta basada en componentes](#React-esta-basada-en-componente)
    - [Programacion reactiva](#Programacion-reactiva)
    - [Usa el Virtual DOM y Diffing](#Usa-el-Virtual-DOM-y-Diffing) 
    - [Eventos sinteticos (Soluciona el problema antiguo de los eventos click)](#Eventos-sinteticos-(Soluciona-el-problema-antiguo-de-los-eventos-click))
    - [Server Side Rendering](#Server-Side-Rendering)
    - [JSX](#JSX)
    - [WebPack](#WebPack)
    - [Carpetas y archivos creados por create-react-app](#Carpetas-y-archivos-creados-por-create-react-app)

- [DESARROLLO](#DESARROLLO)
    - [REACT Y REACT DOM](#REACT-Y-REACT-DOM)
    - [REACT Y REACT DOM](#REACT-Y-REACT-DOM)

         
<br><br>

## REQUISITOS

<br>

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

### 2. Instalacion de NPM  O YARN 

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

<br> <br>

## CONVENSIONES & ACUERDOS - NC
<br>

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

### 14. IMAGEN DE LA ESTRUCTURA DE CARPETAS

<img src="src/assets/img/carpetas-react.png">










<br><br>

* =======================================================================================================================================
<br><br> 

## REACT - REACT.JS - REACTJS

<br>

### React es Declarativa


### Que es React

    xReact (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes. 1​

    React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.

    React fue creada por Jordan Walke, un ingeniero de software en Facebook, inspirado por los problemas que tenía la compañía con el mantenimiento del código de los anuncios dentro de su plataforma. Enfocado en la experiencia del usuario y la eficiencia para sus programadores, influenciado por XHP (un marco de componentes de HTML para PHP), nace el prototipo ReactJS.

<br>

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

<br>

### Programacion reactiva


    * Cada componente "Reacciona" y se vueLve a renderizar cuando se produce un cambio de estado (estate) o le llegan nuevas propiedades (props)

<br>


### Usa el Virtual DOM y Diffing

*  DOM -Document Object Model
Genera una copia del arbol de elementos del navegador para solo hacer los minimos cambios necesarios para reflejar el estado de nuestro componentes.

<br>
<img src="src/assets/img/virtual-dom.png" width="500px">
<br><br>


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


### WebPack

    * webpack es un paquete de módulos JavaScript de código abierto . [2] [3] [4] [5] [6] Es un paquete de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los cargadores correspondientes. [7] webpack toma módulos con dependencias y genera activos estáticos que representan esos módulos. 

    webpack toma las dependencias y genera un gráfico de dependencia que permite a los desarrolladores web utilizar un enfoque modular para sus propósitos de desarrollo de aplicaciones web. Se puede usar desde la línea de comandos o se puede configurar usando un archivo de configuración que se denomina webpack.config.js . Este archivo se utiliza para definir reglas, complementos, etc., para un proyecto. (Webpack es altamente extensible a través de reglas que permiten a los desarrolladores escribir tareas personalizadas que desean realizar al agrupar archivos).

    Node.js es necesario para usar webpack.

    webpack proporciona código bajo demanda utilizando la división de código de moniker . El Comité Técnico 39 para ECMAScript está trabajando en la estandarización de una función que carga código adicional: "propuesta-dinámica-importación". 


### Carpetas y archivos creados por create-react-app

    * CARPETAS

        - SRC :  Carpeta Source. Es la carpeta donde se realiz todo el desarrollo del proyecto

        - NODE_MODULES :  Es la carpeta donde se almacenan todas las dependencias del proyecto

        - PUBLIC : Es la carpeta donde están todos los archivos iniciales de HTML 

    * ARCHIVOS 

        * FUERA DEL SOURCE

            -  .GITIGNORE : Archivo que contiene la lista de cosas que se van a ignorar al usar GIT.

            - .PACKAGE.JSON : El archivo package.json almacena toda la configuración del proyecto

            - .PACKGE-LOCK.JSON : El archivo package-lock.json se genera cuando se hace el npm install. Y contiene todo el registro detallado 
                de las dependencias instaladas.

            - .README.md : El archivo README.md es un archivo de texto con extensión .md (Markdown - Marcado Ligero). Y nos permite crear  un manual o archivo de lectura con textos enriquezidos, Links, Tituos, Subtitulos, Textos,  Imagenes; videos. De una forma muy rapida.    

    * DENTRO DEL SOURCE

        - INDEX.JS : El archivo index.js es el archivo de arranque del proyecto. 

        - APP.JS :  El App.js es un componente de ejemplo. 

        - APP.CSS : Tiene los estilos de componente App.js.

        - INDEX.CSS : El index.js  tiene los estilos del index.js    

        -  SERVICEWORKER.JS : EL modulo serviceworker.js le aporta ciertas capacidades a la tecnologia React como: Crear aplicaciones de escritorio,
            Apliocaciones web, App ()Aplicaciones miviles), Poder ejecutar una aplicación web sin estar conectado a internet.

        - SETUPTESTS.JS : setup.Test.js es donde se almacena la configuración de los testeos del proyecto.

<br><br>
* =======================================================================================================================================
<br><br> 

## DESARROLLO
<br>

### REACT Y REACT DOM 

     * REACT : React es el punto de entrada a la biblioteca de React. Si se carga React desde una etiqueta <script>, estas API de alto nivel estarán 
        disponibles en el React global. Si se usa ES6 con npm se puede escribir import React from 'react'. 
        Si se usa ES5 con npm, se puede escribir var React = require('react').

    * REACT DOM : El paquete react-dom proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación 
        como una vía de escape del modelo de React si así lo necesitas. La mayoría de tus componentes no deberían necesitar usar este módulo.

        Si cargas React desde una etiqueta <script>, estas APIs de alto nivel estarán disponibles en la variable global ReactDOM. Si usas ES6 con npm, puedes escribir import ReactDOM from 'react-dom'. Si usas ES5 con npm, puedes escribir var ReactDOM = require('react-dom').


    * Existen 2 formas en react para crear componentes. Con funciones o con clases

    *  CREAR COMPONENTES CON FUNCIONES :  

        function HolaMundo() {

    return (

        <div>
            <nav>
                <ul>
                    <li className="li-nav" > <a href=""> Inicio </a></li>
                    <li className="li-nav" > <a href="">  Mundo </a></li>
                </ul>
            </nav>
       

        <h2> !! Hola Mundo !! </h2>
        </div> 
    );
}

export default HolaMundo;

        
        