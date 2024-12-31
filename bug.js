function foo(x){
  if(x === null) return 0; //This is incorrect, it should be x == null
  return x + 1;
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: NaN, but expected 1