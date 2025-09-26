// linkedList.js
import Node from './node.js';

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }
        
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode);
        this.headNode = newNode;
    }

    // Returns the total number of nodes in the list
    size() {
        if (!this.headNode) return 0;
        
        let count = 1;
        let current = this.headNode;
        while (current.nextNode) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // Returns the first node in the list
    head() {
        return this.headNode;
    }

    // Returns the last node in the list
    tail() {
        if (!this.headNode) return null;
        
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    // Returns the node at the given index
    at(index) {
        if (index < 0) return null;
        if (!this.headNode) return null;
        
        let current = this.headNode;
        let currentIndex = 0;
        
        while (current && currentIndex < index) {
            current = current.nextNode;
            currentIndex++;
        }
        
        return current || null;
    }

    // Removes the last element from the list
    pop() {
        if (!this.headNode) return null;
        
        // If there's only one node
        if (!this.headNode.nextNode) {
            const poppedValue = this.headNode.value;
            this.headNode = null;
            return poppedValue;
        }
        
        // Find the second-to-last node
        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        
        const poppedValue = current.nextNode.value;
        current.nextNode = null;
        return poppedValue;
    }

    // Returns true if the passed in value is in the list
    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing value, or null if not found
    find(value) {
        let current = this.headNode;
        let index = 0;
        
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    // Represents the LinkedList as a string
    toString() {
        if (!this.headNode) return 'null';
        
        let result = '';
        let current = this.headNode;
        
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        
        return result + 'null';
    }

    // Extra credit: Inserts a new node with the provided value at the given index
    insertAt(value, index) {
        if (index < 0) return;
        
        // Insert at beginning
        if (index === 0) {
            this.prepend(value);
            return;
        }
        
        // Find the node before the insertion point
        const previousNode = this.at(index - 1);
        if (!previousNode) {
            // Index is beyond the current size, append to end
            this.append(value);
            return;
        }
        
        const newNode = new Node(value, previousNode.nextNode);
        previousNode.nextNode = newNode;
    }

    // Extra credit: Removes the node at the given index
    removeAt(index) {
        if (index < 0 || !this.headNode) return null;
        
        // Remove first node
        if (index === 0) {
            const removedValue = this.headNode.value;
            this.headNode = this.headNode.nextNode;
            return removedValue;
        }
        
        // Find the node before the one to remove
        const previousNode = this.at(index - 1);
        if (!previousNode || !previousNode.nextNode) {
            return null; // Index out of bounds
        }
        
        const removedValue = previousNode.nextNode.value;
        previousNode.nextNode = previousNode.nextNode.nextNode;
        return removedValue;
    }
}

export default LinkedList;
