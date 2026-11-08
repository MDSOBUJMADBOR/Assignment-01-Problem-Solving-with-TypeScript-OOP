// Sample Input:
// multiplyValue(10);
// multiplyValue(10, 5);
// multiplyValue(7, 0);

// Sample Output:
// 20
// 50
// 0

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}
console.log(multiplyValue(10));




// Sample Input:
// processInput("  TypeScript  ");
// processInput(7);
// processInput(true);
// processInput(false);

// Sample Output:
// "typescript"
// 70
// "Active"
// "Inactive"

function processInput(value: string | number | boolean): string | number {
 
    if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }

}
console.log(processInput(" TypeScript "));
console.log(processInput(true));
console.log(processInput(50));