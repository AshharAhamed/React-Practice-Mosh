/**
 * Function
 * var -> can use in the function
 * let -> can be used inside the code block
 * const -> used to define the constant accessible inside the block. so it is like let but its cannot re assign
 */
function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
sayHello();

const person = {
    name: "Ashhar",
    walk: function () {
        console.log(this);
    },
    talk() { }//ES6
};

person.talk();

const targetMember = 'name';
person['name'] = 'Ahamed';

console.log(targetMember);
person[targetMember] = 'Nasreen';

console.log(person['name']);

/**
 * returning the person object
 */
person.walk();

const walk = person.walk;

console.log(walk);

/**
 * call window object
 */
walk();

const walk1 = person.walk.bind(person);

console.log(walk1);

/**
 * call person object bcs we bind the person object to the method. so this will refer to the person object.
 */
walk1();


/* ------------------Arrow Function---------------------------------------*/
/**
 * 
 * @param {*} number 
 * classical function
 */
const square = function (number) {
    return number * number
}

/**
 * 
 * @param {*} number 
 * if zero parameters we use () empty parenthesis
 * one params does not need a parenthesis (number)
 * if body is contain only single line we can remove curly parenthesis
 */
const square2 = number => number * number;

console.log(square(5));
console.log(square2(5));

const jobs = [
    { i: 1, isActive: true },
    { i: 2, isActive: true },
    { i: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) { return job.isActive });
const activeJobs1 = jobs.filter(job => job.isActive);

console.log(activeJobs);
console.log(activeJobs1);
/* --------------------------------------------------------------------------*/

const person3 = {
    name: "Ashhar",
    walk: function () {
        console.log(this);
    },
    talk() {
        var self = this;
        setTimeout(function () {
            console.log("this person3 timout", this);
            console.log("this person3 timout self", self);
        }, 1000);

        setTimeout(() => {
            console.log("this person3 timout arrow function", this);
            // console.log("this person3 timout self", self);
        }, 2000);
        // console.log("this person3 ", this);
    }//ES6
};

person3.talk();