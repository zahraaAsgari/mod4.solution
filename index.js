(function() {
    var names = ["Zahra", "John", "Jack", "Jason", "Amin", "Sarah", "lara", "Jimy"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLocaleLowerCase();

        if (firstLetter === 'j') {
            byePerson(names[i]);
        } else {
            helloPerson(names[i]);
        }
    }
})();