// Exercício - variáveis

const myName = "Leila";
const birthCity = "Belo Horizonte";
let birthYear = 1994;
console.log(myName, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = "Santa Luzia";
console.log(birthCity); //Deu erro pq birthCity é uma constante e não pode ser alterada

// Exercício - Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = (base + height) *2 ;
console.log(perimeter);

// Exercício - condições if e else

const nota = 77;
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (nota >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
}

// Exercício - Operadores lógicos: &&

const currentHour = 11;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour > 11) {
    message = "Hora do almoço!!!"
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(message)

// Exercício - Operadores lógicos: ||

let weekDay = "quarta-feira";
weekDay = "sábado"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}

// Exercício - Swich e Case

let resultadoProcessoSeletivo = "";

switch (resultadoProcessoSeletivo) {
    case "aprovada":
        console.log("aprovada");
        break;
    case "lista":
        console.log("lista");
        break;
    case "reprovada":
        console.log("reprovada");
        break;

    default:
        console.log("não se aplica");
} 
