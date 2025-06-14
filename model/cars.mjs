export class Cars {
  constructor(carCode, name, year, plateNumber, color, ownerCar) {
    this.name = name;
    this.year = year;
    this.carCode = carCode;
    this.plateNumber = plateNumber;
    this.color = color;
    this.ownerCar = ownerCar;
  }

  tostring() {
    return `
    car name = ${this.name};
    year = ${this.year};
    car code = ${this.carCode};
    plate Number = ${this.plateNumber};
    color = ${this.color}
    `;
  }
}
