// ---NavBar Hamburger--- //

const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

// Delete animation when resizing //
new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 1060){
        navLinksContainer.style.transition = "transform 0.4s ease-out"
    } else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)



// ---Reveal--- //

const RContainer = document.querySelector(".reveal_project");
const RTriggers = document.querySelectorAll(".reveal-p"); // Correspond à tout les éléments qui portent le nom de reveal-p //

RTriggers.forEach(trigger => trigger.addEventListener("click", toggleReveal))

// Ajoute et enlève la classe active //
function toggleReveal(){
    RContainer.classList.toggle("activeR")
}

// ---Fenêtre modale--- //

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger"); // Correspond à tout les éléments qui portent le nom de modal-trigger //

modalTriggers.forEach(trigger => trigger.addEventListener("click", function() {
    document.querySelector(`${this.dataset.target}`).classList.toggle("active")
}));

// Ajoute et enlève la classe active //

const btnb = document.querySelector(".back_button");

btnb.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// Récupération du bouton pour ouvrir la modale
var openModalBtn = document.getElementById("open-modal-btn");

// Récupération de la modale
var modal = document.getElementById("modalee");

// Récupération du bouton pour fermer la modale
var closeModalBtn = document.getElementsByClassName("close")[0];

// Au clic sur le bouton d'ouverture de la modale
openModalBtn.onclick = function() {
  modal.style.display = "block"; // Affiche la modale
}

// Au clic sur le bouton de fermeture de la modale
closeModalBtn.onclick = function() {
  modal.style.display = "none"; // Cache la modale
}

// Lorsque l'utilisateur clique en dehors de la modale, elle se ferme
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Cache la modale
  }
}
