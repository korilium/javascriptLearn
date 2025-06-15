function linkedList() {
  this.head = null;
  this.tail = null;
}


function Node(value) {
  this.value = value;
  this.next = null;
}
linkedList.prototype.append = function(value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}


linkedList.prototype.prepend = function(value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
}

linkedList.prototype.size = function() {
  let count = 0;
  let current = this.head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}


linkedList.prototype.head = function() {
  return this.head ? this.head.value : null;
}
linkedList.prototype.tail = function() {
  return this.tail ? this.tail.value : null;
}

linkedList.prototype.at = function(index) {
  if (index < 0 || index >= this.size()) return null;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current ? current.value : null;
}
linkedList.prototype.pop = function() {
  if (!this.head) return null;
  if (this.head === this.tail) {
    const value = this.head.value;
    this.head = null;
    this.tail = null;
    return value;
  }
  let current = this.head;
  while (current.next && current.next !== this.tail) {
    current = current.next;
  }
  const value = this.tail.value;
  this.tail = current;
  this.tail.next = null;
  return value;
}
linkedList.prototype.contains = function(value) {
  let current = this.head;
  while (current) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
}
linkedList.prototype.find = function(value) {
  let current = this.head;
  let index = 0;
  while (current) {
    if (current.value === value) return index;
    current = current.next;
    index++;
  }
  return -1; // Not found
}
linkedList.prototype.toString = function() {
  let result = '';
  let current = this.head;
  while (current) {
    result += `( ${current.value} ) -> `;
    current = current.next;
  }
  result += 'null';
  return result;
}
linkedList.prototype.insertAt = function(value, index) {
  if (index < 0 || index > this.size()) return false;
  if (index === 0) {
    this.prepend(value);
    return true;
  }
  if (index === this.size()) {
    this.append(value);
    return true;
  }
  const newNode = new Node(value);
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  newNode.next = current.next;
  current.next = newNode;
  return true;
}
linkedList.prototype.removeAt = function(index) {
  if (index < 0 || index >= this.size()) return false;
  if (index === 0) {
    this.head = this.head.next;
    if (!this.head) this.tail = null; // If the list is now empty
    return true;
  }
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }
  if (current.next === this.tail) {
    this.tail = current; // Update tail if removing the last node
  }
  current.next = current.next ? current.next.next : null;
  return true;
}
linkedList.prototype.reverse = function() {
  let prev = null;
  let current = this.head;
  this.tail = this.head; // Update tail to the current head
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev; // Update head to the last processed node
}


// Example usage:


const list = new linkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.toString()); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log(list.size()); // 4
console.log(list.head()); // 0