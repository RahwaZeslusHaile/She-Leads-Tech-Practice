/** See Problems.md. Implement using recursion. */
export function productOfArray(numbers: number[]): number {
  // TODO: implement the base case and recursive step.
  //([2, 3, 4]) → 24`
     // Base
  //if the length of numbers is 0 return 1

  // 2*3*4

  if (numbers.length === 0){
    return 1
  }

  return numbers[0] * productOfArray(numbers.slice(1))

}
console.log(productOfArray([2, 3, 4]))
console.log(productOfArray([]))
console.log(productOfArray([2]))
