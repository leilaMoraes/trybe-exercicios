// Array que será utilizado nos exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

console.log(numbers);

// Exercício 2

console.log(numbers.length);
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]);

// Exercício 3

let lenght = numbers.length
//let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]

console.log(sum / lenght);

// Exercício 4

if (sum / lenght > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// Exercício 5

let max = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > max){
        max = numbers[index]
    }       
}
console.log(max);

// Exercício 6

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 === 1){
    oddNumbers += 1;
} 
}
    if (oddNumbers > 0){
        console.log(oddNumbers)
}   else {    
        console.log("nenhum valor ímpar encontrado")
}  

// Exercício 7

let min = 100;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < min){
        min = numbers[index]
    }       
}
console.log(min);