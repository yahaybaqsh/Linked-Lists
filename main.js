// main.js
import LinkedList from './linkedList.js';

// Test the Linked List
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// Additional tests
console.log("\n=== Additional Tests ===");
console.log("Size:", list.size());
console.log("Head:", list.head()?.value);
console.log("Tail:", list.tail()?.value);
console.log("At index 2:", list.at(2)?.value);
console.log("Contains 'cat':", list.contains("cat"));
console.log("Contains 'fish':", list.contains("fish"));
console.log("Find 'parrot':", list.find("parrot"));
console.log("Find 'fish':", list.find("fish"));

// Test pop
console.log("\nPop:", list.pop());
console.log("After pop:", list.toString());

// Test prepend
list.prepend("goldfish");
console.log("After prepend:", list.toString());

// Test extra credit methods
list.insertAt("rabbit", 2);
console.log("After insertAt(2, 'rabbit'):", list.toString());

list.removeAt(3);
console.log("After removeAt(3):", list.toString());
