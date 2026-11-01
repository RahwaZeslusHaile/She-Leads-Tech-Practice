/** See Problems.md. Implement using recursion. */
export function power(base: number, exponent: number): number {
  // TODO: implement the base case and recursive step.
  //power(2, 0) → 1`, `power(2, 4) → 16`

  //if the exponent is 0 return 1
//if the exponent is 1 return the base

//2**4 = 2*2*2*2= exponent n =>n-1
  if (exponent === 0){
    return 1
  }
  if (exponent === 1){
    return base
  }

 return  base * power(base,(exponent-1))
}
console.log(power(2,4))
console.log(power(2,0))
console.log(power(2,-1))


