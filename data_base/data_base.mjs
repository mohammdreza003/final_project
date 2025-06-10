import { Dynamichash } from "../data_structure/hashtable.mjs";


export class DataBase{
    constructor(){
        this.user_login = new Dynamichash();
        this.licensePlate = new Dynamichash();

    };
    file_insert(key , node){
        return this.user_login.insert(key, node)
    };
    // async readUser(){
    //         try{    
    //             let data = await fs.readFile("./data_base/test_file/users.txt" , "utf-8");
    //             let lines = data.split("\n");
    
    //             lines.forEach((line) => {
    //                 if (line.trim() === "") return;
    //                 let field = line.trim().split("|");
    //                 if (field.length === 5) {
    //                     let user_node  = new User(
    //                         field[0],
    //                         field[1],
    //                         field[2],
    //                         field[3],
    //                         field[4]
    //                     );
    //                     this.database.file_insert(user_node.key , user_node);
    //                     // console.log(this.database.display());
                        
    //                 }
    //             });
                
    //         }catch(err){
    //             console.error(`Error reading file: ${err}`);
    //         }
    //     }   
    display(){
        return this.user_login.display();   
    }
    search(key){

        return this.user_login.search(key);
    }

}