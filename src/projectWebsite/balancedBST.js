
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



// Create a new tree instance with the sorted array
const myTree = new Tree(array);


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

function levelOrderTraversal(node) {
    if (node === null) return [];
    const queue = [node];
    const result = [];
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.data);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return result;
}

function inOrderTraversal(node) {
    if (node === null) return [];
    return [
        ...inOrderTraversal(node.left),
        node.data,
        ...inOrderTraversal(node.right)
    ];
}       

function preOrderTraversal(node) {
    if (node === null) return [];
    return [
        node.data,
        ...preOrderTraversal(node.left),
        ...preOrderTraversal(node.right)
    ];
}   
function postOrderTraversal(node) {
    if (node === null) return [];
    return [
        ...postOrderTraversal(node.left),
        ...postOrderTraversal(node.right),
        node.data
    ];
}


function height(node) {
    if (node === null) return -1; // Return -1 for null nodes
    return 1 + Math.max(height(node.left), height(node.right));
}

function isBalanced(node) {
    if (node === null) return true;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    return Math.abs(leftHeight - rightHeight) <= 1 &&
           isBalanced(node.left) &&
           isBalanced(node.right);
}

function depth(node, data, currentDepth = 0) {
    if (node === null) return -1; // Return -1 if the node is not found
    if (node.data === data) return currentDepth;
    const leftDepth = depth(node.left, data, currentDepth + 1);
    if (leftDepth !== -1) return leftDepth; // Found in left subtree
    return depth(node.right, data, currentDepth + 1); // Search in right subtree
}

function rebalance(node) {
    const values = inOrderTraversal(node);
    return buildTree(values);
}

levelOrderTraversal(myTree.root); // This will return the level order traversal of the tree


// test case 

const myTree2 = new Tree(array);
prettyPrint(myTree2.root);


// Insert a new value into the tree
const newValue = 10;
myTree2.root = insert(myTree2.root, newValue);
console.log(`\nAfter inserting ${newValue}:`);
prettyPrint(myTree2.root);  

// Find a value in the tree
const valueToFind = 23;
const found = find(myTree2.root, valueToFind);
console.log(`\nValue ${valueToFind} found: ${found}`);  