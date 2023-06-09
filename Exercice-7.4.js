
const readlineSync = require("readline-sync");
var fs = require('fs');
class Pizza {
     pizza={
        favor:[],

    };

    add() {
        let  responseUser =readlineSync.question(" your favor pizza ? ");
        this.pizza.favor.push( responseUser);
    }
    remove(){
        for (let [key, value]  of Object.entries(this.pizza.favor)){
            console.log(key +' '+value)
        }
        let responseUser =parseInt(readlineSync.question(" romove ? "))
        this.pizza.favor.splice(responseUser,1);
        console.log(this.pizza.favor);

    }
    toList() {
        for (let items of this.pizza.favor) {
            console.log(items)
        }
    }

    listItems()
    {
        return this.pizza.favor.join(' ')
    }


}


let pizza = new Pizza()
let responseUser =0 ;
    while(responseUser != 4)
    {
        console.log('Hello! Welcome to the Pizza Flavors Manager.')
        console.log('Please choose your actions:')
        console.log('1 - List all the pizza flavors')
        console.log("2 - Add a new pizza flavor")
        console.log("3 - Remove a pizza flavor")
        console.log("4 - Exit this program")
        let responseUser =parseInt(readlineSync.question(" Enter your action's number ? "));
        if (responseUser == 4){

            fs.appendFile('mynewfile1.txt', pizza.listItems(), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
              break;
        }
        switch (responseUser) {
            case 1:
                pizza.toList();
                break;
            case 2:
                pizza.add();
                break;
            case 3:
                pizza.remove()
                break;
        }


    }



