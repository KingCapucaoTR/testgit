/**
 * Class        >>     Object
 * (blue print) >>     Instance of the class
 * Employee     >>     Permament
 * 
 * Fields or Properties - what they have
 * Name
 * Position
 * Team
 * 
 * Methods or functions - what they do
 * Develop
 * Deploy
 * Maintain
 * 
 */

 class Employee {
    constructor(_name, _position, _team) {
       console.log("this from the employee class")
       this.Name = _name
       this.Position = _position
       this.Team = _team
   }

   getMyTime(_timespent) {
       //return this.Name + ": 8hrs LitPri"
       return `Parent ${this.Name}: ${_timespent} LitPri`
   }
}

//VB
//Inherit FTE 

//C# 
// class FullTimeEmployee : Employee

//JS
class FullTimeEmployee extends Employee {
    constructor(_name, _position, _team) {
        super(_name, _position, _team)

        this.FTESalary = 10;
    }

    getMyTime(_timespent) {
        //return this.Name + ": 8hrs LitPri"
        return `Child ${this.Name}: ${_timespent} LitPri`
    }
}



//let FTEEmployee = new FullTimeEmployee("king", "dev","tspd")
//console.log(FTEEmployee.getMyTime(8));

//let PartimeEmployee = new Employee("ton", "dev","tspd")
//console.log(PartimeEmployee.getMyTime(8))


//Polymorphism classes have the same method but different implementations
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log('from Animal sound');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        super.makeSound()
        console.log('from Dog sound');
    }
}

let A = new Dog('king')
//A.makeSound()

class PaymentGateway {
    constructor() {
        this.connect()
    }

    connect() {
        //connect to payment provider
    }

    pay(amount) {
        //actual payment
    }
}

class Gcash extends PaymentGateway {
    connect() {
        //connect gcach
    }
    pay(amount) {
        //gcash
    }
}

class Paymaya extends PaymentGateway {
    connect() {
        //connect Paymaya
    }
    pay(amount) {
        //Paymaya
    }
}

class Customer {
    makePayment(gateway, amount) {
        return gateway.pay(amount)
    }
}

const PG = new PaymentGateway()
const GCash = new Gcash()
const PM = new Paymaya()

let King = new Customer()


King.makePayment(GCash, 100)
King.makePayment(PM, 500)
//-----------------------------------------------

var elements = ['aaa', 'bb', 'c'];

function test() {
    elements.map(function(element) {
        return console.log(element.length)
    })
}

const test2 = () => elements.map(element => console.log(element.length))

//test();
//test2();

//HOF
//.map
//.filter
//.reduce

const arr = [1, 2, 3, 4, 5] //data from API

//console.log(arr);
//var dbl = arr.map(num => console.log(num * 2)) 
//var dbl = arr.filter(num => (num > 2)) 
var sum = arr.reduce(((accu, val) => val + accu), 0) //reduce(function, initialValue)
//acc = 0
//val = 1

//1 + 0 
//acc = 1
//2 + 1
//acc = 3
//

//for (int; x>2; x++) {
    //if (num > 2) {
    // display
    //}
//    console.log(x);
//}
//console.log(sum);

//function(num) {
//    return num *2;
//}


var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  let jediPersonnel = personnel.filter((person) => person.isForceUser)
 
  //console.log(jediPersonnel);

  var jediScores = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore)

  //console.log(jediScores);

  var totalScores = jediScores.reduce((acc, score) => (acc + score), 0);

  //console.log(totalScores);

  var jediScore2 = personnel.filter((person) => person.isForceUser).map(jedi => jedi.pilotingScore + jedi.shootingScore);

  //console.log(jediScore2);

  var JediScore3 = personnel.filter((person) => person.isForceUser).map(jedi => jedi.pilotingScore + jedi.shootingScore).reduce((acc, score) => (acc + score), 0);
  //console.log(JediScore3);
 
  var age = 16;
  var canDrive;

  if (age > 15) {
     canDrive = 'yes'
  } else if (age == 15) {
      canDrive = 'student'
  } else {
    canDrive = 'no'
  };

  //console.log(canDrive);

  //condition ? (true) : (false)
  //condition ? (true) : (false ? (true) : (false))
  var canDrive2 = (age > 16) ? 'yes' : (15 == age) ? 'student' : 'no';
  //console.log(canDrive2);

  var married = 3;

  var canDrive3 = age > 15 && 'yes' 
  //console.log(canDrive3);

  //Callback function -- A callback is a function passed as an argument to another function

  //JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
  function myFirst() {
      console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }

  //mySecond();
  //myFirst();



  function myDisplayer(value) {
    console.log(value);
  }

  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  //myCalculator(5, 5, myDisplayer);
  
//Promise
//A Promise is a JavaScript object that links producing code and consuming code
//"Producing code" is code that can take some time
//"Consuming code" is code that must wait for the result
//syntax Promise(<function(success, fail)>).then(<function success>, <function fail>)

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time): ex fetching data from APIs
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  // myPromise.then(
  //   function(value) {console.log(value);},
  //   function(error) {console.log(error);}
  // );

//Async/Await
//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        let x = 0;
       
          if (x == 0) {
            myResolve("OKAY ASYNC");
          } else {
            myReject("Error");
          }
    });

    let result = await myPromise;
    //console.log(result);
  }
  
  //myDisplay();


//   //with API
   let prom = new Promise(function(myResolve, myReject) {
     let res = fetch("https://jsonplaceholder.typicode.com/posts")
     if (res) {
         myResolve(res.then((data) => data.json()))
     } else {
         myReject("error")
     }
   })

  //  prom.then(
  //    function(value) {console.log(value);},
  //    function(error) {console.log(error);}
  //  );


  console.log('fetch------')
  //https://www.youtube.com/watch?v=cuEtnrL9-H0
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  // The Fetch API provides an interface for fetching resources (including across the network). 
  // It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
  // Observation: .Net were app and data are in one solution is now being replace by API+App framework
  //              Fetch API is on the App part
  //              Jquery AJAX is different from fetch API, though same function
  
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  //syntax
  //fetch(<url>,{optional object params})
  
  //just clg the fetch
  console.log(fetch('https://reqres.in/api/users')); 
  //this returns Promise -- have a response to it with additional data like ok, status, body, url etc.
  //fetch is promise base in where we can use the async-await or .then-catch
  //we should know the Promise and async-await before before using the fetch
  
  console.log('------')
  console.log(fetch('https://reqres.in/api/users').then(res => console.log(res))); 
  //return just the response data
  //the body which contains that data is not yet accessible fromthe response object
  
  console.log('------')
  console.log(fetch('https://reqres.in/api/users')
              .then(res => res.json()) //res.json() returns a promise
              .then(data => console.log(data))
              //.catch(error => console.log('ERROR'))
              ); //we then use another .then to access the data
  //say we want to get specific item /users/23, we will get 404 response (fail), fetch always succeed no matter what unless the actual fetch function is having issues,but not with the api
  console.log('------')
  console.log(fetch('https://reqres.in/api/users/23')
              .then(res => {
                if (res.ok) {
                  console.log('SUCCESS') //the API should return the right message for failure response
                } else {
                  console.log('FAIL')
                }
              }) 
              .then(data => console.log(data))
              .catch(error => console.log('ERROR'))
              );
  
  //BUT obviously we dont only GET data from the API server, we need to do a full CRUD
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  console.log('------')
  console.log(fetch('https://reqres.in/api/users',{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( { //body normally comes from html form 
          name: 'User 1' //this will not be save properly, check the console log -- no 'name' only new id, even we do a JSON.stringify
        }) // body data type must match "Content-Type" header, you will need to tell the fetch that you are passsing in JSON via headers
      })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')));
    
  
  console.log('async------')
  //using async-await for cleaner look
  async function getData2() {
    const res = await fetch('https://reqres.in/api/users')
    const dt = await res.json()
    return dt
  }
  
  getData2().then(data => console.log(data))

