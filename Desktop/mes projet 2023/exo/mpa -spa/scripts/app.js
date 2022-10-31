//Declare a variable of type object
// object = a collection of properties, each property has a value (any type)

const labels = {
  home: { menuItem: "Home", h1: "welcome to MPA/CSR demo", h2: "salut c'est moi" }, contact: "contact", signIn: "Sign-in", about: { menuItem: "Home", h1: "welcome to MPA/CSR demo", h2: "salut c'est moi" }
};


// a json (Javascript Object Notation)

// `` = template literal with expression $(expression)
// replacing an expression by its value is an interpolation 


const pathName = window.location.pathname;

let currentPage = "";
if (pathName == "/index.html" || pathName == "/") {
  currentPage = "Home";
} else if (pathName == "/contact.html") {
  currentPage = "Contact";
}


const menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link${pathName == "/index.html" || pathName == "/" ? " active" : ""}" href="index.html">${labels.home.menuItem}</a>
        <a class="nav-link${pathName == "/contact.html" ? " active" : ""}" href="contact.html">${labels.contact}</a>
        <a class="nav-link${pathName == "/sign-in.html" ? " active" : ""}" href="sign-in.html">${labels.signIn}</a>
        <a class="nav-link${pathName == "/about.html" ? " active" : ""}" href="about.html">${labels.about.menuItem}</a>
      </div>
    </div>
  </div>
</nav>
`;

const header = document.getElementById("header");
header.innerHTML = menu;

const homeContent = `
         <h1>${labels.home.h1}</h1>
         <h2>${labels.home.h2}</h2>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nostrum error modi cumque qui maiores
            illum aliquam blanditiis fuga, facilis nemo sapiente totam eaque, quas nesciunt magni iste! Aperiam,
            reiciendis.</p> 
`;

const aboutContent = `
         <h1>${labels.about.h1}</h1>
         <h2>${labels.about.h2}</h2>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nostrum error modi cumque qui maiores
            illum aliquam blanditiis fuga, facilis nemo sapiente totam eaque, quas nesciunt magni iste! Aperiam,
            reiciendis.</p> 
`;



const main = document.getElementById("main");

if (pathName == "/index.html" || pathName == "/"); {
  main.innerHTML = homeContent;
} else if (pathName == "/contact.html") {
  main.innerHTML = contactContent;
} else if (pathName == "/sign-in.html") {
  main.innerHTML = signIn.content;
} else if pathName == "/about.html")
}


//internationalisation et localisation
//le routingRouter
// dataBindingue avec la syntaxe d'interpolation
//le rendoring 

// ce sont des briques de frameworks, on fait de la conception logiciel

}

const copyright = "<p>Copyright Simplon 2022</p> ";
const footer = document.getElementById("footer");
footer.innerHTML = copyright;

console.log(footer);

