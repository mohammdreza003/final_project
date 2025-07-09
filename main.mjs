import { Logic } from ".//logic/logic.mjs";
import { Interface } from "./interface/interface_node.mjs";
import { Handler } from "./logic/handler.mjs";
import { DataBase } from "./data_base/data_base.mjs";
import { Readfile } from "./data_base/read_files.mjs";
import { User_menu } from "./interface/user_interface.mjs";
import { ManagerMenu} from "./interface/manager_inteerfce.mjs";

const dataBase = new DataBase();
const handler = new Handler(dataBase);

const logic = new Logic(handler, dataBase);
const user_menu = new User_menu();
const manager_menu = new ManagerMenu(logic);
const interface_terminal = new Interface(logic, manager_menu, user_menu);
const readFile = new Readfile(dataBase);

// await readFile.readUser();
// interface_terminal.run();

async function main(){
    try {
    await readFile.readUser();
    await readFile.readCity();
    await readFile.readCar();

    interface_terminal.run();
  } catch (error) {
    console.error("error in start:", error);
  }
}
// console.log(dataBase.displayCars())
console.log(dataBase.displayUsers());

// console.log(dataBase.displayCars());


main();
