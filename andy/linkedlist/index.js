// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
  constructor() {
    this.head = null
  }

  size() {
    let cur = this.head
    let count = 0
    while (cur) {
      count++
      cur = cur.next
    }

    return count
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  insertAt(data, index) {
    let i = 0
    let prev = null
    let cur = this.head
    while (i < index && cur) {
      prev = cur
      cur = cur.next
      i++
    }

    if (!prev) {
      const next = this.head
      this.head = new Node(data, next)
      return
    }

    const next = prev.next
    prev.next = new Node(data, next)
  }

  insertLast(data) {
    this.insertAt(data, Infinity)
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  getAt(index) {
    let i = 0
    let cur = this.head
    while (cur) {
      if (i === index) return cur
      cur = cur.next
      i++
    }

    return null
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.removeAt(0)
  }

  removeLast() {
    this.removeAt(this.size() - 1)
  }

  removeAt(index) {
    if (!this.head) return
    if (index >= this.size()) return

    let i = 0
    let prev = null
    let cur = this.head
    while (i < index) {
      i++
      prev = cur
      cur = cur.next
    }

    if (!prev) {
      this.head = cur.next
      return
    }

    prev.next = cur.next
  }

  forEach(fn) {
    let cur = this.head
    while (cur) {
      fn(cur)
      cur = cur.next
    }
  }
}




module.exports = { Node, LinkedList }














// // --- Directions
// // Implement classes Node and Linked Lists
// // See 'directions' document

// class Node {
// 	constructor(data, next = null) {
// 		this.data = data
// 		this.next = next
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null
// 	}

// 	insertFirst(data) {
// 		const node = new Node(data, this.head)
// 		this.head = node
//   }

//   size() {
//     let length = 0
//     let node = this.head
//     while (node) {
//       length++
//       node = node.next
//     }

//     return length
//   }

//   getFirst() {
//     return this.head
//   }

//   getLast() {
//     if (!this.head) return this.head

//     let node = this.head
//     while (node) {
//       if (!node.next) return node
//       node = node.next
//     }
//   }

//   clear() {
//     this.head = null
//   }

//   removeFirst() {
//     this.head = this.head.next || null
//   }

//   removeLast() {
//     if (!this.head) return
//     if (!this.head.next) {
//       this.head = null
//       return
//     }

//     let prev = this.head
//     let cur = this.head.next
//     while (cur.next) {
//       prev = cur
//       cur = cur.next
//     }

//     prev.next = null
//   }

//   insertLast(data) {
//     if (!this.head) this.head = new Node(data)
//     else {
//       const lastNode = this.getLast()
//       lastNode.next = new Node(data)
//     }
//   }

//   getAt(index) {
//     if (!this.head) return null

//     let i = 0
//     let cur = this.head

//     while (i < index && cur) {
//       cur = cur.next
//       i++
//     }

//     return cur
//   }

//   removeAt(index) {
//     if (!this.head) return
//     if (index === 0) {
//       this.removeFirst()
//       return
//     }
//     let prev = this.getAt(index - 1)
//     if (!prev || !prev.next) return

//     prev.next = prev.next.next
//   }

//   insertAt(data, index) {
//     if (index === 0) {
//       this.insertFirst(data)
//       return
//     }
//     if (index > this.size()) {
//       this.insertLast(data)
//       return
//     }
//     const prev = this.getAt(index - 1)
//     const next = prev.next
//     prev.next = new Node(data)
//     prev.next.next = next
//   }

//   forEach(fn) {
//     let cur = this.head
//     while (cur) {
//       fn(cur)
//       cur = cur.next
//     }
//   }


// }

// module.exports = { Node, LinkedList }














