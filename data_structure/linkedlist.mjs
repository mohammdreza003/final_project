export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class Linkedlist {
  constructor() {
    this.head = null;
    this.end = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
  }

 

  search(data) {
    let temp = this.head;

    while (temp !== null) {
      if (temp.data && temp.data.item_code === data) {
        return temp.data;
      }
      temp = temp.next;
    }
    return false;
  }
  
  display() {
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      // console.log(temp.data + '->');
      result += "\n\n" + temp.data.toString() + " -> ";
      // console.log(temp)
      temp = temp.next;
    }
    return result + "null" + "\n";
  }
}
