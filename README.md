# Linked Lists Project

## JavaScript Course

### Introduction
In Computer Science, one of the most fundamental data structures is the **linked list**, which is similar to an array.  
The main advantage of a linked list over a conventional array is that elements can easily be inserted or removed without reallocating other elements.

In JavaScript, arrays are dynamic and can grow or shrink easily, so linked lists aren’t strictly necessary. However, linked lists provide a **solid foundation** to understand more complex data structures like graphs and binary trees.

---

## Structure of a Linked List
A **linked list** is a linear collection of **nodes** that “point” to the next node:


Each **node** contains:
- `value`: the data stored
- `nextNode`: pointer to the next node (default: `null`)

---

## Assignment

### Node Class / Factory
Create a `Node` class or factory with:
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}
