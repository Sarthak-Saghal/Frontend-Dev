function outer() {
  debugger;

  console.log(count);
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
  }

  inner();
}

outer();
console.log(`
OUTPUT EXPLANATION:

1) First console.log(count)
   - var count is hoisted inside outer(), initialized as undefined
   - So output → undefined

2) Inside inner()
   - inner() has its own var count, hoisted as undefined
   - So output → undefined again

3) Then inner's count = 10 is assigned after log()
`);

console.log(`

outer() Context:
• var count → hoisted, undefined
• inner() function → hoisted

inner() Context:
• var count → hoisted, undefined
• shadows outer count

This shows how nested scopes create completely separate 'count' variables.
`);

function outerArrow() {
  debugger;

  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
  };

  inner();
}

outerArrow();

console.log(`
In arrow version:
• No var count inside inner() → so it closes over outer's count = 5
• Output becomes:
   undefined
   5
Which is different from the original behavior.
`);
