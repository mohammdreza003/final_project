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

                    return this.user_login();

                }else if (menu === 2){

                    return this.user_sign_in();
                
                }else if (menu === 3){
                    return this.user_sign_in();

                }else if (menu === 4){

                    process.exit(0);
                
                }
            }
        }
    };
    user_login(){
        let national_number = prompt('enter national number:');
        const password = prompt('enter password:');
        national_number = parseInt(national_number);
        let a = this.logic.user_login(national_number , password);
        if (a === true){
            console.log('seccsessful.');
            
            this.user_secces_login();
        }else{
            console.log('not seccsessful!!');
        }
    };

    user_sign_in(){
        const nationalNumber = prompt('enter national number :');
        const name = prompt('enter name:');
        const lastName = prompt('enter lastName:');
        const birthday = prompt('enter your birthday:');
        const password = prompt('enter your password:');

        this.logic.user_signIn(nationalNumber , name  , lastName , birthday , password);
    };
    // user_secces_login(){

    // }

    // manager_menu(){

    // }

    run(){
        this.main_Menu();
    }
}