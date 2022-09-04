import DomEvent from "./DomEvent";
import Leaf from "./models/Leaf";

export default class Game {
    constructor() {
        this.start();
    }

    start() : void {
        new DomEvent().setEventsClick(new Leaf().getAll());
    }
}