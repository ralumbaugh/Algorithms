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
    // Write a method that will remove duplicate values from a sorted singly linked list.
    // Example 1-> 1-> 2-> 3-> 3-> 4-> 5-> would return 1-> 2-> 3-> 4-> 5->
    removeDupesSorted(){
        // Edge case: Checks if the list is empty or only 1 long
        if (this.isEmpty() || this.head.next === null){
            return this;
        }
        let current=this.head
        while(current.next != null){
            if(current.value === current.next.value){
                current.next = current.next.next;
            }
            else{
                current=current.next;
            }
        }
        return this;
    }

    // Write a method that will remove all negative numbers from a singly linked list.
    removeNegatives(){
        if(this.isEmpty()){
            return this;
        }
        let current=this.head;
        while(current.value < 0){
            current = current.next;
            if(current===null)
            {
                this.head=current;
                return this;
            }
        }
        this.head = current;
        while(current.next!= null){
            if(current.next.value<0){
                current.next = current.next.next;
            }
            else{
                current=current.next;
            }
        }
        return this;
    }

    // Write a method that will reverse the singly linked list.
    // Note that this will entail reversing the points of each node to its
    // previous node, and setting what WAS the last node to be the new head.

    // I STRONGLY encourage attempting to use recursion for this method. If you
    // choose not to, this task will require three pointers.

    reverseHydra(){
        if(this.isEmpty()){
            console.log("It's empty!")
            return this;
        }
        let walker = null;
        let runner = this.head;
        let next = runner.next;
        while(runner !== null){
            runner.next = walker;
            walker = runner;
            runner = next;
            if(runner!== null){
                next=runner.next;
            }
        }
        this.head = walker;
        return this;
    }

    reverseRecursion(runner = this.head, prev = null){
        if(runner == null){
            this.head = prev;
            return;
        }
        this.reverseRecursion(runner.next, runner)
        runner.next = prev;
        return;
    }

    //Write a method that will return a boolean based on whether
    //or not the singly linked list has a loop.

    // HINT: Captain America, The Winter Soldier
    // "On your left!"
    hasLoop(){
        if(this.isEmpty()){
            return false;
        }
        let runner = this.head;
        let fasterRunner = this.head;
        while(fasterRunner != null){
            if(fasterRunner.next == null || fasterRunner.next.next == null){
                return false;
            }
            runner = runner.next;
            fasterRunner = fasterRunner.next.next;
            if(runner == fasterRunner){
                return true;
            }
        }
        return false;
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

    mergeTwo(list2){
        // Deals with edge cases where either list is empty
        if(this.isEmpty()){
            if(list2.isEmpty()){
                return this;
            }
            this.head = list2.head;
            return this;
        }
        else if(list2.isEmpty()){
            return this;
        }
        // Deals with edge cases where either list is empty

        // Sets initial walkers. Checks if List 2 should be starting
        let list1Walker = this.head;
        let list2Walker = list2.head;
        if(list2Walker.value < list1Walker.value){
            this.head = list2Walker;
            list2Walker = list2Walker.next;
            this.head.next = list1Walker
        }
        let runner = list1Walker.next;

        // Checks if list 2's value should be added in front of list 1's values
        while(runner !== null && list2Walker !== null){
            if(runner.value > list2Walker.value){
                list1Walker.next = new SLNode(list2Walker.value);
                list1Walker = list1Walker.next;
                list1Walker.next = runner;
                list2Walker = list2Walker.next;
            }
            else{
                list1Walker = list1Walker.next;
                runner = runner.next;
            }
        }

        // Checks if there's leftovers from the second list to append
        if(list1Walker.next === null){
            list1Walker.next = list2Walker;
        }
        return this;
    }

    mergeNLists(lists){
        for(let i=0; i<lists.length; i++){
            this.mergeTwo(lists[i]);
        }
        return this;
    }

}

class Stack {
    constructor() {
        this.data = new SLList();
    }
    // Stack
    // Write a method to push a value into our stack using hte methods we've built
    // in our singly linked list class
    push(value) {
        this.data.addToFront(value);
        return this;
    }
    // Write a method that will pop a value out of our stack using the methods
    // we've built in our singly linked list class
    pop() {
        // this.data.removeFromFront();
        // return this;    
        return this.data.removeFromFront();
    }
    // Write a method that will return the value of of the node on the top of the stack
    peek(){
        if(this.data.isEmpty()){
            console.log("Empty!")
            return null;
        }
        return this.data.head.value;
    }
    // Write a method that will return a boolean based on whether or not the stack
    // is empty using the methods from our singly linked list class
    isEmpty(){
        return this.data.isEmpty();
    }
    // Write a method that will return how many elements are in our stack.
    size(){
        let count = 0;
        let runner = this.data.head;
        while(runner != null)
        {
            count++;
            runner = runner.next;
        }
        return count;
    }
}

class Queue {
    constructor(){
        this.data = new SLList();
    }

    // Write a method that adds to the queue using the methods build already
    // in the SLList class
    enqueue(value) {
        this.data.addToBack(value);
        return this;
    }

    // Write a method from the queue using the methods built already
    // in the SLList class
    Dequeue(){
        this.data.removeFromFront();
        return this;
    }

    // This one should be self explanatory
    isEmpty() {
        return this.data.isEmpty();
    }

    // Write a method that returns the node at the front of the queue using
    // what we know about Singly Linked Lists
    front() {
        if(this.isEmpty){
            console.log("No one's in line! Just go! Go already!");
            return(null);
        }
        return this.data.head();
    }


    // Write a method that returns the number of items in our queue
    size() {
        let count = 0;
        let runner = this.data.head;
        while(runner != null)
        {
            count++;
            runner = runner.next;
        }
        return count;
    }

    // Write a method to print the queue
    printQueue() {
        this.data.printList();
        return this;
    }
}

// This is the class for a Stack made out of two stacks.
class QueueStack {
    constructor(){
        // Basically, stack 1 is going to be where all the data actually resides
        this.stack1 = new Stack();
        // Stack 2 is just going to be used when we need it to shift things around.
        this.stack2 = new Stack();
    }

    // Using the methods we built into the stack class, write a method that
    // adds a new node to the queue with the passed in value
    enqueue(value){
        if(this.stack1.isEmpty()){
            this.stack1.push(value);
        }
        else{
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.peek());
                this.stack1.pop();
            }
            this.stack1.push(value);
            while(!this.stack2.isEmpty()){
                this.stack1.push(this.stack2.peek());
                this.stack2.pop();
            }
        }
        return this;
    }

    dequeue(){
        this.stack1.pop();
        return this;
    }
}

// Here's my SLL Functions
{
    var emptyList = new SLList();
    var oneLong = new SLList();
    var twoLong = new SLList();
    var myList = new SLList();
    var secondList = new SLList();
    var thirdList = new SLList();
    var loopedList = new SLList();
    var sortedDuplicates = new SLList();
    var negativeList = new SLList();
    // secondList.addToBack(42).addToBack(42).addToBack(42);
    // oneLong.addToFront(3);
    // myList.addToBack(8).addToBack(6).addToBack(7).addToBack(5).addToBack(3).addToBack(0).addToBack(9);
    myList.addToBack(3).addToBack(7).addToBack(13).addToBack(15).addToBack(18);
    secondList.addToBack(1).addToBack(5).addToBack(14).addToBack(15).addToBack(20).addToBack(25);
    thirdList.addToBack(52);
    // secondList.addToBack(2).addToBack(4).addToBack(6).addToBack(8).addToBack(10);
    // myList.mergeTwo(secondList).printList();
    myList.mergeNLists([secondList, thirdList]).printList();
    // myList.printList();

    // twoLong.addToBack(4).addToBack(2);
    // loopedList.addToBack(8).addToBack(6).addToBack(7).addToBack(5).addToBack(3);
    // loopedList.head.next.next.next.next = loopedList.head.next.next;
    // sortedDuplicates.addToBack(1).addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5).addToBack(5);
    // negativeList.addToBack(-3).addToBack(-2).addToBack(0).addToBack(-1).addToBack(5);
    // myList.printList().removeValue(9).printList();
    // myList.printList().removeValue(8).printList();
    // myList.printList().removeValue(5).printList();
    // oneLong.printList().removeValue(3).printList();
    // emptyList.removeValue(3);
    // console.log(myList.SecondToLast());
    // myList.concat(secondList).printList();
    // emptyList.concat(myList).printList();
    // newList = myList.splitOnValue(3);
    // newList.printList();
    // myList.printList();
    // emptyList.printList()
    // emptyList.reverseHydra().printList();
    // oneLong.reverseHydra().printList();
    // twoLong.reverseHydra().printList();
    // myList.reverseHydra().printList();
    // myList.reverseRecursion();
    // myList.printList();
    // console.log(loopedList.hasLoop());
    // console.log(oneLong.hasLoop());
    // console.log(emptyList.hasLoop());
    // sortedDuplicates.removeDupesSorted().printList();
    // negativeList.removeNegatives().printList();
}

// Here's my Stack Functions
{
//     var emptyStack = new Stack();
//     var oneStack = new Stack();
//     var myStack = new Stack();
    
//     oneStack.push(42);
//     myStack.push(8).push(6).push(7).push(5).push(3).push(0).push(9).push(13).pop();
//     console.log(myStack.peek());
//     console.log(emptyStack.peek());
//     console.log(emptyStack.isEmpty());
//     console.log(myStack.isEmpty());
//     console.log(myStack.size());
//     console.log(emptyStack.size());
//     console.log(oneStack.size());
}

// Here's my Queue Functions
{
//     var emptyQueue = new Queue();
//     var oneQueue = new Queue();
//     var myQueue = new Queue();
//     oneQueue.enqueue(42);
//     myQueue.enqueue(8).enqueue(6).enqueue(7).enqueue(5).enqueue(3).enqueue(0).enqueue(9).printQueue;
//     oneQueue.Dequeue().printQueue();
//     myQueue.Dequeue().printQueue().enqueue(13).printQueue();
}

// Here's my Queuestack functions
// {
//     var emptyQueueStack = new QueueStack();
//     var oneQueueStack = new QueueStack();
//     var MyQueue = new QueueStack();
//     oneQueueStack.enqueue(42);
//     MyQueue.enqueue(8).enqueue(6);
//     MyQueue.stack1.data.printList();
//     MyQueue.dequeue();
//     MyQueue.stack1.data.printList();
// }