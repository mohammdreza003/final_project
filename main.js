import { Logic } from "./logic.js";
import { Interface } from "./interface_node.js";
import { Handler } from "./logic/handler.js";
import { DataBase } from "./data_base/data_base.js";


const logic = new Logic(Handler, DataBase);
const interface_terminal = new Interface(logic);


interface_terminal.run()
