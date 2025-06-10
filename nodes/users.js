import { Linkedlist } from "../data_structure/linkedlist.mjs";
export class User{
    constructor(name , lastname , tarikhtavalod , nationalnumber , cars){
        this.name = name;
        this.lastname = lastname;
        this.tarikhtavalod = tarikhtavalod;
        this.nationalnumber = nationalnumber;
        this.cars = new Linkedlist();
    }
    addCar(){
        
    }

    totring(){
        return `name = ${this.name} \n lastname = ${this.lastname} \n
            tarikhtavalod = ${this.tarikhtavalod} \n national_number = ${this.nationalnumber}\n
            
            

         `

    }
}