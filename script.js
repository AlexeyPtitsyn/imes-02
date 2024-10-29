(function() {

  // Task 1
  function isPositiveOrNegative(num) {
    num > 0 ? console.log('positive') : num < 0 ? console.log('negative') : console.log('zero!');
  }

  isPositiveOrNegative(2);
  isPositiveOrNegative(-10);
  isPositiveOrNegative(0);

  // Task 2
  const arr = [...new Array(10)].map((_, num) => num); // create array with numbers 0-9
  
  for(let i = 0; i< arr.length; i++) {
    console.log(`Array item ${i}, value: ${arr[i]}. Value * 2 = ${arr[i]*2}`)
  }

  // Task 3
  class Person {
    name = null;
    age = 0;

    constructor(name = 'Ada Byron', age = 20) {
      this.name = name;
      this.age = age;
    }

    printPerson() {
      console.log(`A person ${this.name}, age ${this.age}`);
    }
  }

  const person1 = new Person('Alexey', 24);
  const person2 = new Person('Igor', 20);
  const person3 = new Person();

  person1.printPerson();
  person2.printPerson();
  person3.printPerson();
})();
