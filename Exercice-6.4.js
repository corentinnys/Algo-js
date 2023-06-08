class Person {
    constructor(firstName,lastName) {
        this.firstname = firstName
        this.lastName = lastName
    }
    get getFullname() {
        return this.firstname+' '+this.lastName;
    }
    set setFullName(name)
    {
        let fullName = name.split(' ')

        this.firstname= fullName[0];
        this.lastName= fullName[1];
    }

}

let person = new Person('Jean','Neymar');
console.log(person.getFullname);
person.setFullName ='Jean marc';
console.log(person.getFullname);