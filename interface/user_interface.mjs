import promptSync from "prompt-sync";
let prompt = promptSync();
export class User_menu {
  constructor(logic) {
    this.logic = logic;
  }
  userMenu(national_number) {
    while (true) {
      // dont forget exit and back
      const userOption = parseInt(
        prompt("___user___\n1.display all cars\n2.display negetive score \n input: ")
      );

      if (isNaN(userOption)) return false;

      switch (userOption) {
        case 1:
          this.displayCars(national_number);
          break;

        case 2:
          this.displayNegetiveScore(national_number);
          break
      
        default:
          break;
      }
    }
  }
  // has bug
  displayCars(national_number) {
    const displayCars = this.logic.displayCars(national_number);
  }
  displayNegetiveScore(national_number){
    
  }

  userMenuRun() {
    this.userMenu();
  }
}
