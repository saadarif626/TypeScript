// *****************************~Q#1~**************************
interface User{
    id: number
    email:string
    name:string
    isActive:boolean
}
function createUser(user:User):User{
    return user
}
let newUser: User={
    id:90,
    email:"saad@mailinator.com",
    name:"Saad",
    isActive:false
 }
 let newCreatedUser=createUser(newUser)
 console.log(newCreatedUser)

 // *****************************~Q#2~**************************

type Input = number | string;
function processInput(input: Input): string {
  if (typeof input === 'number') {
    return `Number: ${input.toString()}`;
  } else {
    return `String: ${input}`;
  }
}
console.log(processInput(42));         
console.log(processInput("hello"));   

 // *****************************~Q#3~**************************
 class vehicle{
    make: string;
    model:string;
    year:Number;
     constructor(m:string,mod:string,year:Number){
        this.make=m;
        this.model=mod;
        this.year=year;
 }
 get getInfo(){
  return `${this.year} ${this.make} ${this.model}`;
}
 }
 let newvehicle=new vehicle("suzuki","alto",2025)
 console.log(newvehicle)

 class Car extends vehicle{
    doors: number;
    constructor(make: string, model: string, year: number, doors: number) {
      super(make, model, year); 
      this.doors = doors;
    }
  
   get getInfo() {
      return `${super.getInfo} with ${this.doors} doors`;
    }
  }

  let carDoor= new Car("suzuki",'alto',2024,4)
  console.log(carDoor)
  class Motorcycle extends vehicle {
    hasSidecar: boolean;
  
    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
      super(make, model, year);
      this.hasSidecar = hasSidecar;
    }
    get getInfo(): string {
      const sidecarInfo = this.hasSidecar ? 'with sidecar' : 'without sidecar';
      return `${super.getInfo} ${sidecarInfo}`;
    }
  }
  let sidecar=new Motorcycle("suzuki",'alto',2024,true)
  console.log(sidecar)

 let car = new Car("Toyota", "Camry", 2020, 4);
  console.log(car.getInfo); 

  let motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2021, true);
  console.log(motorcycle.getInfo);

  // *****************************~Q#4~**************************

  class BankAccount {
    private balance: number;
    private readonly accountNumber: string;
    constructor(accountNumber: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.balance = initialBalance;
    }
  
    get getBalance(){
      return this.balance;
    }
  
   get getAccountNumber() {
      return this.accountNumber;
    }
  

    deposit(amount: number) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
      }
      this.balance += amount;
    }
  
    withdraw(amount: number) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds for withdrawal");
      }
      this.balance = amount;
    }
  }
  const account = new BankAccount("1234567890", 1000);
  console.log(account)
  
  account.deposit(500);
  console.log(`Balance after deposit: ${account.getBalance}`); 

  account.withdraw(200);
  console.log(`Balance after withdrawal: ${account.getBalance}`);
  try {
    account.withdraw(2000);
  } catch (error:any) {
    console.log(error.message); 
  }
  
  
  // *****************************~Q#5~**************************
abstract class Shape {

  protected color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract calculatedArea():number;

  getColor(): string {
    return this.color;
  }
}
class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color); 
    this.radius = radius;
  }

  // For area of circle following formula will be applied "A = \pi r^2"
  //Math.PI for value of pi
  calculatedArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
const circle = new Circle("red", 5);
console.log(`Circle color: ${circle.getColor()}`);
console.log(`Circle area: ${Math.round(circle.calculatedArea())}`); 

// For area of circle following formula will be applied "A=width*length"
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color); 
    this.width = width;
    this.height = height;
  }

  calculatedArea(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle("blue", 4, 7);
console.log(`Rectangle color: ${rectangle.getColor()}`); 
console.log(`Rectangle area: ${Math.round(rectangle.calculatedArea())}`);
