let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

document.write("Количество чётных чисел: " + evenCount + "<br>");
document.write("Количество нечётных чисел: " + oddCount);
