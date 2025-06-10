export class Handler{
    constructor(database){
        this.database = database;   
    }

    search(key) {
        return this.database.search(key) ;
    }
}
