function Employee(fn, ln, branch, pos) {
    this.firstName = fn; // The this keyword refers to the object itself
    this.lastName = ln;
    this.branch = branch;
    this.position = pos;
    this.name = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

// Objects are then instantiated using the new keyword
let emp = new Employee('Maike', 'Paetzel', 'Uppsala', 'PhD Student');

console.log( emp.name() ); // Output: Maike Paetzel
