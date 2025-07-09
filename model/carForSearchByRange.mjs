export class searchByRangeCars{
    constructor(name , year , color , plateNumber){
        this.name = name;
        this.year = year;
        this.color = color;
        this.plateNumber = plateNumber;
    }
    toString(){
        return `
        name = ${this.name} 
        year = ${this.year}
        plate number = ${this.plateNumber}
        `
    }
}