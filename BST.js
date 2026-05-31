// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null; // изначально дерево пустое
//   }

//   insert(value) {
//     const newNode = new Node(value);

//     if (!this.root) {
//       this.root = newNode; // если корня нет, делаем его
//       return;
//     }

//     let current = this.root;
//     while (true) {
//       if (value < current.value) { 
//         // идем влево
//         if (!current.left) {
//           current.left = newNode;
//           return;
//         }
//         current = current.left;
//       } else {
//         // идем вправо
//         if (!current.right) {
//           current.right = newNode;
//           return;
//         }
//         current = current.right;
//       }
//     }
//   }
// }


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  InOrder(node = this.root) {
    if (!node) {
      return
    }
    this.InOrder(node.left)
    console.log(node.value)
    this.InOrder(node.right)
  }
}


const Tree = new BST()
Tree.insert(10)
Tree.insert(5)
Tree.insert(15)
Tree.insert(3)
Tree.insert(7)
Tree.insert(12)
Tree.insert(18)

Tree.InOrder()