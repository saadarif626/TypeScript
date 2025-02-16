"use strict";
function createUser(user) {
    return user;
}
let newUser = {
    id: 90,
    email: "saad@mailinator.com",
    name: "Saad",
    isActive: false
};
let newCreatedUser = createUser(newUser);
console.log(newCreatedUser);
function processInput(input) {
    if (typeof input === 'number') {
        return `Number: ${input.toString()}`;
    }
    else {
        return `String: ${input}`;
    }
}
console.log(processInput(42));
console.log(processInput("hello"));
// *****************************~Q#3~**************************
class vehicle {
    constructor(m, mod, year) {
        this.make = m;
        this.model = mod;
        this.year = year;
    }
    get getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
let newvehicle = new vehicle("suzuki", "alto", 2025);
console.log(newvehicle);
class Car extends vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    get getInfo() {
        return `${super.getInfo} with ${this.doors} doors`;
    }
}
let carDoor = new Car("suzuki", 'alto', 2024, 4);
console.log(carDoor);
class Motorcycle extends vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    get getInfo() {
        const sidecarInfo = this.hasSidecar ? 'with sidecar' : 'without sidecar';
        return `${super.getInfo} ${sidecarInfo}`;
    }
}
let sidecar = new Motorcycle("suzuki", 'alto', 2024, true);
console.log(sidecar);
let car = new Car("Toyota", "Camry", 2020, 4);
console.log(car.getInfo);
let motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021, true);
console.log(motorcycle.getInfo);
// *****************************~Q#4~**************************
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    get getBalance() {
        return this.balance;
    }
    get getAccountNumber() {
        return this.accountNumber;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds for withdrawal");
        }
        this.balance = amount;
    }
}
const account = new BankAccount("1234567890", 1000);
console.log(account);
account.deposit(500);
console.log(`Balance after deposit: ${account.getBalance}`);
account.withdraw(200);
console.log(`Balance after withdrawal: ${account.getBalance}`);
try {
    account.withdraw(2000);
}
catch (error) {
    console.log(error.message);
}
// *****************************~Q#5~**************************
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    // For area of circle following formula will be applied "A = \pi r^2"
    //Math.PI for value of pi
    calculatedArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle = new Circle("red", 5);
console.log(`Circle color: ${circle.getColor()}`);
console.log(`Circle area: ${Math.round(circle.calculatedArea())}`);
// For area of circle following formula will be applied "A=width*length"
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculatedArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle("blue", 4, 7);
console.log(`Rectangle color: ${rectangle.getColor()}`);
console.log(`Rectangle area: ${Math.round(rectangle.calculatedArea())}`);
//# sourceMappingURL=app.js.map