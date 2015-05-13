// Let's do a quick review of functions. 
// Remember that a function is just a block of code that we've created but not invoked yet. 
// An analogy for this is a recipe. Writing a function is like writing a recipe. Invoking a function is like actualy baking that recipe. 
// 1. Let's create a function called breadMaker. This function takes in a single argument, and then console.logs 'mmm, fresh baked ' + argName + ' bread.'
// Obviously, you won't see anything appear in your console because we haven't invoked it yet!
// 2. Now let's create an array with four different ingredients in it. Mine would be ['quinoa','banana','zucchini', 'guacamole']. Clearly I'm not much of a breadbaker!
// 3. Using a for loop, invoke breadMaker on each item in the array. What do you see in your console?
// At this point, you might be kind of bored. Because this is exactly what we've been doing all along. That's great! Because this leads us super easily into functional programming. 
// 4. Let's go through and refactor our code in a couple different ways. 
  // A. Create a very basic function called funcInvoker. This isn't a smart or complex function, it just has one simple task. It's going to have two parameters: funcToInvoke, and argToInvokeWith. As you may have already guessed, funcToInvoke is a function (any function!) that the user passes in to us. And argToInvokeWith is an argument (any argument!) that the user gives us to invoke that function with. All our basic little function has to do is invoke funcToInvoke with argToInvokeWith. 
    // Example invocation: 
    var addToTen = function(num1) {
      console.log('just invoked addToTen with',num1,'and 10, resulting in', 10 + num1);
    };
    funcInvoker(addToTen, 5); //'just invoked addToTen with 5 and 10, resulting in 15'
  // This might not seem like much, and in fact, that's the point! This is functional programming: you passed a function into another function as an argument. That's all it takes. 
  // 