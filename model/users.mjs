import { Linkedlist } from "../data_structure/linkedlist.mjs";
export class User {
  constructor(key, name, lastname, tarikhtavalod, password) {
    this.key = key;
    this.name = name;
    this.lastname = lastname;
    this.tarikhtavalod = tarikhtavalod;
    this.password = password;
    this.cars = new Linkedlist();
  }
  insert(cars) {
    this.cars.append(cars);
  }
  displayCar() {
    this.cars.display();
  }
  toString() {
    return `
national_number = ${this.key}
name = ${this.name}
lastname = ${this.lastname}
tarikhtavalod = ${this.tarikhtavalod}
password = ${this.password}\n`;
  }
}
