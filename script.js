const notesContainer = document.querySelector(".notes-container"); // Sélectionne le conteneur des notes, querySelector est une méthode qui permet de sélectionner un élément du DOM en utilisant un sélecteur CSS.
const createBtn = document.querySelector(".btn"); // Sélectionne le bouton de création de note
let notes = document.querySelectorAll(".input-box"); // Sélectionne toutes les notes existantes, querySelectorAll est une méthode qui permet de sélectionner plusieurs éléments du DOM en utilisant un sélecteur CSS.



/* Affichage des notes stockées dans le stockage local lors du chargement de la page */
function showNotes() { // Fonction pour afficher les notes stockées dans le stockage local
    notesContainer.innerHTML = localStorage.getItem("notes"); // Récupère les notes depuis le stockage local et les affiche dans le conteneur des notes, getItem est une méthode qui permet de récupérer une valeur stockée dans le stockage local en utilisant une clé.
}

//showNotes(); // Appelle la fonction pour afficher les notes lors du chargement de la page


/* Récupération des notes depuis le stockage local lors du chargement de la page */
function updateStorage() { // Fonction pour mettre à jour le stockage local avec les notes actuelles
    localStorage.setItem("notes", notesContainer.innerHTML); // stocke le contenu HTML du conteneur des notes dans le stockage local sous la clé "notes", localStorage est un objet qui permet de stocker des données localement dans le navigateur.
}



/* Ajout d'une nouvelle note lorsqu'on clique sur le bouton "Créer une note" */

createBtn.addEventListener("click", ()=> {  // Ajoute un écouteur d'événement au bouton de création de note pour gérer le clic, "click" est le type d'événement qui se produit lorsqu'un élément est cliqué.
    let inputBox = document.createElement("p"); // Crée un nouvel élément p pour la note, createElement est une méthode qui permet de créer un nouvel élément HTML.
    let img = document.createElement("img"); // Crée un nouvel élément img pour l'icône de suppression
    inputBox.className = "input-box"; // Définit la classe CSS de l'élément p créé, className est une propriété qui permet de définir ou de récupérer la valeur de l'attribut class d'un élément.
    inputBox.setAttribute("contenteditable", "true"); // Rend l'élément p éditable par l'utilisateur, setAttribute est une méthode qui permet de définir la valeur d'un attribut d'un élément. contenteditable est un attribut HTML qui permet de rendre un élément éditable.
    img.src="images/delete.png"; // Définit la source de l'image de l'icône de suppression, img.src est une propriété qui permet de définir ou de récupérer la source d'une image.
    notesContainer.appendChild(inputBox).appendChild(img); // Ajoute l'élément p et l'icône de suppression au conteneur des notes, appendChild est une méthode qui permet d'ajouter un élément en tant que dernier enfant d'un autre élément. 
})

/* Suppression d'une note lorsqu'on clique sur l'icône de suppression */
notesContainer.addEventListener("click", function(e) { // Ajoute un écouteur d'événement au conteneur des notes pour gérer la suppression des notes
    if (e.target.tagName === "IMG") { // Vérifie si l'élément cliqué est une image (icône de suppression), target est une propriété de l'objet événement qui fait référence à l'élément qui a déclenché l'événement. tagName est une propriété qui permet de récupérer le nom de la balise HTML d'un élément.
        e.target.parentElement.remove(); // Supprime la note parente de l'icône de suppression, parentElement est une propriété qui permet de récupérer l'élément parent d'un élément. remove est une méthode qui permet de supprimer un élément du DOM.
        updateStorage(); // Met à jour le stockage local après la suppression de la note
    }
    else if( e.target.tagName === "p"){ // Vérifie si l'élément cliqué est une note (élément p),target  est une propriété de l'objet événement qui fait référence à l'élément qui a déclenché l'événement. tagName est une propriété qui permet de récupérer le nom de la balise HTML d'un élément. targetName est une propriété qui permet de récupérer le nom de la balise HTML d'un élément.
        notes = document.querySelectorAll(".input-box"); // Met à jour la liste des notes
        notes.forEach(nt => { // Parcourt chaque note)
            nt.onkeyup = function() { // Ajoute un gestionnaire d'événement pour la touche relâchée (keyup) sur chaque note
                updateStorage(); // Met à jour le stockage local lorsque le contenu de la note change
            }
        })
    }           
})


document.addEventListener("keydown", event => { // Ajoute un écouteur d'événement au document pour gérer les raccourcis clavier
if (event.key === "Enter") { // Vérifie si la touche appuyée est "Enter"
    document.execCommand("insertLineBreak"); // Insère un saut de ligne dans la note, execCommand est une méthode qui permet d'exécuter des commandes de formatage de texte dans un élément éditable.
    event.preventDefault(); // Empêche le comportement par défaut de la touche "Enter", preventDefault est une méthode qui permet d'empêcher le comportement par défaut d'un événement.
}
})