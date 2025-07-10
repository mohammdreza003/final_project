import promptSync from "prompt-sync";
const prompt = promptSync();
export class ManagerMenu{
    constructor(logic){
        this.logic  = logic;
    }
    managerMenu(){
        while (true){
            const input  = parseInt(prompt ("___manager menu____\n1.display all cars\n2.display all users\n3.display information about a car in city\n4.Search within a time range\n5.change user name\n6.display driver"));
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

    run(){
        this.managerMenu();
    }

}