import promptSync from "prompt-sync";
const prompt = promptSync();
export class Interface{
    constructor(Logic){
        this.logic = Logic;
    };
    main_Menu() {
    while (true) {
        const input = prompt("____main____\n1.user\n2.manager\n3.exit");
        const menu = parseInt(input);

        if (!isNaN(menu)) {
            if (menu === 1) {
                return this.user_Main_menu();
            } else if (menu === 2) {
                return this.manager_menu();
            } else if (menu === 3) {
                console.log("bay bay "); 
                process.exit(0); 
            } else {
                console.log('please enter number bethween 1 and 3!');
            }
        } else {
            console.log('enter a number !');
        }
    }
}
    user_Main_menu(){
        while (true){
            const input  = prompt("___user___\n1.login\n2.sign in \n 3.back\n 4.exit\n input:");
            const menu = parseInt(input);
            if (!isNaN(menu)){
                if (menu === 1){

                    return this.user_login()

                }else if (menu === 2){

                    return this.user_sign_in()
                
                }else if (menu === 3){

                    

                }else if (menu === 4){

                    process.exit(0);
                
                }
            }
        }
    };
    user_login(){
        const national_number = prompt('enter national number:');
        const password = prompt('enter password:');
        let a = this.logic.user_Login(national_number , password);
    };

    user_sign_in(){
        while (true){
            
        }
    };

    manager_menu(){

    }

    run(){
        this.main_Menu();
    }
}