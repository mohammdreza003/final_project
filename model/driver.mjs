export class driverNode{
    constructor(key , driverId , licenseDate){
        this.key = key;
        this.driverId = driverId;
        this.licenseDate = licenseDate
        this.status = true;
    }
    toString(){
        return `
        national id = ${this.key},
        driver id = ${this.driverId},
        license date = ${this.licenseDate},
        status = ${this.status}
        `
    }
}