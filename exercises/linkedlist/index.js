// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size(){
    let counter = 0
    let node = this.head

    while(node){
      counter++
      node = node.next
    }

    return counter
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let node = this.head

    if(!node){
      return null
    }

    while(node){
      if(!node.next){
        return node
      }
      node = node.next
    }
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if(!this.head){
      return
    }

    this.head = this.head.next
  }

  removeLast(){
    if(!this.head){
      return
    }

    if(!this.head.next){
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next

    while(node.next){
      previous = node
      node = node.next
    }
    previous.next = null
  }

  insertLast(data){
    let last = this.getLast()

    if(last){
      last.next = new Node(data)
    }else{
      this.head = new Node(data)
    }
    //my solution
    //   if(!this.head){
    //     this.head = new Node(data)
    //   }
    //
    //   let lastNode = this.getLast()
    //   lastNode.next = new Node(data)
    // }
  }

  getAt(index){
    let counter = 0
    let node = this.head

    while(node){
      if(counter === index){
       return node
      }
      counter++
      node = node.next
    }
    return null
  }

  removeAt(index){
    // if(!this.head){
    //   return
    // }
    //
    // if(index === 0){
    //   this.head = this.head.next
    //   return
    // }
    //
    // let previous = this.getAt(index - 1)
    // if(!previous || !previous.next){
    //   return
    // }
    //
    // previous.next = previous.next.next

    //my solution
    let previous = this.getAt(index - 1)

    if(!this.head){
      return null
    }

    if(index === 0){
      return this.removeFirst()
    }

    if(!previous || !previous.next){
      return
    }
    previous.next = previous.next.next
  }

  insertAt(data, index){

    if(!this.head){
      return this.head = new Node(data)
    }

    if(index === 0){
      return this.head = new Node(data, this.head)
    }

    // if(index >= this.size()){
    //   return this.insertLast(data)
    // }

    let previous = this.getAt(index - 1) || this.getLast()

    previous.next = new Node(data, previous.next)
  }

  forEach(funct){
    let node = this.head
    let counter = 0

    while(node){
      funct(node)
      node = node.next
      counter++
    }
  }

  *[Symbol.iterator](){
    let node = this.head

    while(node){
      yield node
      node = node.next
    }
  }

}

module.exports = { Node, LinkedList };
