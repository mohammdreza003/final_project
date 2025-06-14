import promptSync from "prompt-sync";
const prompt = promptSync();
export class Interface {
  constructor(Logic, manager_menu, user_menu) {
    this.logic = Logic;
    this.manager_menu = manager_menu;
    this.user_menu = user_menu;
  }
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
          console.log("please enter number bethween 1 and 3!");
        }
      } else {
        console.log("enter a number !");
      }
    }
  }
  user_Main_menu() {
    while (true) {
      const userOption = parseInt(
        prompt("___user___\n1.login\n2.sign in \n 3.back\n 4.exit\n input:")
      );
      if (isNaN(userOption)) {
        return;
      }

      if (userOption === 1) {
        return this.user_login();
      } else if (userOption === 2) {
        return this.user_sign_in();
      } else if (userOption === 3) {
        return this.user_sign_in();
      } else if (userOption === 4) {
        process.exit(0);
      }
    }
  }
  user_login() {
    const national_number = parseInt(prompt("enter national number:"));

    const password = prompt("enter password:");

    const isAuthenticated = this.logic.user_login(national_number, password);

    if (!isAuthenticated) {
      console.log("failed");
      return;
    }
    console.log("succsesful");
    this.user_menu.userMenuRun(national_number);
  }

  user_sign_in() {
    const nationalNumber = prompt("enter national number :");
    const name = prompt("enter name:");
    const lastName = prompt("enter lastName:");
    const birthday = prompt("enter your birthday:");
    const password = prompt("enter your password:");
    const check = this.logic.checkPassword(password);
    if (check) {
      this.logic.user_signIn(
        nationalNumber,
        name,
        lastName,
        birthday,
        password
      );
      this.user_menu.userMenuRun(nationalNumber);
    } else {
      console.log("sign in failed");
    }
  }

  run() {
    this.main_Menu();
  }
}
