import { render } from "@manure/runtime";
import App from "./src/App.manure";

var root = document.createElement("div");
document.body.appendChild(root);
render(root, new App());
