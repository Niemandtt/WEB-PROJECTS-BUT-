let num = parseInt(prompt("Введите число:"));

let sum = 0;
let i = 1;

while (i <= num) {
  sum += i;
  i++;       
}

document.write("Сумма чисел от 1 до " + num + " равна " + sum);
