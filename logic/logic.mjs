export  class Logic{
    constructor(Handler, DataBase){
        this.handler = Handler;
        this.database = DataBase;

    }
    user_login(key , password){
        let search = this.database.search(key);
        console.log(search);

        if(search && search !== undefined){
            if (password.trim() == search.password.trim())return true;
        }return false;
    }
}
