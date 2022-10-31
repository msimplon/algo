import { renderHome } from "./components/home.js";

const routes = ["#/home", "#/about", "#/sign-in", "#/contact"];



function route() {
    const hash = window.location.hash;
    if (hash == "#/home") {
        renderHome();

    } else if (hash == "#/about")
        renderHome();


}

export { route };