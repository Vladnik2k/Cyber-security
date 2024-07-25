interface NodeList {
    map<T>(callback: (node: Node, index: number, list: Array<Node>) => T): T[]
}

NodeList.prototype.map = function<T> (callback: (node: Node, index: number, list: Array<Node>) => T): T[] {
    return Array.from(this).map(callback);
}
