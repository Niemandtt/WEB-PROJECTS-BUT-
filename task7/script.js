let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  guess = parseInt(prompt("Угадайте число от 1 до 100:"));

if (guess > secretNumber) {
    alert("Загаданное число меньше!");
  } else if (guess < secretNumber) {
    alert("Загаданное число больше!");
  } else {
    alert("Поздравляю! Вы угадали число: " + secretNumber);
  }

} while (guess !== secretNumber);
