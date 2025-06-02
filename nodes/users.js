import { linkedlist } from "../data_structure/ds.mjs";
export class User{
    constructor(name , lastname , tarikhtavalod , nationalnumber , cars){
        this.name = name;
        this.lastname = lastname;
        this.tarikhtavalod = tarikhtavalod;
        this.nationalnumber = nationalnumber;
        this.cars = new linkedlist();
    }
    addCar(){
        
    }
}