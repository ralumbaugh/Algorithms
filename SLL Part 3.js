// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter, being the value of the node we want
    // to create
    constructor(val) {
        // This is the node's actual value
        this.value = val;
        // And this indicates what is next after the current node.
        this.next = null;
    }
}

class SLList {
    constructor() {
        // This is the beginning of the singly linked list
        this.head = null;
    }

    // Write a method that will return a boolean depending on whether or not the singly
    // linked list is empty or not.
    isEmpty() {
        return this.head === null;
    }

    // Write a method that will create a new node, add it to the front of
    // the singly linked list, and reassign the head to the new node.
    addToFront(value) {
        if(this.isEmpty()){
            this.head = new SLNode(value);
            return this;
        }
        let temp = this.head;
        this.head = new SLNode(value);
        this.head.next = temp;
        return this;
    }

    // Write a method that will remove the head node from a singly linked list,
    // and then reassign the head to the next node.

    removeFromFront(value) {
        if(this.isEmpty()){
            return this;
        }
        this.head =  this.head.next;
        return this;
    }

    // Write a method that is given a value, and adds a new node to the end of a SLL
    // where that new node has that value.
    addToBack(value) {
        if(this.isEmpty()){
            this.head = new SLNode(value);
            return this;
        }
        else{
            var runner = this.head;
            while(runner.next !=null) {
                runner = runner.next;
            }
            runner.next = new SLNode(value);
            return this;
        }
    }

    // Write a method that will return a boolean based on whether or not
    // the Singlye Linked List contains a node with a given value.

    // EXAMPLE: If the singly linnked list is 7 -> 5 -> 9 -> 2 ->
    // and I call my list.contains(9) it should return true.
    // If on the same list I call my.List.contains(11) it should return false.
    contains(value) {
        let runner = this.head;
        while(runner != null) {
            if(runner.value == value){
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    // Write a method that will remove the last node in a SLL and return it.

    // EXAMPLE: If the singly linked list is 11 -> 2 -> 7 -> 6 ->
    // and I call myList.removeFromBack() the list should now be
    // 11 -> 2 -> 7 ->
    removeFromBack() {
        if(this.head === null){
            return this; 
        }
        if(this.head.next === null){
            this.head = null;
            return this;
        }
        let runner = this.head;
        let privilegedRunner = this.head.next;
        while(privilegedRunner.next != null) {
            runner = runner.next;
            privilegedRunner = privilegedRunner.next;
        }
        
        runner.next = null;
        return this;
    }

    // Write a method that prints the contents of a Singly Linked List.
    printList() {
        // Let's start a runner at the beginning of the singly linked list itself
        var runner = this.head;
        // This string will be added to as we traverse along the SLL
        var string = "";


        // Now we need a way to traverse through the SLL

        // If the runner is not null, we're still looking at a node, so we have things to do!
        while(runner != null) {
            // We want to add the node's value to our string, and a fancy little arrow for looks
            string += runner.value + " -> ";
            // Then, we want to progress the runner to the NEXT node in the SLL
            runner = runner.next;
        }
        
        // Once we've finished moving through the entire list, we want to print the string
        console.log(string);
    }
}


var myList = new SLList();
var anotherList = new SLList();
// myList.head = new SLNode(5);
// myList.head.next = new SLNode(6);
// myList.head.next.next = new SLNode(7);

myList.addToBack(5).addToBack(6).addToBack(7);
anotherList.addToBack(8).addToBack(6).addToBack(7).addToBack(5).addToBack(3).addToBack(0).addToBack(9);



// myList.printList();
// myList.addToFront(4);
// myList.printList();
// myList.removeFromFront();
myList.printList();
// console.log(myList.contains(1));
// myList.removeFromBack();
// myList.printList();
// myList.removeFromBack();
// myList.printList();
// myList.removeFromBack();
// myList.printList();
myList.removeFromBack().printList();
anotherList.printList();
anotherList.removeFromBack();
anotherList.printList();