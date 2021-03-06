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
        let fasterRunner = this.head.next;
        while(fasterRunner.next != null) {
            runner = runner.next;
            fasterRunner = fasterRunner.next;
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
        return this;
    }

    removeValue(myValue) {
        if(this.isEmpty()){
            console.log("That was an empty list. What am I supposed to do with this?!");
            return this;
        }
        else if(this.head.value === myValue){
            this.head = this.head.next;
            console.log("I checked a whole value for you and removed it!");
            return this;
        }
        var runner = this.head;
        var otherRunner = this.head.next;
        while(otherRunner != null){
            if (otherRunner.value === myValue){
                runner.next = otherRunner.next;
                if(otherRunner.next === null){
                    console.log("It's always in the last place you look!");
                }
                else{
                    console.log(`I removed a ${myValue} for you.`);
                }
                return this;
            }
            runner = runner.next;
            otherRunner = otherRunner.next;
        }
        console.log("Why would you send me on a wild goose chase like that? Am I a game to you?");
        return this;
    }

    // Write a method that will return the second to last node in the singly linked list.

    // EXAMPLE: myList = 7->5->3->10->1->
    // Calling myList.secondToLast() would return the 10-> node

    SecondToLast(MyValue){
        if(this.isEmpty()){
            console.log("The list was empty.");
            return this;
        }
        else if(this.head.next === null){
            console.log("There's only 1")
            return this;
        }
        var walker = this.head;
        var runner = walker.next;
        while(runner.next !== null){
            walker = runner;
            runner = runner.next;
        }
        return walker;
    }

    // Write a method that takes a singly linked list as a parameter, and concatenates
    // it to the current list.

    // EXAMPLE: If miyList 7->5->3-> and otherList is 10->1->8->
    // and you call myList.concat(otherList) the outcome would be that myList is
    // now 7-> 5-> 3-> 10-> 1 -> 8 ->

    concat(otherList){
        if(this.isEmpty()){
            console.log("Empty Starting List")
            return this;
        }
        var walker=this.head;
        var otherWalker=otherList.head;
        while(walker.next !== null){
            walker=walker.next;
        }
        walker.next=otherWalker;
        return this;
    }

    // Write a method that splits a singly linked list in 2 on a given value.

    // EXAMPLE: if myList = 10 -> 7 -> 5 -> 3 -> 10 -> 1 -> 8 ->
    // and you call myList.splitOnValue(5) the outcome would be
    // 5 -> 3 -> 10 -> 1 -> 8->

    splitOnValue(myValue){
        if(this.isEmpty()){
            console.log("Empty list bruh!")
            return this;
        }
        else if(walker.next == null){
            console.log("There's no second value")
            return this;
        }
        else{
            var output = new SLList();
            var walker = this.head;
            var runner = walker.next;
            while(runner.value !== myValue){
                if(runner.next=== null){
                    console.log("Not there");
                    return this;
                }
                walker=walker.next;
                runner = walker.next;
            }
            output.head = runner;
            walker.next = null;
            return output;
        }
    }

}

var emptyList = new SLList();
var oneLong = new SLList();
var myList = new SLList();
var secondList = new SLList();
secondList.addToBack(42).addToBack(42).addToBack(42);
oneLong.addToFront(3);
myList.addToBack(8).addToBack(6).addToBack(7).addToBack(5).addToBack(3).addToBack(0).addToBack(9);
// myList.printList().removeValue(9).printList();
// myList.printList().removeValue(8).printList();
// myList.printList().removeValue(5).printList();
// oneLong.printList().removeValue(3).printList();
// emptyList.removeValue(3);
// console.log(myList.SecondToLast());
// myList.concat(secondList).printList();
emptyList.concat(myList).printList();
// newList = myList.splitOnValue(3);
// newList.printList();
// myList.printList();
// emptyList.printList()