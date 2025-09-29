let num = parseInt(prompt("Введите число для вычисления факториала:"));
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

document.write("Факториал числа " + num + " равен " + factorial);
