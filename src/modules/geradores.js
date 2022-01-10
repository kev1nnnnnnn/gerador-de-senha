
//verifica um número aleatório.
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
/*é declarada uma constante para verificar O método  String.fromCharCode()retorna uma string criada para usar uma sequência específica de valores Unicode. ao final, é utilizado a função rand() no qual será gerado um número aleatório da tabela ASCII*/
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;-^[]{}@#$%*()_+=-';

const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//exportação de função para o formGeraSenha.js
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

