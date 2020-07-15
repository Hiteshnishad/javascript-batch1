/*
Diff. betwn let, var and const

Var:
Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though.
That is why it was necessary for new ways to declare variables to emerge. 
First, let's get to understand var more before we discuss those issues.

Scope of var:
Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped. 
*/

//EG:
var greeter = "hey hi";
    
function newFunction() {
    var hello = "hello";
}

/*
Let:
let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations.
 It also solves the problem with var that we just covered. Let's consider why this is so.

 let is block scoped:
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. 

So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:
*/ 
let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello);

/*
Const

Variables declared with the const maintain constant values.
const declarations share some similarities with let declarations.

const declarations are block scoped:
Like let declarations, const declarations can only be accessed within the block they were declared.
*/
const greeting = "say Hi";
greeting = "say Hello instead";