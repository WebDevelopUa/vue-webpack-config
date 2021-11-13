Vue 3
---

Demo: [GitHub Pages](https://webdevelopua.github.io/vue-webpack-config/)

- [What is Vue.js?](https://v3.vuejs.org/guide/introduction.html)
- [Vue CDNJS](https://cdnjs.com/libraries/vue)
- [Vue UNPKG](https://unpkg.com/browse/vue@2.6.14/)
- [Vue.js 2 devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js 3 devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

----

### Vue Lifecycle

1) Vue.createApp().mount()
    - ***beforeCreate Hook***
2) Init data & methods
3) Instance created
    - ***created Hook***
4) Compile Template (el property) - [String HTML => JS Object] - ***Virtual DOM (is a JS Object, copy of actual DOM)***
    - ***beforeMount Hook***
5) Replace el property with compiled template
6) **MOUNTED** #1
7) Data changes
    - ***beforeUpdate Hook*** (used for debugging)
8) Apply changes to the template
    - ***updated Hook*** (used for debugging)
9) **MOUNTED** #2
10) .unmount()
    - ***beforeUnmount Hook***
11) Vue instance destroyed
    - ***unmounted Hook***

----

## [Vue builds](https://ru.vuejs.org/v2/guide/installation.html#%D0%9E%D0%B1%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D1%85-%D1%81%D0%B1%D0%BE%D1%80%D0%BE%D0%BA)

- Vue global is a full build (compiler + runtime)

    * ```<script src="https://unpkg.com/vue@next"></script> ```
    * ``` <script src="https://unpkg.com/vue@3.2.21/dist/vue.global.js"></script>```

- Vue runtime (without compiler)
    * ```<script src="https://unpkg.com/vue@3.2.21/dist/vue.runtime.global.js"></script> ```

----

## [Webpack](https://webpack.js.org)

```
npm install -g npm
npm audit fix
npm init 
npm i webpack webpack-cli --save-dev
```

**webpack.config.js**

```json5 
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "development"
}

```

Run:

``` 
./node_modules/.bin/webpack
```

or

``` 
npm run dev
npm run prod
```

## [Babel Presets](https://babeljs.io/docs/en/presets):

* @babel/preset-env for compiling ES2015+ syntax
* @babel/preset-typescript for TypeScript
* @babel/preset-react for React
* @babel/preset-flow for Flow

``` 
npm i @babel/core @babel/preset-env babel-loader --save-dev
```

**webpack.config.js**

```json5 
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}

```

**.babelrc**

```json5 
{
  "presets": [
    "@babel/preset-env"
  ]
}

```

## [SASS](https://sass-lang.com/)

``` 
npm i node-sass sass-loader css-loader style-loader --save-dev
```

**webpack.config.js**

```json5 
module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

```

[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)

``` 
npm i mini-css-extract-plugin --save-dev
```

**webpack.config.js**

```json5 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Uncomment 'style-loader' to add style to HTML Head
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    watch: true
}

```

## [Post CSS](https://postcss.org/) + [PostCSS.parts](https://www.postcss.parts/)

``` 
npm i postcss postcss-loader --save-dev
npm i autoprefixer --save-dev
```

**webpack.config.js**

```json5 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Uncomment 'style-loader' to add style to HTML Head
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    watch: true
}

```

**postcss.config.js**

```json5 
module.exports = {
    plugins: {
        autoprefixer: {
            // Options
        }
    }
}

```

**package.json**

```json5 
{{
...
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}

```
