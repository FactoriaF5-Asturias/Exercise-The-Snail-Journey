import Snail from "./models/Snail";

export default class DomEvent {
    
    private snail:Snail;

    constructor() {
        this.snail = new Snail;
    }

    setEventsClick(leafs:HTMLCollection) : void {
        
        /* Array.from(leafs).forEach(leaf => {
            console.log(leaf);
        }); */

        // for (const leaf of leafs) {
        //     console.log(leaf);
        // }

        for (let index = 0; index < leafs.length; index++) {
            const leaf = leafs[index];
            leaf.addEventListener('click', (element) => {
                const el = element.target as HTMLImageElement;
                this.snail.move(el.offsetLeft,el.offsetTop);
            })
        }
    }
}