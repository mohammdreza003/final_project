import promptSync from "prompt-sync";
const prompt = promptSync();
export class ManagerMenu{
    constructor(logic){
        this.logic  = logic;
    }
    managerMenu(){
        while (true){
            const input  = prompt ("___manager menu____\n1.display all cars\n2.display all users\n3.display information about a car in city");
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
    displayCarInCity(city){
        const cityName = prompt("Enter the city name:");
        const carInCity = this.logic.displayCarInCity(cityName);
        if(!carInCity) {
            console.log(`No car found in this city:${cityName}`);
            
        }
    }

    run(){
        this.managerMenu();
    }

}