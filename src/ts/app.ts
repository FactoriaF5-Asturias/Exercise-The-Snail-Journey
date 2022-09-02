import Event from "./models/DomEvent";
import Leaf from "./models/Leaf";

function app() {
    
    new Event().setEventsClick(new Leaf().getAll());
    
}

app();