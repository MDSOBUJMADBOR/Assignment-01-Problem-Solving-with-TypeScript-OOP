
// Sample Input:
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);

// Sample Output:
// 20
// 50
// 0

function multiplyValue(value: number, multiplier?: number): number  {
 return value * (multiplier ?? 2)
} 
console.log(multiplyValue(10));








