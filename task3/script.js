let num = parseInt(prompt("Введите число для таблицы умножения:"));

document.write("Таблица умножения для числа " + num + ":<br><br>");

for (let i = 1; i <= 10; i++) {
  let result = num * i;
  document.write(num + " × " + i + " = " + result + "<br>");
}
