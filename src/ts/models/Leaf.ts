export default class Leaf {

    constructor() {
        
    }

    getAll() : HTMLCollection {
        let leafs = document.getElementsByClassName('leaf') as HTMLCollection;
        return leafs;
    }
}