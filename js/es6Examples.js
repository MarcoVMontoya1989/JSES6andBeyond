// // blocks and IIFE
//
// // es6 IIFE style
// {
//     let a = 112;
//     const b = 234;
// }
//
// console.log(a+b);
//
// // ES5
// (function () {
//     //do something
// })();
//
// //----------------------------------------
//
// //Strings ES6 with template literal backticks
//
// let name = 'John';
// let lastname = 'Montoya';
// let yearbirth = 1990;
//
// function calculateBirth(value) {
//     return 2019 - value;
// }
//
// console.log(`This is ${name} and his lastname is ${lastname} and he have ${calculateBirth(yearbirth)}`);
//
// const n = `${name} ${lastname}`;
// n.startsWith('J');
// n.endsWith('ya');
// console.log(`${name}`.repeat(123));
//
//
// //------------------------------------------
//
// // Arrow functions
//
// const years = [1989,1990,1950,2000,1988];
//
// //ES5
// var ages5 = years.map(function (el) {
//     return 2019 - el;
// });
//
// console.log(ages5);
//
// // ES6
// const years = [1989,1990,1950,2000,1988];
// let ages6 = years.map(el => 2019 - el);
// console.log(ages6);
//
// ages6 = years.map((el, index) => `Age element ${index + 1 } ${2019 - el}.`);
// console.log(ages6);
//
// ages6 = years.map((el, index )=> {
//    const nowYear = new Date().getFullYear();
//    const age = nowYear - el;
//
//     return `Age element ${index + 1 } ${age}.`;
// });
//
//

// var es5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//       var self = this;
//       document.querySelector('.green').addEventListener('click', function () {
//           var str;
//           str = 'This box number ' + self.position + ' and it is ' + self.color;
//           alert(str);
//       });
//   }
// };

// es5.clickMe();


// const es6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green').addEventListener('click', () => {
//             let str;
//             str = `This box number ${this.position} and it is ${this.color}`;
//             alert(str);
//         });
//     }
// };
//
// es6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// ES5
// Person.prototype.newFriend = function (friends) {
//     var arr = friends.map(function (el) {
//         return self.name + ' is friends with ' + el;
//     }.bind(this));
//
//     console.log(arr);
// };
//
// var friends = ['Kim Jong', 'Kwang Soo', 'Jae Suk', 'Jing Suk', 'Su Min'];
//
// new Person('marco').newFriend(friends);

//ES6

// Person.prototype.newFriend = function (friends) {
//     let arr = friends.map(el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// };
//
// const friends = ['Kim Jong', 'Kwang Soo', 'Jae Suk', 'Jing Suk', 'Su Min'];
//
// new Person('marco').newFriend(friends);

// DESTRUCTURING
//es5
var marco = ['marco', 30 ];
var name = marco[0];
var age = marco[1];


//es6
const [name6, age6] = ['Marco', 30];
console.log(name6, age6);

const obj = {
  firstName: 'Marco ES6',
  currentAge: 40
};

// NOTE: MUST BE WITH THE SAME NAME FROM THE ORIGINAL OBJ OR WILL BE UNDEFINED
const {firstName, currentAge} = obj;
console.log(firstName, currentAge);

//NOTE IF YOU WANT A DIFFERENT NAME OF THE VARIABLE DO THIS:
const {firstName: testa, currentAge: testb} = obj;
console.log(testa, testb);


//----------------------------------------------------------------------------------

//Array

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArrayES5 = Array.prototype.slice.call(boxes);
boxesArrayES5.forEach(function (current) {
  current.style.backgroundColor = 'dodger blue'
});

for (var i = 0; i < boxesArrayES5.length; ++i) {
  if (boxesArrayES5[i].className === 'box blue') {
    continue; //This will just skip when the condition meets and will do nothing
  }

  boxesArrayES5[i].textContent = 'I transformed to blue';
}

//ES6

let boxesArrayES6 = Array.from(boxes);
boxesArrayES6.forEach(curr => curr.style.backgroundColor = 'red');

for(const curr of boxesArrayES6) {
  if (curr.className.includes('blue')) {
    continue;
  }

  curr.textContent = 'fuck you';
}

var agesArr = [12,25,47,50,8,35];

var full = agesArr.map(function (curr) {
  return curr >= 18;
});

console.log(full);

console.log(full.indexOf(true));
console.log(agesArr[full.indexOf(true)]);

console.log('------------ES6---------------');
console.log(agesArr.findIndex(curr => curr >= 18));
console.log(agesArr.find(curr => curr >= 19));

//----------------------------------------------------------------------------------

//TODO: DESTRUCTURING

function calculateRetirement(year) {
  const age = new Date().getFullYear() - year;

  // [age, retirement]
  return [age, (`You will retire in ${65 - age} years`)]
}

const [age2, retirement] = calculateRetirement(1989);
console.log(age2);
console.log(retirement);

//----------------------------------------------------------------------------------
// TODO: Spread Operator

const agesCalculator = function (a,b,c,d) {
  return a+b+c+d;
};

// ES5
let sum1 = agesCalculator(1,2,3,4);
console.log(sum1); // result 10

const arraytest = [1,2,3,4];
let sum2 = agesCalculator.apply(null, arraytest);
console.log(sum2); // result 10

// ES6
const maxES6 = agesCalculator(...arraytest);

const familyMiller = ['test1', 'test2', 'test3'];
const familyMontoya = ['marco', 'miryam', 'viann'];

const bigFamily = [...familyMiller, ...familyMontoya];
console.log(bigFamily);

//To save all selectors in one array to use the spread

const h = document.querySelector('h1');
const boxesAll = document.querySelectorAll('.box');

const all = [h, ...boxesAll];

Array.from(all).forEach(el => el.style.color = 'purple');

//----------------------------------------------------------------------------------

//TODO: Rest Parameter

//ES5

function FullAgeCalculator() {
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (current) {
    console.log((2019 - current) >= 18);
  })
}

FullAgeCalculator(1990, 2010, 1989);
FullAgeCalculator(1990, 2010, 1989, 1980, 2000);

function isFullAgeRestParameter(...yearsRest) {
  console.log(yearsRest);
  yearsRest.forEach(curr => console.log((2019 - curr) >= 19));
}

isFullAgeRestParameter(1989,2000,1950,2010);

//---------------------------ANOTHER EXAMPLE

function FullAgeCalculator2(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function (current) {
    console.log((2019 - current) >= limit);
  })
}

FullAgeCalculator2(21,1990, 2010, 1989);
FullAgeCalculator2(18, 1990, 2010, 1989, 1980, 2000);

function isFullAgeRestParameter2(limit, ...yearsRest) {
  console.log(yearsRest);
  yearsRest.forEach(curr => console.log((2019 - curr) >= limit));
}

isFullAgeRestParameter2(21,1989,2000,1950,2010);

//----------------------------------------------------------------------------------

//TODO: Default Operator

function smithPerson(firstName, yearOfBirth, lastName, nationality) {

  firstName === undefined ? firstName = 'Smith' : firstName;
  lastName === undefined ? lastName = 'Smith' : lastName;
  yearOfBirth === undefined ? yearOfBirth = 2000 : yearOfBirth;
  nationality === undefined ? nationality = 'Canadian' : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

let marco123 = new smithPerson('marco', 1989);

function smithPersonES6(firstName, yearOfBirth = 2000, lastName = 'Smith', nationality = 'Canadian') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

let marco2 = new smithPersonES6('marco', 1989);

//-------------------------------------------------------------------------------

//TODO: JS MAP

let question = new Map();
question.set('Questions', 'What is my favourite korean singer');
question.set(1, 'Hyuna');
question.set(2, 'Kim Kong Jong');
question.set(3, 'Sunny');
question.set(4, 'UI');
question.set(5, 'Ha Ha');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Incorrect answer!');

console.log(question.get('Questions'));
console.log(question.size);

if (question.has(2)) {
  question.delete(2);
}

question.clear();

question.forEach((key, value) => console.log(`This is ${key} and it's set to ${value}`));

console.log(question.get('Questions'));

for (let [key, value] of question.entries()) {
  if (typeof(key)=== 'number') {
    console.log(`Answer: ${key} ${value}`);
  }
}

let answer = parseInt(prompt('Select the correct answer'));
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// }
console.log(question.get(answer === question.get('correct')));

//-------------------------------------------------------------------------------

// class createNewPersonES6 {
//   constructor(name, birthYear, job) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//   }
//
//   calculateAge() {
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
//   }
//
//   static greeting() {
//     console.log('Hey There');
//   }
// }

let marcoClass = new createNewPersonES6('marco', 1989, 'developer');
marcoClass.calculateAge();

//To call the Static Function
createNewPersonES6.greeting();

var PersonES5 = function(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lasName = lastName;
  this.birthYear = birthYear;
};

PersonES5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

var marcoES5Class = new PersonES5('marco', 'montoya', 1989);
marcoES5Class.calculateAge();

var Athletes = function (firstName, lastName, birthYear, olympicGames, medals) {
  PersonES5.call(this, firstName, lastName, birthYear);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athletes.prototype.wonMedals = function () {
  this.medals++;
  console.log(this.medals);
};

Athletes.prototype = Object.create(PersonES5.prototype);

var newAthlete = new Athletes('marco', 'montoya', 1989, 'runner', 12);
newAthlete.calculateAge();
newAthlete.wonMedals();
//---------------------------------

class createNewPersonES6 {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
  }
}

class AthletesES6 extends createNewPersonES6 {
  constructor(name, birthYear, job, olympicGames, medals) {
    super(name, birthYear, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedals() {
    this.medals++;
    console.log(this.medals);
  }
}

let marcoAthlete = new AthletesES6('marco', 1989, 'developer', 'swimmer', 1);
marcoAthlete.calculateAge();
marcoAthlete.wonMedals();