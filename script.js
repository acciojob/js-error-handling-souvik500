//your code here
//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(str) {
  if (/[\+\-\*\/]{2,}/g.test(str)) {
    throw new InvalidExprError();
  }

  if (/^[\+\*\/]/.test(str)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }

  if (/[\+\*\/-]$/.test(str)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  if (/[^0-9 \+\-\*\/]/.test(str)) {
    throw new OutOfRangeError(str.match(/[^0-9 \+\-\*\/]/)[0]);
  }

  // Your expression evaluation logic goes here
}

try {
  const expr = "1+2*3/4-5";
  console.log(evalString(expr));
} catch (e) {
  if (e instanceof OutOfRangeError || e instanceof InvalidExprError) {
    console.error(`${e.name}: ${e.message}`);
  } else {
    throw e;
  }
}