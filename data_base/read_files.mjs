import { promises as fs } from 'fs';
import { User } from '../nodes/users.mjs';


export class Readfile{
    constructor(DataBase){
        this.database = DataBase;
    }
    async readUser(){
        try{    
            let data = await fs.readFile("./test_file/users.txt" , "utf-8");
            let lines = data.split("\n");

            lines.forEach( line => {
                let field = line.trim().split("|");
                if (field.length == 5){
                    let item = new User(
                        field[0],
                        field[1],
                        field[2],
                        field[3],
                        field[4]
                    );
                this.database.file_insert(item.nationalnumber , item);
                

                }
            })

        }catch(err){
            console.error(`error reading file: ${err}`);
        }
    }

}