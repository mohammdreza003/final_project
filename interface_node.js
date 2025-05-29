import promptSync from "prompt-sync";
const prompet = promptSync();
export class Interface{
    constructor(Logic){
        this.logic = Logic;
    };
    main_Menu(){
        while (true){
            try{
                let menu = parseInt(prompet("____main____\n1.user"+
                    "\n2.manager\n3.exit"))
                if (menu == 1){
                 return this.user_menu();
                }else if (menu == 2)  return this.manager_menu();
                else if (menu == 3) process.exit(1);

            }catch{
                alert('please enter number ')
            };
            
        }
    }
    user_menu(){

    }
    manager_menu(){

    }

    
    run(){
        this.main_Menu();
    }
}