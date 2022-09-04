import DomEvent from "./DomEvent";
import Leaf from "./models/Leaf";

function app() {
    
    new DomEvent().setEventsClick(new Leaf().getAll());
    
}

app();