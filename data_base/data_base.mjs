import { Dynamichash } from "../data_structure/hashtable.mjs";
import { Linkedlist } from "../data_structure/linkedlist.mjs";
import { User } from "../model/users.mjs";



export class DataBase{
    constructor(){
        this.user_login = new Dynamichash();
        this.cars = new Dynamichash();
        this.city = new Linkedlist();
    };
    // change name for clean code
    // اپشن برای اینه که کد رو خیلی تکرار نکنم و نخواد زیاد تابع بنویسم 
    insert(key , node , option){
        switch (option) {
            case 1:
                return this.user_login.insert(key , node);
                
            case 2:
                return this.cars.insert(key , node)

            case 3:
                return this.city.insert(node)

            
            default:
                break;
        }
    };
    insertCar(key , node){
        return this.cars.insert(key , node);
    };
    // use switch for display
    display(option){
        switch (option) {
            case 1:
                
                return this.user_login.display(); 

            case 2:
                return this.cars.display();

            case 3:
                return this.city.display();
        
            default:
                break;
        }  
    }
    displayCars(){
      return this.cars.display();
    }
    displayUsers(){
        return this.user_login.display();
    };
    
    search(key){

        return this.user_login.search(key);
    };
    
    user_signIn(nationalNumber , name  , lastName , birthday , password){
        return this.user_login.insert(nationalNumber , new User(nationalNumber , name , lastName , 
            birthday ,password))
    };
}
