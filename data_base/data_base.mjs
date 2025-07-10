import { Dynamichash } from "../data_structure/hashtable.mjs";
import { Linkedlist } from "../data_structure/linkedlist.mjs";
import { User } from "../model/users.mjs";
import { searchByRangeCars } from "../model/carForSearchByRange.mjs";


export class DataBase{
    constructor(){
        this.user_login = new Dynamichash();
        this.cars = new Dynamichash();
        this.city = new Linkedlist();
        this.penalties = new Dynamichash();
        this.driver = new Dynamichash();
        this.carPlate = new Linkedlist();
    };
    
    insertCar(key , node){
        return this.cars.insert(key , node);
    };
    insertCity(node){
        return this.city.insert(node);
    }
    insertPenalty(key , node){
        return this.penalties.insert(key , node);
    };
    insertDriver(key , node){
        return this.driver.insert(key , node);
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
    displayPenalties(){
        return this.penalties.display();
    };
    
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
        
        if (!cityCode) return false;
        const cars = new Linkedlist();
        const temp = this.cars.table;
        for(let i =0 ; i<temp.length ; i++){
            let car = temp[i];
            if (car != null){
                let city = car.plateNumber.split("-")[1];
            if (city == cityCode){
                
                cars.insert(car);
            }
            }
        }
            
        return cars.display() 
        
    };
    searchByTimeRange(startTime, endTime){
        const cars = new Linkedlist();
        const temp = this.cars.table;
        for(let i =0 ; i<temp.length ; i++){
            let car = temp[i];
            if (car !== null) {
                if (car.year >= startTime && car.year <= endTime) {
                    
                    cars.insert(new searchByRangeCars(car.name , car.year, 
                        car.color, car.plateNumber));
            }
            }
        }
        return cars.display();
    }
    displayDriver(){
        return this.driver.display();
    }
    carPlateInsert(plateNumber , status){
        return this.carPlate.insert(plateNumber , status)
    }
    deleteCar(carCode){
        return this.cars.delete(carCode)
    }
    searchCar(key){
        return this.cars.search(key);
    }
    searchDriver(key){
        return this.driver.search(key);
    };
   
    checkDriverId(driverId){
        let temp = this.driver.table;
        for (let i = 0 ; i<temp.length ; i++){
            if (temp[i].driverId == driverId)return temp[i];
        }
        return false;
    }
   
    
}
