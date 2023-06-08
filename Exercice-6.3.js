class Animal {

    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Cat  extends Animal{
    static greeting = "Meow";
    constructor(name) {
      super()
        this.name = name
    }

}

let cat1 = new Cat('Peluche','test')
console.log(cat1.sayHello());