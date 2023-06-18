
class InvalidExprError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidExprError";
  }
}

class PropertyRequiredError extends InvalidExprError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("Expression should not have an invalid combination of expression");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof InvalidExprError) {
    alert("Invalid data: " + err.message); // Invalid data: No property: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) {
    alert("Expression should not have an invalid combination of expression: " + err.message);
  } else {
    throw err; // unknown error, rethrow it
  }
}