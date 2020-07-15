// In javascript, the console is an object which provides access to the browser debugging console.
//  The console object provides us with several different methods.

/*1.*/console.log(document);
console.log('abc');  
console.log(1); 
console.log(true); 
//Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.

/*2.*/console.error();
//Used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.

/*3.*/console.warn("Warning");
//Used to log warning message to the console. By default the warning message will be highlighted with yellow color.

console.clear();
//Used to clear the console. The console will be cleared, in case of Chrome a simple overlayed text will be printed like : ‘Console was cleared’ while in firefox no message is returned.

console.time();
console.timeEnd();
//Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object.
// They take a label which must be same, and the code inside can be anything( function, object, simple console).

console.table({'a':1, 'b':2}); 
//This method allows us to generate a table inside a console.
// The input must be an array or an object which will be shown as a table.

console.count();
//This method is used to count the number that the function hit by this counting method.
for(let i=0;i<5;i++){ 
    console.count(i); 
} 

console.group();
console.groupEnd();
//group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented. 
//Just like the time() and the timeEnd() they also accepts label, again of same value.
console.group('simple'); 
  console.warn('warning!'); 
  console.error('error here'); 
  console.log('vivi vini vici'); 
console.groupEnd('simple'); 


console.info();
//The console.info() method writes a message to the console.