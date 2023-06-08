
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastName = lastname
    }
    sayHello(){
        return "Hello "+ this.firstname+' ' + this.lastName;
    }

}

let jean = new Person('Jean','nemard');
console.log(jean.sayHello());