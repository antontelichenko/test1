// Написать класс Dog, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
// Пример использования:
// var dog = new Dog ('Aban');
// dog.getName () === 'Aban'; // true
// dog.bark () === 'Dog Aban is barking'; // true

// ES6

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   getName() {
//     return this.name;
//   }
//
// }
//
// class Dog extends Animal {
//   bark() {
//     return `Dog ${this.name} is barking`;
//   }
// }
// var dog = new Dog('Aban');
// console.log(dog.getName() === 'Aban');
// console.log(dog.bark() === 'Dog Aban is barking');

// Prototype version


// var Animal = function (name) {
//   if (this instanceof Animal) {
//     this.name = name;
//   } else {
//     return new Animal(name);
//   }
// };
//
// Animal.prototype.getName = function () {
//   return this.name;
// };
//
//
// var Dog = function (name) {
//   if (this instanceof Dog) {
//     Animal.apply(this, arguments);
//   } else {
//     return new Dog(name);
//   }
// };
//
// Dog.prototype = Object.create(Animal.prototype);
//
// Dog.prototype.bark = function () {
//   return `Dog ${this.name} is barking`;
// }
// var dog = new Dog('Aban');
// console.log(dog.getName() === 'Aban');
// console.log(dog.bark() === 'Dog Aban is barking');