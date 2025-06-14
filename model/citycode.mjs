export class City {
  constructor(cityCode, cityName) {
    this.cityCode = cityCode;
    this.cityName = cityName;
  }

  tostring() {
    return `
city name  = ${this.cityName}
city code = ${this.cityCode}

        `;
  }
}
