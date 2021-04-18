class Node {
  connections = []
  constructor(name) {
    this.name = name;
  }
  addConnection(node) {
    this.connections.push(node)
  }
  toString() {
    return this.name
  }
  findPathTo(findingNode) {
    let path = []
    path.toString = () => {
      return path.join('/')
    }
    if (this.connections.includes(findingNode)) {
      path.push(this, findingNode)
      return path
    }
    for (const connection of this.connections) {
      const connectionPath = connection.findPathTo(findingNode)
      if (connectionPath) {
        path.push(this, ...connectionPath)
        return path
      }
    }
  }
}

const Einstein = new Node("Einstein")
const AlanTuring = new Node("Alan Turing")
const Stroustrup = new Node("Stroustrup")
const DennisRitchie = new Node("DennisRitchie")
const LinusTorvalds = new Node("LinusTorvalds")

Einstein.addConnection(AlanTuring)
AlanTuring.addConnection(Stroustrup)
Stroustrup.addConnection(DennisRitchie)
DennisRitchie.addConnection(LinusTorvalds)

// Array result
const result = Einstein.findPathTo(LinusTorvalds)

// String result
console.log(result.toString())

// Array result
console.log(result)
