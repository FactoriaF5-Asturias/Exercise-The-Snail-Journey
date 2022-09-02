export default class Snail {

    element!: HTMLImageElement;
    posX!: number;
    posY!: number;

    constructor() {
        this.getSnail();
    }

    getSnail() : HTMLElement | null {
        this.element = document.getElementById('snail') as HTMLImageElement;

        if(this.element) {
            this.posX = this.element.offsetLeft;
            this.posY = this.element.offsetLeft;
        }

        return null;
    }

    move(x:number,y:number) : void {
    }
}