# gerador-de-senha


<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 JavaScript</a>
</h1>
<p align="center">🚀 Gerador de senha utilizando Webpack + babel -- JS</p>


![gerador](https://user-images.githubusercontent.com/60278232/152543011-f6296206-f775-4476-921b-c10737b68fba.png)


<h1>Geadores.js</h1>

```
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;-^[]{}@#$%*()_+=-';

const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    
    const senhaArray = [];
    qtd = Number(qtd); 
    
    for (let i = 0; i < qtd; i++) {
        
        //operação de curto circuito
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}



```

<h1>formGeraSenha.js</h1>

```
import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.btn');



export default () => {
    document.addEventListener('keyup', () => {
        
    senhaGerada.innerHTML = gera();
    });
}

export default  () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    }); 
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    if (!senha == "") {
        return senha;
    } else {
        "Nada selecionado"
    }
 
}

```
<h1>webpack.config.js</h1>

```
const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devtool: 'source-map'
};

```


  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
<img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">


