function Person(first, last, dob) {
    this.first = first;
    this.last = last;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.first} ${this.last}`
};

const person_1 = new Person('Misha', 'Ivanovskii', '02-21-2002'); 
console.log(person_1.dob.getDate());
console.log(person_1.getBirthYear(), person_1.getFullName());

// class

class Person_1 {
    constructor(first, last, dob){
        this.first = first;
        this.last = last;
        this.dob = new Date(dob);    
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.first} ${this.last}`;
    }
}

const person_2 = new Person_1('Malina', 'KLeintje', '03-12-2020');
console.log(person_2);
