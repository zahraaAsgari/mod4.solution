(function(window) {
    var greeting = "Good Bye";
    var byePerson = function(name) {
        console.log(greeting + " " + name);
    }
    window.byePerson = byePerson;
})(window);