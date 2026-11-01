/** See Problems.md. Implement using recursion. */
export function recursiveRange(n: number): number {
  // TODO: implement the base case and recursive step.

  //.  Base

  //if n is 0 return 0

  //6=1+2+3+4+5+6=21
  
  if(n===0){
    return 0
  }
  return n+recursiveRange(n-1)
}

console.log(recursiveRange(0))
console.log(recursiveRange(1))
console.log(recursiveRange(6))
console.log(recursiveRange(10))
