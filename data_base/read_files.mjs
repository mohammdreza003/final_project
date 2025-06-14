import { promises as fs } from "fs";
import { User } from "../model/users.mjs";
import { Cars } from "../model/cars.mjs";
import { City } from "../model/citycode.mjs";

export class Readfile {
  constructor(DataBase) {
    this.database = DataBase;
  }

  async readUser() {
    try {
      let data = await fs.readFile("./data_base/test_file/users.txt", "utf-8");
      let lines = data.split("\n");

      lines.forEach((line) => {
        if (line.trim() === "") return;
        let field = line.trim().split("|");
        if (field.length === 5) {
          let user_node = new User(
            field[0],
            field[1],
            field[2],
            field[3],
            field[4]
          );
          // console.log(user_node.key);

          this.database.insert(user_node.key, user_node, 1);
          // console.log(this.database.display());
        }
      });
    } catch (err) {
      console.error(`error reading file kharab: ${err}`);
    }
  }
  async readCity() {
    try {
      let data = await fs.readFile(
        "./data_base/test_file/citycode.txt",
        "utf8"
      );
      let lines = data.split("\n");

      lines.forEach((line) => {
        if (line.trim() === "") return;
        let field = line.trim().split("|");
        if (field.length === 2) {
          let cityNode = new City(field[0], field[1]);
          this.database.insert(null, cityNode, 3);
        }
      });
    } catch (err) {
      console.error(`error reading file city: ${err}`);
    }
  }
  async readCar() {
    try {
      let data = await fs.readFile("./data_base/test_file/cars.txt", "utf8");
      let lines = data.split("\n");

      lines.forEach((line) => {
        if (line.trim() === "") return;
        let field = line.trim().split("|");
        if (field.length === 6) {
          let carnode = new Cars(
            field[0],
            field[1],
            field[2],
            field[3],
            field[4],
            field[5]
          );
          this.database.insert(carnode.key, carnode, 2);
          
        }
      });
    } catch {
      console.error(`error reading file cars: ${err}`);
    }
  }
}
