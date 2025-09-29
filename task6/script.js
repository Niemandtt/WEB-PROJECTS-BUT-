let n = parseInt(prompt("Введите количество чисел в последовательности Фибоначчи:"));

let a = 0, b = 1;

document.write("Последовательность Фибоначчи (" + n + " чисел):<br>");

for (let i = 1; i <= n; i++) {
  document.write(a + " ");
  

  let next = a + b;
  a = b;
  b = next;
}
