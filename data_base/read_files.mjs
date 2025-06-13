import { promises as fs } from 'fs';
import { User } from '../model/users.mjs';

export class Readfile{
    constructor(DataBase){
        this.database = DataBase;
    }
    async readUser(){
        try{    
            let data = await fs.readFile("./data_base/test_file/users.txt" , "utf-8");
            let lines = data.split("\n");

            lines.forEach((line) => {
                if (line.trim() === "") return;
                let field = line.trim().split("|");
                if (field.length === 5) {
                    let user_node  = new User(
                        field[0],
                        field[1],
                        field[2],
                        field[3],
                        field[4]
                    );
                    // console.log(user_node.key);
                    
                    this.database.file_insert(user_node.key , user_node);
                    // console.log(this.database.display());
                    
                }
            });
            

        }catch(err){
            console.error(`error reading file kharab: ${err}`);
        }
    };
    async readCar(){
        try{
            let data = await fs.readFile("./data_base/test_file/cars.txt");
            let lines = data.split("\n");
            
            lines.forEach((line) => {
                if (line.trim() === "") return;
                let field = line.trim().split("|");
                if (field.length === 6){
                    
                }
            });
        }catch{
            console.error(`error reading file cars: ${err}`);
            
        }
    }

}