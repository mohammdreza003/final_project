export  class Logic{
    constructor(Handler, DataBase){
        this.handler = Handler;
        this.database = DataBase;

    }
    user_login(key , password){
        let search = this.database.search(key);
        console.log(search);

        if(search && search !== undefined){
            
            if (password.trim() == search.password.trim()) return true;

        }return false;
    };
    checkPassword(password){
        if(password.length === 8){
            let number = false;
            let alphabet = false;

            for (let i = 0 ; i<password.length ; i++){
                const character = password[i];

                if (character >='0' && character <= '9') number = true;

                else if ((character  >= 'a' && character <='z') ||
                 (character>='A' && character<='Z')) alphabet = true;

                
                 if (alphabet && number)return true;


            }
            return false;
        }else return false;
    }
    user_signIn(nationalNumber , name  , lastName , birthday , password){
        this.database.user_signIn(nationalNumber , name  , lastName ,
             birthday , password)

    }
    displayCars(){
        return this.database.displayCars();
    };
    displayUsers(){
        return this.database.displayUsers()
    }
    displayCity(){
        return this.database.displayCity()
    }
    // displayCars(national_number){
    //     const user = this.database.search(national_number);
    //     if (!user) return false;
    //     user.display()
    // }
    displayCarInCity(cityCode){
        return this.database.displayCarInCity(cityCode);
        
    }
    searchByTimeRange(startTime, endTime){
        return this.database.searchByTimeRange(startTime, endTime);
    };
    changeUserName(nationalNumber , userNameNewName){
        const user = this.database.search(nationalNumber);
        console.log(user);
        if (user && user !==undefined){
            user.name = userNameNewName;
            console.log(user);
            return true
            
        }
        return false;
        
    }
}
