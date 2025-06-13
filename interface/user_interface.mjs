import promptSync from "prompt-sync";
let prompt = promptSync();
export class User_menu{
    constructor(logic){
        this.logic  = logic;

    }
    userMenu(national_number){
        while (true){
            // dont forget exit and back 
            const userOption = parseInt(prompt("___user___\n1.display all cars\n input: "));

            if(isNaN(userOption)) return false;

            if (userOption === 1) this.displayCars(national_number)
            else if (userOption === 2){}
        }
    }
    displayCars(national_number){
        const displayCars = this.logic.displayCars(national_number);

    }

    userMenuRun(){
        this.userMenu();
    }

}