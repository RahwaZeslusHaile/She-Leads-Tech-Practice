/** See Problems.md. Implement using recursion. */
export function fib(n: number): number {
  // TODO: implement the base case and recursive step.
      //Base
  // if fib(1) or fib(2) return 1
  //fib(4) → 3= fib(2) +fib(3)= fib(2) + fib(1)+fib(2)
if(n===1 || n===2){
  return 1
}
return fib(n-1) + fib(n-2)
}
console.log(fib(1))//1
console.log(fib(4))//3
console.log(fib(10))//55