var c="Anand";

c= "Ayush";

console.log(c);


// normal function


function sayName(name){
    console.log(name);
}

sayName("Anand");

// arrow function 

let sayNameA = (nameA) =>{
    console.log(nameA);
}
sayNameA("hh");

let sayNameB = nameA => nameA;
console.log(sayNameB("hhB"));

// Export and Import (Modules)

import {hello } from './sell.js';

hello();

import {data as da} from './sell.js';

console.log(da);


import * as bundle from './sell.js';

bundle.hello();
console.log(bundle.data);


import ps from './customer.js';

console.log(ps);



// oops concept 
// class and object

class customers{
    constructor(n){
        this.name  = n;
    }
    buy()
    {
        console.log("Hello .......");
    }

}

let customer1 = new customers("Anand");

console.log(customer1);

customer1.buy();

class guestC extends customers{


    hello()
    {
        console.log("Helloooooo");
    }
}

let customer2 = new guestC("Anand");

console.log(customer2);
customer2.hello();


// spread and rest operator (...)


///    spread /////

let list = ["Audi", "Honda", "BMW"];

let newlist = [...list, "ferrari"];

console.log(newlist);




let person = {
    name : "Anand",    age : 19,
}

let newPerson = {
    ...person,
    city : "Delhi",
}

console.log(newPerson);



   //// rest operator ////

function helloP(...all){

    console.log(all);
}

helloP(1,2,3);



// //  Array destructuring  // //

let listP = ["Audi", "Honda", "BMW"]; 

let [car1, car2, car3] = listP;

console.log(car3);


// // object destructuring // //

const person3 = {
    name : "Anand",
    age : 25
}

let {name, age} = person3;

console.log(name);
console.log(age);


// // refrence and premitive types // //


// string and  number  (premitive type)

// refrence type (array, object)


let n1= 100;

let n2= n1;

n2 = 50;

console.log(n1);
console.log(n2);


/// refrence ///

let person4 = {
    name : "Anand"
}

let person5 = person4;

//person5.name = "Ajit";

console.log(person5);
console.log(person4);

//  map function 

let array1 = [2,5,7,10];

let array2 = array1.map(function(x){
    return x*2;
});

console.log(array2);

let array3 = array2.map(x=>x*x);

console.log(array3);


/// filter function

let array4 = array1.filter(x=> x%2==0 )

console.log(array4);