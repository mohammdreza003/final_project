export class penaltiesNode{
    constructor(key ,DriverID ,PlateNumber ,PenaltyDate ,PenaltyLevel , Description){
        this.key = key;
        this.driverId = DriverID;
        this.plateNumber = PlateNumber;
        this.penaltyDate = PenaltyDate;
        this.penaltyLevel = PenaltyLevel;
        this.description = Description;
    }
    toString(){
        return `
        PenaltyID: ${this.key}, 
        DriverID: ${this.driverId}, 
        PlateNumber: ${this.plateNumber}, 
        PenaltyDate: ${this.penaltyDate}, 
        PenaltyLevel: ${this.penaltyLevel}, 
        Description: ${this.description}`;
    }
}