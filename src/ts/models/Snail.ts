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

    move(posX:number,posY:number) : void {
        this.element.style.left = posX + "px";
        this.element.style.top = posY + "px";
        console.log(`posX: ${posX}. posY: ${posY} / ${this.element.style.left} + ${this.element.style.top}`);
    }

    eat(food:HTMLImageElement) : void {
        food.hidden = true;
        this.getFat();
    }

    getFat() : void {
        let size:number = this.element.width;
        size += 20;
        this.element.style.width = size + "px";
    }
}