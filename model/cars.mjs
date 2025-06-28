export class Cars {
  constructor(carCode, name, year, plateNumber, color, ownerCar) {
    this.name = name;
    this.year = year;
    this.key = carCode;
    this.plateNumber = plateNumber;
    this.color = color;
    this.ownerCar = ownerCar;
    
  }

  toString() {
    return `
    car name = ${this.name};
    year = ${this.year};
    car code = ${this.key};
    plate Number = ${this.plateNumber};
    color = ${this.color}
    `;
  }
}
