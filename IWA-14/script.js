//Challenge 1:

const firstName = "John";
const age = 35;
const hobby = "Coding";

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function hobbyString() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyString();

/*Changes made:
-Addition of const to assign variables
-Put "parameter" as a parameter inside the logTwice arrow function
-correct syntax error fo rconsole.log inside the logTwice function
-Change hobby function name to hobbyString to get rid of naming conflicts
*/

/*********************************************************************************************************************** */
//Challenge 2:

function add(a, b) {
  return a + b;
}

function multiply(a, b, c) {
  return (a + b) * c;
}

function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const multiplied = this.multiply(
    this.internal.a,
    this.internal.b,
    this.internal.c
  );
  const result = multiplied;
  console.log(result);
  return result;
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();

/*Changes:
-Change all functions from arrow functions to function declarations
-Fix syntax in all function declarations
-Change minus sign ot multiplication sign in the multiply function
-Change parameters in multiply function to include c, and change the operation to get the result shown on LMS
-use this keyword to access the example Objects and use the nested internal object's properties to perform the operations in the add and multiply functions
-return and log the mulitplied value to get the result required by LMS */
