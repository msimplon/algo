//Declare a variable of type object
// 

const labels = { home: "Home", contact: "contact", signIn: "Sign-in", about: "About" };
// a json (Javascript Object Notation)

// `` = template literal with expression $(expression)
// replacing an expression by its value is an interpolation 
const menu = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="index.html">${labels.home}</a>
        <a class="nav-link" href="contact.html">${labels.contact}</a>
        <a class="nav-link" href="sign-in.html">${labels.signIn}</a>
        <a class="nav-link" href="about.html">${labels.about}</a>
      </div>
    </div>
  </div>
</nav>
`;

const header = document.getElementById("header");
header.innerHTML = menu;

const copyright = "<p>Copyright Simplon 2022</p> ";
const footer = document.getElementById("footer");
footer.innerHTML = copyright;

console.log(footer);

