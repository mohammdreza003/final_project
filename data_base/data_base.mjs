import { Dynamichash } from "../data_structure/hashtable.mjs";


export class DataBase{
    constructor(){
        this.user_login = new Dynamichash();
        this.licensePlate = new Dynamichash();

    };
    file_insert(key , node){
        return this.user_login.insert(key, node)
    };
    
    display(){
        return this.user_login.display();   
    }
    search(key){

        return this.user_login.search(key);
    }

}