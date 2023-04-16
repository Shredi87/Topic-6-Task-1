function getMaxSubSum(arr) {
  let maxSum = 0;  // Максимальная сумма
  let partialSum = 0;  // промежуточная сумма

  for (let item of arr) {  // перебираем массив по значениям
    partialSum += item;  // прибавляем значение к промежуточной сумме
    maxSum = Math.max(maxSum, partialSum);  // сравниваем текущее значение максимальной суммы и промежуточной суммы и записываем большее из них в максимальную сумму
    if (partialSum < 0) partialSum = 0; // если промежуточная сумма стала отрицательной - обнуляем её значение
  }

  return maxSum;
}