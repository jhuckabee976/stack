// Stack implementation in JavaScript
export default class Stack {
    constructor() {
        this.items = [];
    }
     push(element) {
        this.items.push(element);
           // Your code here
       }
       // Remove the top element from the stack
       pop() {
        if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items.pop();
           // Your code here
       }
       // View the top element in the stack
       peek() {
        if (this.isEmpty()) {
           return "Stack is empty";
       }
       return this.items[this.items.length - 1];
           // Your code here
       }
       // Check if the stack is empty
       isEmpty() {
         return this.items.length === 0;
           // Your code here
       }
       // Get the size of the stack
       size() {
        return this.items.length;
           // Your code here
       }
       // Clear the stack
       clear() {
        this.items = [];
           // Your code here
       }
}
const stack = new Stack();

stack.push(10);
   stack.push(20);
   stack.push(30);
   console.log(stack.peek()); // Expected output: 30
   console.log(stack.pop());  // Expected output: 30
   console.log(stack.peek()); // Expected output: 20
   console.log(stack.isEmpty()); // Expected output: false
   console.log(stack.size()); // Expected output: 2
   stack.clear();
   console.log(stack.isEmpty()); // Expected output: true





