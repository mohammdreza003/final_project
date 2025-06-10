import { Dynamichash } from "../data_structure/hashtable.mjs";


export class DataBase{
    constructor(){
        this.user_login = new Dynamichash();
        this.licenswPlate = new Dynamichash();

    };
    file_insert(user_node){
        return this.user_login.insert(user_node.nationalnumber, user_node)
    };

    


}