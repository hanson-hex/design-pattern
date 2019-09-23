// class People {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     alert(`${this.name} eat something`)
//   }
// }
//
// class Student extends People {
//   constructor(name, age, number) {
//     super(name, age)
//     this.number = number
//   }
//   study() {
//     alert(`${this.name} study`)
//   }
// }
//
// class Car{
//   constructor (number, name) {
//     this.number = number
//     this.name = name
//   }
// }
//
// class KCar extends Car {
//   constructor (number, name) {
//     super(number, name)
//     this.price = 1
//   }
// }
//
// class Trip {
//   constructor (car) {
//     this.car = car
//   }
//   start () {
//     alert(`车牌号为:${this.car.number} 名称为:${this.car.name}的车子出发了`)
//   }
//   end () {
//    alert(`总金额是${this.car.price * 5} 元`)
//   }
// }
//
// class ZCar extends Car {
//   constructor(number, name) {
//     super(number, name)
//     this.price = 2
//   }
// }
//
// var kCar = new KCar('1', 'baoma')
// var trip = new Trip(kCar)
// trip.start()
//
// setTimeout(function() {
//   trip.end()
// }, 2000)


