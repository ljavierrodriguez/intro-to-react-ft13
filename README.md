### Crear proyect npm

    $ npm init -y

### Instalar react y react-dom

    $ npm i react react-dom

### Instalar todas las librerias a utilzar (ejemplo: babel, bootstrap, webpack, webpack-cli)

    $ npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader file-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server sass sass-loader clean-webpack-plugin mini-css-extract-plugin
    $ npm i bootstrap @popperjs/core

### Crear archivo .babelrc y agregar el siguiente objeto

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
    }