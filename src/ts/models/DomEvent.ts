export default class DomEvent {
    
    constructor() {
        
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
            leaf.addEventListener('click', function(element) {
                const el = element.target as HTMLImageElement;
                console.log(`clicked: x-${el.offsetLeft}, y-${el.offsetTop}`);
            })
        }
    }
}