// Today we're going to use a restaurant kitchen as our example. We're going to have
// a few different areas to our fancy kitchen: `bbqMeatCooker`, `vegetarianCorner`,
// `pastryConcoctions`. Each of these will have its own set of tools. We need to be
// sure they share some things and not others, such as separate cutting boards for
// bbqMeatCooker and vegetarianCorner.

// Think through what you expect the code to do and explain it to your pair, and then
// test it out to see what it actually does. Once you see the results, which may differ
// from your expectations, explain to your pair why we're seeing that behavior.

// First, let's put the name and address of our restaurant in the global scope.
var restaurantName = 'Telegraph Cook';
var address = '1600 Shattuck Ave';

// Next we'll create the vegetarianCorner. We want to hold some variables here that
// are only accessible inside vegetarianCorner, so we can keep it vegan friendly. We
// can keep variables private in JavaScrpt by means of a local scope. The only way
// to create a local scope is with the `var` keyword inside a function body. So we'll
// create a function for our vegetarianCorner.

var vegetarianCorner = function() {
  // We have a dedicated veggie chef (yeah, we're a super fancy restaurant).
  // Our chef has a name
  var chef = 'Amanda';
  // Chef Amanda has a favorite dish
  var favoriteDish = 'saag paneer';

  // What do you expect varible `chef` to be if we console log it on this line?
  console.log(chef);  
  // Explain to your partner the process the JS interpreter will go through to figure
  // out what `chef` is.



  // After you reason through it with your pair, read this detailed explanation:
  //
  // The JS interpreter recognizes `console`, `log` and `chef` all as identifiers (variable
  // or property names). The interpreter finds its variables according to JS rules for variable
  // lookup. Since the line of code `console.log(chef);` is part of the code of vegetarionCorner(),
  // it first looks in the most local scope ~global~vegentarianCorner~ (this twiddle stuff is not
  // JS synax, it's invented punctuation for describing these scopes). If not found there, it
  // checks the next outer scope ~global~ and if not found there, since that's the outermost scope,
  // it decides the variable is not defined. By following these rules, it finds `console` in
  // ~global~ and `chef` in ~global~vegetarianCorner~. The `.` in `console.log` is the dot operator
  // This is a bivalent operator meaning "The expression on the left refers to an object; the
  // expression on the right is a string that conforms to the JS identifier rules and is understood
  // to be a property name stuck right into the code; go look up that property in that object and
  // resolve the whole left-dot-right expression to the value of that property, or `undefined` if
  // not found."
  //
  // These are the steps the interpreter follows from here:
  //
  // 0.  Parse the code `console.log(chef); bla bla bla` and figure out what to do next.
  // 1.  Search the scope ~global~vegetarianCorner~ for a variable named `console`.
  // 2.  Found it in ~global~. It contains a reference to an object in memory.
  // 3.  Search that object you found for a porperty whose key is the string "log".
  // 4.  Found it in there. It contains a reference to a function in memory.
  // 5.  Search the scope ~global~vegetarianCorner~ for a variable named `chef`.
  // 6.  Found it in local scope. It pretends to contain "Amanda". Good enough for me.
  // 7.  Invoke the function found in step 4 with the string 'Amanda' as its argument.
  // 7a. Then a miracle occurs.
  // 8.  The expression `console.log(chef)` means that function's return value `undefined`.
  // 9.  The semicolon marks the end of a statement. Discard that `undefined`. Done.

  // http://star.psy.ohio-state.edu/coglab/Miracle.html
  // Step 7a is where console.log() actually does its business. It's main purpose is to cause
  // a side effect. That side effect is to build up a string message and send it to the console
  // for display to the user (in this case, that's you, the JS jockey). That function always
  // returns no value. It may seem strange to call the main purpose of a function a side effect,
  // but sometimes it's useful to think of it that way. A "pure function" has the property of
  // "idempotence". That's a fancy word that means you can call the function as many times as
  // you want, and the only lasting change is to the clock on the wall. The console.log function
  // stuffs a bunch of characters into the console object, and renders those characters to the
  // user's screen (if the console is showing). Whether we're talking about writing to global
  // variables, changing the user's video display, or controlling a robot welding arm on a
  // factory floor, we're talking about "side effects" from the perspective of "pure functions".
  // You'll find that most functions have side effects in order to be useful. An example of a
  // pure function would be Math.cos(angle). The cosine of an angle is always the same no matter
  // what. In fact, mathemeticians call this "the cosine function" because that's what the word
  // "function" means to a mathematician. Other programming functions, like myArray.push(value)
  // exhibit "side effects" that might reasonably be called "effects". Unless we're being a
  // mathemetician right now, we just think of everything a function is supposed to do as the
  // normal effects of that function.


  // What would we expect address to be at this line?
};
// At this point, there exists a new function somewhere in memory, and a variable `vegetarianCorner`.
vegetarianCorner(); // Execute that function, which is already pointed to by that variable.
// At this point, the code inside the curly braces above will have been executed.


// Now that we're back in the global scope (This code is outside the curly braces above), what is
// in the variable `chef`?
// Explain why to your pair.
// What is in `address` variable? Why?

// ANSWERS:
//
// Both `address` and `chef` exist when the interpreter reaches >HERE<
//
// However, any code outside the vegetarianCorner function cannot see the `chef` variable.
// That variable currently contains the string "Amanda", but it's outside our reach while
// flow control is executing code outside of the function where it was defined. Out here,
// we are in the global function because we're not inside at explicitly defined function
// (this line is not between the curly braces of a `function` keyword structure). Out here,
// we can see all the global variables. In there, we can see all the global variables and
// the "closure variables" of vegetarianCorner. In computer science, a "closure" is a function
// along with its data context, bundled together and carried around as one unit. This is
// subtly different from an object, which also bundles code and other data together. We'll
// leave that distinction aside for now.
//
// In JavaScript, closures are the normal way of doing business. Any variable is part of a
// closure. The global scope is itself a closure, although since it's global, the closure
// concept loses its meaning and works just like a simple programming environment. Any `var`
// statement inside a function definition creates a variable in the namespace associated with
// that function. The word `namespace` means a context in which you can unambiguously use a
// name that is guaranteed to be unique. For example, you might have the name "Susan Smith" and
// around your office, you're "Susan", in your company directory, you're "Smith, Susan", and on
// your tax return, you're "078-05-1120, Smith, Susan". Each of these contexts is a namespace.
// In JavaScript, variable namespaces exist in closures and are totally independent of one
// another. If you want a heirarchical namesace that are shaped like the Smith example , you'd
// use object properties instead of JavaScript variables. For this excercise, we use variables.
//
// Out here, our code can see variable `vegetarianCorner` that currently contains a reference
// to a function, described by the code above. The variable `chef` exists, and its data is
// remembered for as long as the function above continues to exist in memory. Every function
// keeps its own variables. In fact, a JavaScript function is a kind of object. It remembers
// the JS it was given as its mission in life, and it remembers its variable names and their
// content in the same way it remembers its JS code. It also remembers a bunch of other stuff
// that comes with being a JavaScript function. The interpreter just builds all this stuff up
// at runtime and carries it around in memory until the last reference to that function is
// forgotten, leaving the memory space of the function, its variables, and its supporting
// object properties to be eligible for garbage collection when the memory is needed.


// Great! Now let's create the rival bbqMeatCooker section of our kitchen. 

var bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  // Whoa, see what we did there? We have the same variable names in this function as we do in the vegetarianCorner function. Are they going to conflict at all?
  // Talk through this with your pair, then console.log chef and favoriteDish (with labels saying that we're inside bbqMeatCooker) to see the results!
    // If you forget what we mean by labels, check out this slide, and the one below it: http://slides.com/climbsrocks/debugging#/7/3
  
  // Each function body has it's own scope. Variables created in there using the var keyword will ONLY exist within that scope. So everything inside our bbqMeatCooker has absolutely no idea what's happening inside our vegetarianCorner, as long as we use the var keyword. 

  // Our bbqMeatCooker got a bit too smoky to share a kitchen with everything else, so we had to move it out back. 
  var address = 'shed in the back yard at 1600 Shattuck Ave';

  // What happens if we console.log address here? 
    // Explain why to your pair! 
    // My explanation would go something like "the interpreter goes to look up what the address variable is equal to. Just like in our topSecretClearance example, it first looks in it's own scope, before heading out into the broader scopes. While checking in it's own local scope, it finds address! We don't have to look any further, so we log 'shed in the back yard...', and never have to reach out to the global scope to try to find this variable."

  // Ok, we realized pretty quickly that we need something slightly nicer than a shed to house our bbqMeatCooker in. So we move the address again:
  address = '1610 Shattuck Ave';

  // What is address here? What is the process by which it figures that out? Talk through this with your partner- this will likely trip up some of you!
};
bbqMeatCooker();

// Now that we're back in the global scope, what is address here? Have we changed it at all based on what we did inside bbqMeatCooker? 
// Explain why or why not to your pair, then console.log address here (with a label!), and explain why again once you've seen the results. 

// Time to create our next area, pastryConcoctions!
var pastryConcoctions = function() {
  // Our pastry chef is a bit haughty. 
  chef = 'Michael';
  address = '1517 Shattuck Ave';

  // What are the values of chef and address here? 
};
pastryConcoctions();

// What are the values of chef and address here?
  // Explain why to your pair!

// Talk through what happens when we try to access address inside of vegetarianCorner and bbqMeatCooker. 

vegetarianCorner = function() {
  var chef = 'Amanda';
  var favoriteDish = 'saag paneer';
  // What is the value of address here? 
    // Why?
};
vegetarianCorner();

bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  var address = 'shed in the back yard at 1600 Shattuck Ave';
  address = '1610 Shattuck Ave';
  // What is the value of address here? 
    // Why?
  // What is the value of chef here?
    // Why?
  window.chef = 'Raka rules!';
  // What is the window object? What happens when we set properties on it?
  // What is the value of chef right here after that update?
  // 
};
bbqMeatCooker();

// Ok, by now you should have solidified on a couple of key points:
  // 1. Each function body has it's own local scope. 
    // 2. Each function invocation gets it's own scope too, but we'll get to that next :)
  // 3. To create a 'hidden' variable inside that local scope, you must use the var keyword to make sure the variable exists in that local scope.
  // 4. Not using the var keyword modifies global variables. 
  // 5. functions will first look to their own local scope before reaching out to the global scope. If two variables with the same name exist in local and global scope, the function will first find the value in the lcoal scope, and never have to reach outside to the global scope. 
  // 6. The window object is synonymous with global scope. Properties set on the window object are available in the global scope. 

// Whew, that's a lot of learning so far! 
// One of the key uses of scoping and closures is to 'stash' or 'save' a variable for later use. 
// When might this be useful for us?
  // When a variable is changing frequently, and we want to save it's current value. 
  // One example of this is inside for loops. We might want to save what i is for that particular iteration. 
  // If we stash i inside a local scope by passing it into a function, it will get to exist there, untouched and unchanged, until we do something inside that function later on. 
    // There are certain concepts in programming that are incredibly powerful tools for complex situations. 
      // Oftentimes, these concepts seem a bit useless in less complex situations. 
      // This is one of those moments. 
      // Our example below won't go into this level of complexity, but let me illustrate a moment where I used this pattern of using closures to save the current value of i inside a for loop. 
      // And hopefully then you can see how this is a valuable pattern to learn, even if you don't see an immediate use for it. 
        // I was working through a table in a database recently. In that table, we had the locations for each of our users. But the problem was, they just typed in a string of their location ('New York City', 'NYC', 'New York, NY', etc.), rather than latitude and longitude which we could plot on a map. 
        // To get the latitude and longitude, I had to iterate through the entire table, grabbing each row one by one, and then make a request to an external API to get the lat/long for that row. 
        // My connection let me make three concurrent requests, which was great, because I had 60,000 users to go through!
        // But this mean that my value for i, which represented the row number, was changing constantly, and I couldn't count on it being stable by the time I got data back from the external API. 
        // To get around this, I stashed i into a local scope by passing it into a function, and inside that function doing the API call. 
        // Each function invocation gets it's own local scope. You can think of it kind of like a secret, peaceful cave. The rest of the program can be changing like mad, but that doesn't affect things inside our peaceful little cave. 
        // So even though my row number was changing once every millisecond or so, and my API requests took several dozen milliseconds to complete, the value of i that I'd stashed into a local scope, was totally protected, unchanged, stable. 
  // Let's see what this looks like in practice! 

var iSaver = function(index, val) {
  return function() {
    console.log('inside of our closure scope, i is still:',index,'val is:',val);
  };
}

var testArr = [1,2,3,4];

for (var i = 0; i < testArr.length; i++) {
  if(i === 1) {
    var func1 = iSaver(i, testArr[i]);
  }
}
// What is i at this point in our code? 
// console.log('at this point in our code, i is:', i);

// What do you expect to get when we invoke func1?
// func1();

// what iSaver returns to us is a function. Which is really just a fancy object. 
  // We can push objects into arrays, and then access their values, doing something like arr[i].propName. 
  // We can also push fancy function objects into arrays, and then invoke them, doing something like arr[i](). 
    // Remember that JS is super modular.
      // First, it will evaluate the arr variable, which is a link pointing to a certain spot in memory. 
      // Then, it will enter the brackets. 
      // Next, it will evaluate whatever is inside those brackets, and look up the results of that as a property name inside our array. 
        // In this case, it will recognize that i is a variable (since we don't have quotes around it), and evaluate what that variable is equal to. Let's suppose i is 1. 
      // It will then grab the thing at the 1 index position in our array. 
      // Now arr[i] has evaluated to what that thing is in our array. In this case, it is a function. 
      // We can then invoke that function with the open and closed parens (). 

// Let's put that pattern to use!
  // Create an empty array called closureFuncs. 
  // Create a new for loop. 
  // Let's create a new iSaver function for every even i in the array, and push that function into closureFuncs. 
  // Then, once you're done with the entire for loop, log what the value of i is outside the for loop. 
  // And then go through and invoke each function in our closureFuncs array. 
  // Remember, when in doubt, console.log things with labels!
  // What you should see logged out is 
    // 'inside of our closure scope, i is still: 0, val is: 1'
    // 'inside of our closure scope, i is still: 2, val is: 3'
  // Try doing this again with a longer array! Or try building out different logic for what we save into our closure scopes. Generally, do what you can to get comfortable with saving values for future access into closure scopes. 

// Extra Credit: 
// Using the module pattern, create a toaster. 
// The cool part about this is that you get to decide what the user should be able to access/modify, and what we'll keep private from them. 
var toaster = function() {
  //some private properties here
  return {
    // public properties and methods here.
    // Those public methods can access and change the private variables. 
  }
};

// Extra Credit2: 
// Let's imagine you're heading off to a huge family reunion. And you nicely volunteered to make name tags for everyone! Oddly, your family is super well organized, and everyone has the same last name, Thinklestein. 
// Create a function called nameMaker that takes in a first name as it's only argument, and then returns the robotic greeting "Welcome to the party, FIRSTNAME Thinklestein.", where FIRSTNAME is replaced by the person's first name. 
// Now we're going to generalize this: 
// First, let's take the minor step of removing the hard-coded value of 'Thinklestein' from the function, and allow the user to pass in both a first and last name. 
// Next, Create an entirely new function called reunionGreeter. We've found that we're just so good at greeting people at reunions that we decide to expand and do this for more families! reunionGreeter will let us modularize our code to the point we can do this. reunionGreeter takes in a last name, and returns a function that greets people with the first name they pass in. 
