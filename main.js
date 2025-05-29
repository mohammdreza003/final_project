import { Logic } from "./logic.js";
import { Interface } from "./interface_node.js";
const logic = new Logic();
const interface_terminal = new Interface(logic);

interface_terminal.run()
