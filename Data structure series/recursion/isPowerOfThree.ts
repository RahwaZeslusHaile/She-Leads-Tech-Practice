/** See Problems.md. Implement using recursion. */
export function isPowerOfThree(n: number): boolean {
  // TODO: implement the base case and recursive step.
              //Base
    //`isPowerOfThree(27) → true`, 
    // `isPowerOfThree(1) → true`, 
    // `isPowerOfThree(0) → false`, 
    // `isPowerOfThree(-1) → false`.

  if (n<=0){
    return false
  }
  if (n===1){
    return true
  }
  if (n%3!=0){
    return false
  }
  return isPowerOfThree(n/3)
  }

console.log(isPowerOfThree(0))//false
console.log(isPowerOfThree(1))//true
console.log(isPowerOfThree(27))//false
console.log(isPowerOfThree(-1))//false
