
// Balanced Binary Search Tree (BST) implementation in JavaScript
// setup a node class
// and a tree class to hold the root node
const Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

const Tree = function(array) {
    this.root = buildTree(array);
};

const array = [1,7,4,23,8,9,4,3,5,7,9,67,6345,324] 

// Sort the array first
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}






// Create a balanced BST from the sorted array

function buildTree(array) {

    const sortedArray = mergeSort(array);

    if (sortedArray.length === 0) return null;

    const mid = Math.floor(sortedArray.length / 2);
    const node = new Node(sortedArray[mid]);

    node.left = buildTree(sortedArray.slice(0, mid));
    node.right = buildTree(sortedArray.slice(mid + 1));

    return node;
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};



function insert (node, data) {
    if (node === null) {
        return new Node(data);
    }
    if (data < node.data) {
        node.left = insert(node.left, data);
    } else if (data > node.data) {
        node.right = insert(node.right, data);
    }
    return node;
}

function find (node, data) {
    if (node === null) {
        return false;
    }
    if (data < node.data) {
        return find(node.left, data);
    } else if (data > node.data) {
        return find(node.right, data);
    } else {
        return true; // data is equal to node.data
    }
}



// test case 

const myTree2 = new Tree(array);
prettyPrint(myTree2.root);