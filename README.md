# Introducción (breve) a ES6

## El ejemplo del Carrito

Queremos programar un almacén, que vende 3 tipos de productos: Leche, Queso y Miel. Todos los productos tienen una marca y un peso que determina su precio unitario. Nuestro programa tiene que poder decir el precio de un producto, armar un carrito de compras que tenga productos (y sus cantidades) y saber el total a pagar.

Los cálculos de precios son los siguientes:

> **Leche** = si compra por cantidad (más de 10 unidades) el precio unitario es 5, de lo contrario sale 10

> **Queso** = todos valen 50 pesos por unidad

> **Miel** = la miel "Real" sale 20 pesos por unidad, las otras salen 15

## Qué necesitamos para comenzar a trabajar

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node y NPM](https://www.npmjs.com/get-npm)

## Configuramos nuestro proyecto

### Dependencias

- Creamos una carpeta vacía, le podés poner el nombre que quieras, por ejemplo "carrito"
- Configuramos nuestro proyecto con nuestras dependencias desde la línea de comando (Visual Studio Code tiene una consola)

```bash
$ npm init                    -- crea el archivo package.json contestando algunas preguntas
```

Una vez creado el archivo package.json podemos

- copiar la definición de este repositorio y ejecutar el comando que descarga las dependencias

```bash
npm install
```

- o manualmente bajarnos las dependencias con guardándolas al package.json

```bash
$ npm install babel-cli babel-preset-es2015 jasmine-core karma karma-babel-preprocessor karma-jasmine karma-phantomjs-launcher
--save-dev   
```

En cualquiera de los dos casos conviene instalar el cliente karma:

```bash
$ npm i karma-cli -g  -- instala globalmente el cliente karma para correrlo por consola
``` 


Además vamos a incorporar esta línea:

```bash
  "scripts": {
    "prestart": "npm install",
    "postinstall": "",
    "start": "",
    "test": "karma start"
  },
```

Esto habilita a que parados sobre el directorio raíz de nuestro proyecto podamos correr los tests en forma interactiva escribiendo este comando:

```bash
$ npm test
```


### Directorios de trabajo

Tendremos que crear dos carpetas:

- **src**: aquí van las definiciones principales de nuestro programa. Vamos a crear un archivo carrito.js.
- **spec**: aquí vamos a ubicar los tests que validan nuestra solución

## Configurando los tests unitarios con Karma

Parados en el raíz instalamos el cliente de línea de comando Karma en la consola:

```bash
$ sudo npm i -g karma-cli --save-dev
```

Y luego inicializamos el archivo de configuración para correr los tests que necesita Karma:

```
$ karma init
```

Ante cada pregunta seleccionaremos:

- jasmine como framework de testing
- no queremos usar require
- utilizaremos PhantomJS como un browser silencioso (esto correrá los tests por línea de comando y no abrirá un navegador)
- el resto de las opciones por defecto e ignoramos el último error que nos dice que no hay archivos js.



### Configuraciones opcionales

El archivo [.travis.yml](./.travis.yml) lo podés copiar de este repositorio.

## Ahora sí, ¡a modelar el carrito!

### Modelar los productos

La leche, el queso y la miel, se pueden representar

- con valores
- con objetos javascript que tienen el precio como comportamiento

Como se repite la multiplicación cantidad * precio, generamos una función calcularTotal para tener en un solo lugar la definición del cálculo.

### Modelar el carrito

El carrito se podría representar con

- un número, el valor final a pagar
- o bien con una lista de cantidad/producto, que permite registrar más información y saber si llevé 1 ó 2 sachets de leche.

### Calcular el total de un carrito

Hay muchas variantes, en un esquema imperativo/funcional tenemos una función que calcula el total a pagar de un carrito, que termina siendo una estructura de datos pasiva.

## Esta solución

En la solución que presentamos a continuación, vemos que 

- la leche, el queso y la miel son **funciones** (closures), que dada una marca y una cantidad nos dicen el precio total. Este esquema tiene limitaciones (no permite trabajar otros cálculos, como la ganancia neta o el stock de un producto, tampoco es fácil saber si un carrito contiene leche o queso), pero es simpática para introducir la programación funcional en Javascript.

- por lo tanto, el carrito se conforma con una lista de productos que consiste en aplicar las funciones leche, queso y miel con una marca y una cantidad

## Tests

Los tests están en la carpeta spec y prueban unitariamente el queso, la leche y el valor total de un carrito.

## Pasos futuros

En el próximo branch vamos a modelar una solución más orientada a objetos, bastante diferente.
