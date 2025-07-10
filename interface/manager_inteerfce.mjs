import promptSync from "prompt-sync";
const prompt = promptSync();
export class ManagerMenu{
    constructor(logic){
        this.logic  = logic;
    }
    managerMenu(){
        while (true){
            const input  = parseInt(prompt ("___manager menu____\n1.display all cars\n2.display all users\n3.display information about a car in city\n4.Search within a time range\n5.change user name\n6.display driver\n7.delete car\n8.give driving licence\n9.chnge status driver"));
            switch (input) {
                case 1:
                    this.displayCars();
                    break;
                case 2:
                    this.displayUsers();
                    break

                case 3:
                    this.displayCarInCity();
                    break;
                
                case 4:
                    this.searchByTimeRange();
                    break;
                case 5:
                    this.changeUserName();
                    break
                case 6:
                    this.displayDriver();
                    break
                case 7:
                    this.deleteCar()
                    break
                case 8:
                    this.giveDrivingLicence();
                    break
                case 9:
                    this.changeStatusDriver();
                    break

                default:
                    break;
            }
        }
    };
    displayCars(){
        console.log(this.logic.displayCars());
    };
    displayUsers(){
        console.log(this.logic.displayUsers());
    };
    displayCarInCity(){
        console.log(this.logic.displayCity());
        
        const cityCode = parseInt(prompt("Enter the city code in this list:"));
        const carInCity = this.logic.displayCarInCity(cityCode);
        console.log('*');
        
        if(!carInCity) {
            console.log(`No car found in this city:${cityCode}`);
            
        }
        console.log(carInCity);
        
    }
    searchByTimeRange(){
        const startTime = parseInt(prompt("Enter the start time (YYYY) :"));
        const endtime = parseInt(prompt("Enter the end time (YYYY) :"));
        const cars = this.logic.searchByTimeRange(startTime, endtime);
        if (cars ==false)return console.log("failed!! ");
        console.log(cars);
    
    }

    changeUserName(){
        const nationalNumber = parseInt(prompt("Enter national number :"));
        const userNameNewName = prompt("Enter user name new name:")
        const userUpdate = this.logic.changeUserName(nationalNumber , userNameNewName);
        if (!userUpdate) return console.log("User not found!");
        console.log("succesful.");
        
        
    }  
    displayDriver(){
        console.log(this.logic.displayDriver());
        
    }
    deleteCar(){
        const carCode = parseInt(prompt("Enter car code to delete :"));
        const status = this.logic.deleteCar(carCode);
        if (status == false) return console.log("can not delete this car!!");
        console.log("deleted.");
        
    }
    giveDrivingLicence(){
       
        try{
            const nationalNumber = parseInt(prompt("Enter national id :"));
            const check = this.logic.searchDriver(nationalNumber);
            if (check) return console.log("this user already exist!!");
            while(true){
                const input  = parseInt(prompt("enter driving number (please enter at least 8 character and number):"));
                if (this.logic.checkDriverId(input) == true) {
                    const giveLicence = this.logic.giveDrivingLicence(nationalNumber , input)
                    if (giveLicence == true)return console.log("done.");
                    
                }; 

            }
            

        }catch(err){
            console.log(`${err}`);
            
        }
        

    }
    changeStatusDriver(){
        while (true){
            const input = parseInt(prompt("1.change with national id\n2.change with driver id"))
            switch (input) {
                case 1:
                    this.changeWithNationalId();
                    break;
                case 2:
                    this.changeWithDriverId();
                    break
                default:
                    break;
            }
        }
    }
    changeWithNationalId(){
        const nationalNumber = parseInt(prompt("input the national number:"))
        const check = this.database.changeWithNationalId(nationalNumber)
        if (check == true)return console.log("done.");
        return console.log("not found !!");
        
        
    }
    changeWithDriverId(){
        const driverId = parseInt(prompt("enter the driver id:"));
        const check = this.database.changeWithDriverId(driverId);
        if (check == true)return console.log("done.");
        return console.log("not found !!");
        
    }

    run(){
        this.managerMenu();
    }

}