const noteContainer = document.querySelector(".note-container"); // Sélectionne le conteneur des notes, querySelector est une méthode qui permet de sélectionner un élément du DOM en utilisant un sélecteur CSS.
const createBtn = document.querySelector(".btn"); // Sélectionne le bouton de création de note
let notes = document.querySelectorAll(".input-box"); // Sélectionne toutes les notes existantes, querySelectorAll est une méthode qui permet de sélectionner plusieurs éléments du DOM en utilisant un sélecteur CSS.


/* Ajout d'une nouvelle note lorsqu'on clique sur le bouton "Créer une note" */

createBtn.addEventListener("click", function () {  // Ajoute un écouteur d'événement au bouton de création de note, addEventListener est une méthode qui permet d'attacher un gestionnaire d'événements à un élément. click est l'événement qui se déclenche lorsque l'utilisateur clique sur l'élément.
    let inputBox = document.createElement("p"); // Crée un nouvel élément p pour la note, createElement est une méthode qui permet de créer un nouvel élément HTML.
    let img = document.createElement("img"); // Crée un nouvel élément img pour l'icône de suppression
    inputBox.className = "input-box"; // Définit la classe CSS de l'élément p créé, className est une propriété qui permet de définir ou de récupérer la valeur de l'attribut class d'un élément.
    inputBox.setAttribute("contenteditable", "true"); // Rend l'élément p éditable par l'utilisateur, setAttribute est une méthode qui permet de définir la valeur d'un attribut d'un élément. contenteditable est un attribut HTML qui permet de rendre un élément éditable.
    img.src="images/delete.png"; // Définit la source de l'image de l'icône de suppression, img.src est une propriété qui permet de définir ou de récupérer la source d'une image.
    notesContainer.appendChild(inputBox).appendChild(img); // Ajoute l'élément p et l'icône de suppression au conteneur des notes, appendChild est une méthode qui permet d'ajouter un élément en tant que dernier enfant d'un autre élément. 
})

