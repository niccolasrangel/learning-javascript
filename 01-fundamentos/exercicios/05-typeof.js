// ========================================
// USO DO TYPEOF EM JAVASCRIPT
// ========================================

// O typeof é usado para identificar o tipo de dado de um valor.

// 1. String (texto)
let nome = "Nicolas";
console.log(typeof nome); // "string"

// 2. Number (número)
let idade = 27;
console.log(typeof idade); // "number"

let altura = 1.95;
console.log(typeof altura); // "number"

// 3. Boolean (verdadeiro ou falso)
let estudando = true;
console.log(typeof estudando); // "boolean"

// 4. Undefined (variável sem valor atribuído)
let profissao;
console.log(typeof profissao); // "undefined"

// 5. Null (ausência intencional de valor)
let endereco = null;
console.log(typeof endereco); // "object" (comportamento histórico do JavaScript)

// 6. Object (objeto)
let pessoa = {
    nome: "Nicolas",
    idade: 27
};

console.log(typeof pessoa); // "object"

// 7. Array (lista de valores)
let linguagens = ["JavaScript", "Python", "Java"];

console.log(typeof linguagens); // "object"

// Para verificar se um valor é um array:
console.log(Array.isArray(linguagens)); // true

// 8. Function (função)
function somar(a, b) {
    return a + b;
}

console.log(typeof somar); // "function"

// 9. Symbol
let identificador = Symbol("id");

console.log(typeof identificador); // "symbol"

// 10. BigInt (números inteiros muito grandes)
let numeroGrande = 12345678901234567890n;

console.log(typeof numeroGrande); // "bigint"

// ========================================
// USANDO TYPEOF EM CONDIÇÕES
// ========================================

let valor = 100;

if (typeof valor === "number") {
    console.log("O valor é um número.");
} else {
    console.log("O valor não é um número.");
}

// ========================================
// COMPARANDO TIPOS DE DADOS
// ========================================

let a = "50";
let b = 50;

console.log(typeof a); // "string"
console.log(typeof b); // "number"

console.log(typeof a === typeof b); // false

// ========================================
// RESUMO
// ========================================

// typeof "Olá"       -> "string"
// typeof 10          -> "number"
// typeof true        -> "boolean"
// typeof undefined   -> "undefined"
// typeof null        -> "object"
// typeof {}          -> "object"
// typeof []          -> "object"
// typeof function(){} -> "function"
// typeof 10n         -> "bigint"