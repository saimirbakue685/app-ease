/*
Filename: ComplexCode.js

Description: This complex code implements a custom data structure called "LinkedList" along with various operations on it. It provides functionalities like adding and removing elements, searching for elements, reversing the list, sorting the list, and much more. It also includes advanced techniques like recursion, object-oriented programming, and algorithm optimization.

Please note that the code provided below is an example and does not reflect real-world scenarios.*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add element to the end of the list
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove element by value
  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }
  }

  // Get the length of the list
  getLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Find element by value
  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Reverse the list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Sort the list in ascending order (using bubble sort)
  sort() {
    let swapped;

    if (!this.head) {
      return;
    }

    do {
      swapped = false;
      let current = this.head;
      let prev = null;

      while (current.next) {
        if (current.data > current.next.data) {
          if (!prev) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }

          current.next = current.next.next;
          prev.next.next = current;
          swapped = true;
        }

        prev = current;
        current = current.next;
      }
    } while (swapped);
  }
}

// Example usage
const list = new LinkedList();
list.add(10);
list.add(5);
list.add(20);
list.add(15);

console.log("Length:", list.getLength()); // Output: 4

list.remove(5);
console.log("Contains 5?", list.find(5)); // Output: false

list.reverse();
console.log("Reversed list:", list);

list.sort();
console.log("Sorted list:", list);