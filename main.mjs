import { Logic } from ".//logic/logic.mjs";
import { Interface } from "./interface/interface_node.mjs";
import { Handler } from "./logic/handler.mjs";
import { DataBase } from "./data_base/data_base.mjs";
import { Readfile } from "./data_base/read_files.mjs";

const dataBase = new DataBase();
const logic = new Logic(Handler, DataBase);
const interface_terminal = new Interface(logic);
const readFile = new Readfile(dataBase);


readFile.readUser();
// interface_terminal.run()
