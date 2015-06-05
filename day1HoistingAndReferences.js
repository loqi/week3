// Solidify on passing in variables to the brackets for objects.

// Your mission, should you choose to accept it, is to write a console.log after each
// line of code saying what you expect that variable to be at that point in time, and
// then logging the variable itself. I'll demonstrate with the first one below:

console.log('I expect myFirstVariable to be undefined',myFirstVariable);
var myFirstVariable;
console.log('I still expect myFirstVariable to be undefined',myFirstVariable);
myFirstVariable = 8;
console.log('I expect myFirstVariable to be 8',myFirstVariable);

// Note that there are explanations at the bottom of this document for many of these
// answers. Definitely try to reason through this with a partner before looking through
// the explanations though!

// Alrigt, now it's your turn. I'll get you started with another obvious example, then
// I'll start leaving you more on your own:
// 1. What is the value of mySecondVar before we declare it? Can you explain why to your partner?
var mySeondVar;
mySecondVar = 1;
// 2. What is the value of mySecondVar now?
mySecondVar = 2;
// 3. And what is it now?

// 1. What is the value of myThirdVar?
//  Uncomment the following line, and fill in what you expect myThirdVar to be.
//  console.log('I expect myThirdVar to be YOUR ANSWER HERE:',myThirdVar);

// Ok, now you should be pretty comfortable with the main takeaway from hoisting: don't
// try to use variables before you define them for the first time, because they'll just
// be undefined, not anything useful!

// Let's continue with this game though. It's kind of fun acting as the interpreter ourselves!

var myBike = {};
myBike.color = 'pink';

var bikeCopy = myBike;
// What would we expect bikeCopy.color to be?

bikeCopy.brand = 'Public';
// What would we expect bikeCopy.brand to be?
// What would we expect myBike.brand to be? Can you explain why to your pair?

var sparklyBikeMechanic = function(inputBike) {
  inputBike.sparklerCount = 2;
};

sparklyBikeMechanic(bikeCopy);
// What do we expect bikeCopy.sparklerCount to be?
// What do we expect myBike.sparklerCount to be? Again, take a minute here to explain
//   why to your pair. My explanation would go something like this:
// Objects are passed by reference. That is, when you store them into a variable, what
//   you're actually storing is just a reference to where that object sits in memory. So
//   when we set bikeCopy = myBike, what we're actually doing is setting bikeCopy equal
//   to the REFERENCE that myBike holds that points to where the object sits in memory.
// This just like they're both links pointing to the same webpage.
//   So then we create a variable called sparklyBikeMechanic, which is a function with a
//   single parameter, all this function does is set a property on that object the user
//   passed in to us.
// We then invoke sparklyBikeMechanic, and pass in bikeCopy. Remember that bikeCopy is
//   just a link to where the object actually sits in memory.
// So what we're doing inside sparklyBikeMechanic is looking up what that reference or
//   link points to, and setting a property on that object where it sits in memory.
//   inputBike is equal to what we pass in, which is bikeCopy. So those two are the same,
//   bikeCopy and myBike are both references to the same object in memory. So when the
//   interpreter gets inside the code of sparklyBikeMechanic(), it can see inputBike,
//   bikeCopy, and myBike, which are all pointing at the same place in memory. So when
//   we modify a property on one of them, we're modifying that property on all of them,
//   because there is really only one object with three ways in.
// That is why we would expect both bikeCopy and myBike to have a sparklerCount of 2
//   after invoking sparklyBikeMechanic and passing in bikeCopy.
// SIDE NOTE: Talk through your code in this level of specificity! Say things that are
//   so obvious to you that they bore you. This is exactly what interviewers want to
//   hear. You need to prove to them that you know all this stuff inside and out. While
//   it seems obvious to you that you know it well enough that you can skip over portions
//   of the explanation, it is not obvious to the interviewer that you know this much
//   yet- that's the point of the interview!

// "But wait, we didn't return anything from sparklyBikeMechanic!" you might exclaim.
//   Take a few minutes here to talk with your partner about why this worked even without
//   a return statement, because of side effects.

// Let's explore that a bit more.

var racingBikeMechanic = function(inputBike) {
  inputBike.carbonFiber = 'everything';
  return inputBike;
};
var returnedBike = racingBikeMechanic(bikeCopy);
// What do we expect bikeCopy.carbonFiber to be?
// What do we expect myBike.carbonFiber to be? Explain it again to your partner to get
//   practice explaining it. 
// Now what do we expect returnedBike to be? Talk it out with your partner. Talk through
//   how inputBike inside the function is nothing more than a reference, and we can return
//   that same reference. 

returnedBike.color = 'black';
// What do we expect bikeCopy.color to be now?

// Let's think through return statements again for a moment longer.
var forgetfulMechanic = function(inputBike) {
  inputBike.condition = 'flawless';
};

var mysteryBike = forgetfulMechanic(bikeCopy);
// What do we expect myBike.condition to be?
// What do we expect mysteryBike to be?
//   Talk through this with your partner for a few mintues, then read through what my
//     description would be below:
//   A bike mechanic is an apt analogy here. This particular bike mechanic does a bunch of
//     work modifying the bike and making it flawless (ok, they're actually just really good
//     at that part of their job and can do it by simply modifying an inputBike property).
//     But then when the customer comes to pick up her bike, the mechanic forgets to give
//     it back! So the bike itself is fixed. But it's sitting in the back storage room.
//     Unless the customer has some other way of accessing the bike, the mechanic not
//     returning it is going to be a bit of an issue!
//   What does that mean in our example? 
//     We're declaring a function called forgetfulMechanic, that takes in a single object
//     as it's parameter, and sets a property on that object. It does nothing else.
//   Then we invoke forgetfulMechanic, passing in bikeCopy as the argument. We set
//     mysteryBike equal to the results of what forgetfulMechanic returns to us.
//   forgetfulMechanic goes through and sets the condition property on inputBike equal
//     to the string 'flawless'.
//   Since objects are passed by reference, inputBike is nothing more than a link to where
//     that object sits in memory. So we go and look up the object at that position in
//     memory, and set a property on that object in memory.
//   This means that any other variable that points to this same position in memory will
//     be able to see this updated property.
//   This is called a side effect: modifying something accessible outside of our function.
//     In this case, we are not returning anything. So JavaScript will return undefined
//     for us by default.
//   Let's go really deep into that line. Here it is again:
//            var mysteryBike = forgetfulMechanic(bikeCopy);
//   the `var mysteryBike` part has already been executed due to variable declaration
//   hoisting, it was executed as if it had been written on line 1 of this file. So the
//   interpreter essentially sees this instead:
//            (mysteryBike = (forgetfulMechanic(bikeCopy)));
//   This is a statement. We are good JS coding citizens so we put a semicolon on the end
//     of all our statements. This statement is entirely an expression, made of smaller
//     expressions, followed by a semicolon. All three identifiers in this expression
//     are variables in the global scope. They were declared with the `var` keyword
//     in lines not nested within any function which puts them in the global namespace.
//     One of them contains a reference to a function, one a reference to a bike object,
//     and one is still undefined. The interpreter sees that line like this now.
//            (UNDEFINED_VARIABLE = (REFERENCE_TO_FUNCTION(REFERENCE_TO_BIKE));
//     The next expression to evaluate is the function call. In orter to evaluate it,
//     the argument is passed in, the code of the function is run, and the return
//     value of the function becomes the evaluation value of the function call, like so:
//            (UNDEFINED_VARIABLE = WHATEVER_WAS_RETURNED_BY_RUNNING_THE_FUNCTION);
//     The function has no name. As a shorthand, we speak of the forgetfulMechanic()
//     function, but technically the function is without a name. `forgetfulMechanic`
//     is a variable that currently contains a reference to an anonymous function object
//     defined by this code: `function(inputBike) { inputBike.condition = 'flawless'; }`
//     The only possible way for a JavaScript function to return a value other than
//     `undefined` is with an explicit value on a `return` statement. This function has
//      no return statement, so the interpreter returns when it reaches its `}` delimeter.
//      The return value will be undefined when that happens. Substituting that into our
//      expression, we get
//            (UNDEFINED_VARIABLE = undefined);
//      Now for the single-equals operator. That means we create or overwrite the variable
//      or object property on the left with the evaluation of the expression on the right.
//      The right side has evaluated as `undefined`, so the `mysteryBike` variable overwrites
//      its prior value `undefined` with the new value `undefined` causing no change. After that
//      "side effect" of `=` (which many programmers think of as the only effect of `=`)
//      has completed, the whole `=` expression resolves to the value that was just
//      written, making this substitution
//            (undefined);
//      Since this is not part of an even bigger expression, the expression has been fully
//      evaluated. Since this expression is not part of a bigger statement, the statement
//      has completed and the interpreter moves on to the next statement.

var confusedMechanic = function(inputBike) {
  return inputBike.condition = 'forgotten';
};

var notABike = confusedMechanic(bikeCopy);
// What do we expect myBike.condition to be now?
// What do we expect notABike to be?
//   Test this out!
//   Now talk it through with your pair.
//   Really.
//   Remember that JS is super modular. It evaluates each expression, passing the results
//     of that onto the next step.
//   In this case, it evaluates the expression `inputBike.condition = 'forgotten';` and
//     returns the result of what that expression evaluates to. What is the result of an
//     assignment statement like that?
//   Test this out in your console!
//     type in something like var x = 8;
//     If you're using Chrome's developer tools console, the thing you see on the line after
//     you enter this in is what's returned from that line being evaluated. In the case of
//     `var x = 8;` the value 8 is returned from that assignment. In the case of setting a
//     property on our inputBike, we see a very similar thing happening: it returns only the
//     thing on the right-hand side of the equals sign.
//   In this case, it evaluates `inputBike.condition = 'forgotten';` and that evaluates to just
//     'forgotten'. Then it retuns the result of that expression, which is simply the string
//     'forgotten' The string is one of the few JS primitive datatypes. They behave logically
//     the same as if passed by value, and yet they are given some simulated features of objects.
//   But note that we are still having the side effect (the object stored where the inputBike
//     reference points to is updated).

// So what happens if we refactor the code to be something like the code below?
var awesomeMechanic = function(inputBike) {
  inputBike.condition = 'gleaming';
  return inputBike;
};

var shiningBike = awesomeMechanic(bikeCopy);
// What do we expect bikeCopy.condition to be?
// What do we expect shiningBike to be? Can you explain why to your pair?
//   Why is this different than confusedMechanic?
//   Let's talk it through.
// First, inside awesomeMechanic, we are overwriting a property on our inputBike.
//   Note: inputBike.condition = 'gleaming'; will still give 'gleaming' to anything
//   listening for the result of that expression. So if we were to do something like
//   `console.log(inputBike.condition = 'gleaming');` we would log 'gleaming'. Then, on
//    the next line, we return what the expression inputBike evaluates to. In this case,
//    inputBike is simply a variable. That variable is equal to a reference to an object.
//    So inputBike as an expresion will evaluate to that reference, and we then return
//    that reference. So shiningBike is now equal to the same reference that we passed
//    in as our argument to awesomeMechanic.

// By this point, you should be fairly comfortable with how objects and arrays are
// passed by reference, as well as how JS is a very modular language that evalutes each
// expression, then passes along the results of that expression.

// Just to close out, let's confirm that numbers, strings, and booleans are passed
// by value, not by reference.
var numVar = 8;
var num2 = numVar;
// What do you expect numVar to be?
// What do you expect num2 to be?

num2 = num2 + 10;
// What do you expect num2 to be?
// What do you expect numVar to be?
// Can you explain why to your pair?
// Remember, only objects and arrays are passed by reference.

// Here's another example:
var myHeightInInches = 81;
var myMassInKilograms = 81;
// Now, say I move to Mars where there's less gravity, and so I get taller by an inch.
myHeightInInches = 82;
// Do you expect this to have any impact on `myMassInKilograms` value?
// Of course not! The *value* stored by each variable exists totally independent in the
// symbol table area maintained by the JavaScript variable. Each variable gets its own
// separate value, which holds a Number directly.

// All "primitive" data types of JavaScript are passed by value. That's number, string,
// boolean, null, undefined, and symbol (a new ECMAScript 6 data type). The passing
// behavior some of these data types, such as strings and `undefined` is not actually
// by value under the covers, but up here where you write JavaScript source code, it
// is logically indistinquishable from passing by value. You can pass around giant
// strings by value without actually consuming time and memory copying them around
// deep inside the interpreter's inner workings, while still getting the benefit
// of `string1===string2` behaving like it seems it ought to.

// Only objects, which includes arrays and even Strings (character collection objects
// you'll learn about later), are passed by reference. Here's how to keep it straight.
// Think of all variables and object properties as a key-value pair, where the value
// must be a short enough to fit into the symbol table. All the primitives are short
// pieces of data. A JS number is 64 bits of data. A boolean, the null value, and a
// memory reference all fit into 64 bits or shorter. The built-in string (and now symbol)
// data types can be arbitrarily long, thousands, millions, or billions of characters.
// They are the exception. They are passed by reference, but transparently behave as
// if they are passed by value, by magic, or by interpreter specification, whichever you
// find most plausible and mnemonically fertile.
//
// Just think of all variables as holding a value, and JS memory references as a kind
// of value that fits in a variable or object property's value position. Strings are a
// magic kind of value that can be huge but since they live inside their own tardis,
// making them fit entirely inside a single 64 bit data slot. Computer scientists call
// these "immediate values", meaning they exist (or convincingly pretend to exist)
// immediately inside a variable's data slot. Everything but an object is stored as
// an immediate value in a variable or property. An object is stored as a pointer
// (not technically a pointer to a computer scientist, but effectively a pointer) to
// where the object lives in memory. In fact, it these JavaScript references are
// themselves the immediate values that get stored in the interpreter's symbol tables.
//
// This explains why an expression like `string1 === string2` resolves to `true` when the
// actual content matches, but `object1 === object2` is only true when both variables are
// pointing at exactly the same memory address (the selfsame, not just identically populated
// object). The `===` operator compares whatever is in the value slot of a variable,
// property, or constant with another. Since strings and symbols fit by magic within 64 bits,
// they are compared by value. Since objects don't fit, the memory reference is used in the
// compare. If in the (extremely) unlikely event that a 64-bit number happens to exactly
// match the bit pattern of, say, a 64-bit JavaScript object reference, then the `===` will
// evalueate to `true` when comparing these miracle values. However, 2^64 is a huge number,
// so that would "never" happen in the real world. Thinking about this helps gives us a
// visual on what's really stored in a variable's data slot.



// Congrats, you've now finished a slew of exercises on how objects are passed by reference!.
// I'd encourage you to go play with this on your own. If any questions occured to you while
// tackling the exercises, go explore those now. Or just try replicating some of what we did
// above with another example (maybe a chef, instead of a bike mechanic). This is an important
// area of JS, so solidifying it prevents a lot of confusion other engineers wrestle with.
