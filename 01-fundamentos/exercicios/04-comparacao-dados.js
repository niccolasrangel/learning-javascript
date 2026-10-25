// ==========================================
// COMPARAÇÃO DE DADOS EM JAVASCRIPT
// ==========================================

// 1. Operadores de comparação

console.log(10 > 5);   // true  - Maior que
console.log(3 < 8);    // true  - Menor que
console.log(10 >= 10); // true  - Maior ou igual
console.log(5 <= 3);   // false - Menor ou igual

// 2. Igualdade e diferença

console.log(5 == "5");  // true  - Igualdade com conversão de tipo
console.log(5 === "5"); // false - Igualdade estrita
console.log(5 === 5);   // true  - Mesmo valor e tipo

console.log(5 != "8");  // true  - Diferente com conversão de tipo
console.log(5 !== "5"); // true  - Diferente estrito

// 3. Comparando variáveis

let idade = 27;

console.log(idade >= 18); // true
console.log(idade < 18);  // false
console.log(idade === 27); // true

// 4. Comparando strings

console.log("Ana" === "Ana"); // true
console.log("Ana" === "ana"); // false

console.log("banana" > "abacaxi"); // true

// 5. Comparação com IF e ELSE

let idadeUsuario = 20;

if (idadeUsuario >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 6. Exemplo prático: aprovação por nota

let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 7. Exercícios: tente prever os resultados

console.log(10 > 5);
console.log(5 === "5");
console.log(10 !== "10");
console.log(16 >= 18);