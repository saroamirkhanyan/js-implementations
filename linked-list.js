class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = new Node(head)
    this.current = this.head
  }
  add(item) {
    this.current.next = new Node(item)
    this.current = this.current.next
  }
  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
}

// test
const list = new LinkedList({
  value: 10
})

list.add({ value: 5 })
list.add({ value: 74 })
list.add({ value: 12 })

console.dir(list.size());

