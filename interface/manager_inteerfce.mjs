import promptSync from "prompt-sync";
const prompt = promptSync();
export class Manager_menu{
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

}