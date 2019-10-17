// Immediately Invoked Function Expression

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

var counter = (function(){
    var i = 0;

    return {
        get: function() {
            return i;
        },
        set: function(val) {
            return i = val
        },
        increment: function() {
            i++;
        }
    }

})();

