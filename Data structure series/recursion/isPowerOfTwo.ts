/** See Problems.md. Implement using recursion. */
export function isPowerOfTwo(n: number): boolean {
  // TODO: implement the base case and recursive step.

      //Base
  //if n is 0 or less than 0 return false
  //if n is 1 return true

////16 = 16%2=8=>8%2=>4. 4%2=>2 2%2=>1
//3= 3%2 
 
  if(n<=0){
    return false
  }
  if(n===1){
    return true
  }
  if (n%2 !=0){
    return false
  }
  return isPowerOfTwo(n/2)
}
console.log(isPowerOfTwo(3))//false
console.log(isPowerOfTwo(1))//true
console.log(isPowerOfTwo(16))//true
console.log(isPowerOfTwo(-3))//false

