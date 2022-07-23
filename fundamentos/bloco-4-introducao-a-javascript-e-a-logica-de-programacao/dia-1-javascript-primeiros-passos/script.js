// Exercício 1

const a = 4;
const b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercício 2

const num1 = 10;
const num2 = 20;

if (num1 > num2){
    console.log(num1)
} else {
    console.log(num2)
}

// Exercício 3

const num1 = 2;
const num2 = 4;
const num3 = 6;

if (num1 > num2 && num1 > num3){
    console.log(num1)    
} else if (num2 > num1 && num2 > num3){
    console.log(num2)
} else {
    console.log (num3)
}

// Exercício 4

const numero = -4;

if (numero > 0) {
    console.log("positive")
} else if (numero < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// Exercício 5

const ang1 = 40;
const ang2 = 80;
const ang3 = 60;

if (ang1 + ang2 + ang3 === 180) {
    console.log("true")
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log("erro")
} else {
    console.log("false")
}

// Exercício 6

const chessPiece = "RAINHA".toLowerCase();


switch (chessPiece) {
    case "rei":
        console.log("uma casa em qualquer direção");
        break;
    case "rainha": 
        console.log("quantas casas for possível em qualquer direção");
        break;
    case "bispo":
        console.log("quantas casas for possível na diagonal");
        break;
    case "cavalo":
        console.log("movimento em L - 3 e 2 casas ou 2 e 3 casas na horizontal e vertical ou primeiro vertical depois horizontal")
        break;
    case "torre":
        console.log("quantas casas for possível na horizontal ou vertical");
        break; 
    case "peão":
        console.log("2 casas à frente no início do jogo, depois, somente 1, para comer outra peça,  somente diagonal");
        break;
    default:
        console.log("erro");     
}

// Exercício 7

const porcentagem = 1;

if (porcentagem >= 90 && porcentagem <= 100){
    console.log("A")
} else if (porcentagem >= 80 && porcentagem <= 89){
    console.log("B")
} else if (porcentagem >= 70 && porcentagem <= 79){
    console.log("C")
} else if (porcentagem >= 60 && porcentagem <= 69){
    console.log("D")
} else if (porcentagem >= 50 && porcentagem <= 59){
    console.log("E")
} else if (porcentagem < 50 && porcentagem >= 0){
    console.log("F")
} else {
    console.log("erro");          
}

// Exercício 8

const num1 = 2;
const num2 = 3;
const num3 = 5;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    console.log("true")
} else {
    console.log("false")
}

// Exercício 9

const num1 = 1;
const num2 = 8;
const num3 = 5;

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1){
    console.log("true")
} else {
    console.log("false")
}

// Exercício 10

const custo = 70;
const venda = 150;
let custoTotal = custo + custo * 0.2;
let lucro = venda - custoTotal;

if (custo >= 0 && venda >= 0){
    console.log(lucro * 1000)
} else {
    console.log ("erro")
}

// Exercício 11

let salarioBruto = 3000;
let descontoInss;
let descontoIr;

if (salarioBruto <= 1556.94){
    descontoInss = salarioBruto - salarioBruto * 0.08
} else if (salarioBruto <= 2594.92){
    descontoInss = salarioBruto - salarioBruto * 0.09
} else if (salarioBruto <= 5189.82){
    descontoInss = salarioBruto - salarioBruto * 0.11
} else {
    descontoInss = salarioBruto - 570.88
}

    if (descontoInss <= 1903.98){
        descontoIr = 0
    } else if (descontoInss <= 2826.65){
        descontoIr = descontoInss * 0.075 - 142.8;
    } else if (descontoInss <= 3751.05){
        descontoIr = descontoInss * 0.15 - 354.80
    } else if ( descontoInss <= 4664.68){
        descontoIr = descontoInss * 0.225 - 636.13
    } else {
        descontoIr = descontoInss * 0.275 - 869.36
    }

let salarioLiquido = descontoInss - descontoIr    
    
console.log (salarioLiquido)


