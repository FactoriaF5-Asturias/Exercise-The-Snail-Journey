import DomEvent from "./models/DomEvent";
import Leaf from "./models/Leaf";

function app() {
    
    new DomEvent().setEventsClick(new Leaf().getAll());
    
}

app();