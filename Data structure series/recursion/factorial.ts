/** See Problems.md. Implement using recursion. */
export function factorial(n: number): number {
  // TODO: implement the base case and recursive step.
  //`factorial(0) → 1`, `factorial(4) → 24`.=>1*2*3*4

        //Base
    //if the n is 0 return 1
    // if the n is 1 return n

  if (n === 0){
    return 1
  }
 
return n* factorial(n-1)
}

console.log(factorial(1))//1
console.log(factorial(0))//1
console.log(factorial(4))//24
console.log(factorial(2))//2
