


class HashMap {
  constructor(tablesize = 16 ) {
    this.table = new Array(tablesize);
    this.tableSize = tablesize;
  }
  Hash(key) {
  let hashCode = 0;
        
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
  }
}

HashMap.prototype.set = function(key, value) {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }
  const index = this.Hash(key);
  this.table[index] = value;
}
HashMap.prototype.get = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }
  const index = this.Hash(key);
  return this.table[index];
}
HashMap.prototype.has = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }
  const index = this.Hash(key);
  return this.table[index] !== undefined;
}
HashMap.prototype.remove = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError('Key must be a string');
  }
  const index = this.Hash(key);
  if (this.table[index] !== undefined) {
    this.table[index] = undefined;
    return true;
  }
  return false;
}   
HashMap.prototype.clear = function() {
  this.table = new Array(this.tableSize);
}
HashMap.prototype.length = function() {
  return this.table.filter(item => item !== undefined).length;
}

HashMap.prototype.keys = function() {
  return this.table.map((item, index) => item !== undefined ? index : -1).filter(index => index !== -1);
}

HashMap.prototype.values = function() {
  return this.table.filter(item => item !== undefined);
}
HashMap.prototype.entries = function() {
  return this.table.map((item, index) => item !== undefined ? [index, item] : -1).filter(index => index !== -1);
}

// test hashmap 
const hashmapTest = new HashMap();
hashmapTest.set("name", "John");
hashmapTest.set("age", 30);
hashmapTest.set("city", "New York");

console.log(hashmapTest.get("name")); // John
console.log(hashmapTest.get("age")); // 30
console.log(hashmapTest.get("city")); // New York
console.log(hashmapTest.has("name")); // true
console.log(hashmapTest.has("country")); // false
hashmapTest.remove("age");
console.log(hashmapTest.has("age")); // false
hashmapTest.clear();
console.log(hashmapTest.length()); // 0