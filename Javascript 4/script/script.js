class Person {

    constructor(firstName, lastName, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age - age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;

        }
        else {
            console.error("First name must be a non-empty string")
        }
    }

}

const person = new Person(420, 69, "pizza");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);