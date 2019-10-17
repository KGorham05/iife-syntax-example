// Immediately Invoked Function Expressions

// regular function
function increment(i) {
    return i + 1;
}

// function expression 
var increment = function(i){
    return i + 1;
}

increment(i);

// other code

increment(i);

// if you only want to call the function once, immediately after creating it
// you can:

(function(i){
    return i + 1;
})(j);

// j (outer argument) passes as i (inner argument)
// this is an anonymous function. 

// Alternate syntax

(function(i){
    return i + 1;
}(j));

!function(){/* code here */}();
~function(){/* code here */}();
-function(){/* code here */}();
+function(){/* code here */}();

// Why would we use this?

// Minifying it
// Scope lookup
// takes a global variable and scopes it locally
(function($){

    $(this).addClass('MyClass');

})(window.JQuery);

// example of creating our own js library

// this is immediately invoked, whatever it returns, it copies into the counter variable
// inside this function, there is a private variable, i, = to 0
// and the function returns an object with 3 methods. 
// this is also a closure
// which means if you tried to use i outside, it wouldnt work. 

var counter = (function(){
    var i = 0;

    return {
        // returns i
        get: function() {
            return i;
        },
        // set i = the variable passed
        set: function(val) {
            return i = val
        },
        // increment i by 1 
        increment: function() {
            i++;
        }
    }

})();

// obj methods available by counter.
console.log(counter.get()); // i = 0
counter.set(5); // i = 5
counter.increment(); // i++
console.log(counter.get()); // i = 6