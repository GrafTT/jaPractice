/*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).*/

function getNumbersSum(num){
    let sum = num.toString().split('').reduce((a, b) => +a + +b);
let total = 0;
    if(sum>9){
    total = sum.toString().split('').reduce((a, b) => +a + +b);
    sum = total;
    return sum;
  }
return sum;
}

console.log(getNumbersSum(12915));