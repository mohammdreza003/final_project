import promptSync from "prompt-sync";
const prompt = promptSync();
export class Manager_menu{
    constructor(logic){
        this.logic  = logic;
    }
    managerMenu(){
        while (true){
            const input  = prompt ("___manager menu____\n1.display all cars\ndisplay all users");
            switch (input) {
                case 1:
                    this.displayCars();
                    break;
                case 2:

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