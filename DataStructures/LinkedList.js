function LinkedList () {
    this.head = null;
    this.tail = null;
}
  
function Node (value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
  
LinkedList.prototype.addToHead = function(value){
    // voeg een methode toe addToHead
    var newNode = new Node (value, this.head, null);
    // creeer een nieuwe node genaamd newNode
    if (this.head) this.head.prev = newNode;
    else (this.tail) = newNode;
    this.head = newNode;
    // dit is nieuwe head
};

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node (value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else (this.head) = newNode;
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
};

LinkedList.prototype.removeTail = function(){
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    }else {
        this.head = null;
    }
    return val;
};

LinkedList.prototype.search = function (searchValue) {
    var currentNode = this.head;
    while (currentNode){
        if (currentNode.value === searchValue) {
            return currentNode.value;
        }else{
            currentNode = currentNode.next;
        }
    }
    return null;
};

LinkedList.prototype.indexOf = function (searchValue){
    var retVal = [];
    var currentIndex = 0;
    var currentNode = this.head;
    while (currentNode){
        if (currentNode.value === searchValue) {
            retVal.push(currentIndex);
        }
        currentNode = currentNode.next;
        currentIndex++;
    }
    return retVal;
};

var LL = new LinkedList();
LL.addToTail(3);
LL.addToTail(5);
LL.addToTail(3);
LL.addToTail(8);

console.log(LL.indexOf(3));
console.log('klaar');

