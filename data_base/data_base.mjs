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
    // change switch insert
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
    insertCity(node){
        return this.city.insert(node);
    }
    
    
    displayCars(){
      return this.cars.display();
    }
    displayUsers(){
        return this.user_login.display();
    };
    displayCity(){
        return this.city.display();
    }
    search(key){

        return this.user_login.search(key);
    };
    
    user_signIn(nationalNumber , name  , lastName , birthday , password){
        return this.user_login.insert(nationalNumber , new User(nationalNumber , name , lastName , 
            birthday ,password))
    };
    citySearch(cityName){
        let temp = this.city.head;
        while (temp){
            if(temp.data.cityName === cityName){
                console.log(temp.data.cityCode);
                
                return temp.data.cityCode
            }
            temp = temp.next;
        }
    }
    displayCarInCity(cityCode){
        console.log('*');
        
        if (!cityCode) return false;
        const cars = new Linkedlist();
        const temp = this.cars.table;
        // temp.forEach(car => {
        //     let city = car.plateNumber.split("-")[1];
        //     if (city === cityCode) cars.insert(car);
        //     else return false;
        // });
        // console.log('*');
        for(let i =0 ; i<temp.length ; i++){
            let car = temp[i];
            if (car === undefined) continue;
            let city = car.plateNumber.split("-")[1];
            if (city === cityCode){
                cars.insert(car);
            }
        }
       return this.displayCar(cars) 
        
    };
    displayCar(cars){
        let temp = cars.head;
        while(temp){
            if (!temp == null){
                console.log(temp.data);
                
            }
            temp = temp.next
        } 
    }
    searchByTimeRange(startTime, endTime){
        const cars = new Linkedlist();
        const temp = this.cars.table;
        for(let i =0 ; i<temp.length ; i++){
            let car = temp[i];
            if (car === undefined || car.year === undefined) continue;
            if (car.year >= startTime && car.year <= endTime) {
                cars.insert(car);
            }
        }
        return this.displayCar(cars);
    }
    
}
