import { Linkedlist } from "../data_structure/linkedlist.mjs";
export class User{
    constructor(nationalnumber , name , lastname , tarikhtavalod , password){
        this.nationalnumber = nationalnumber;
        this.name = name ;
        this.lastname = lastname;
        this.tarikhtavalod = tarikhtavalod;
        this.password = password;
        this.cars = new Linkedlist();
    }
    tostring(){
        return `name = ${this.name}
lastname = ${this.lastname}
tarikhtavalod = ${this.tarikhtavalod}
national_number = ${this.nationalnumber}
password = ${this.password}\n`

    }
}