(function(window) {
    var greeting = "Hello";
    var helloPerson = function(name) {
        console.log(greeting + " " + name);
    }
    window.helloPerson = helloPerson;
})(window);