// Cours d'initiation à JavaScript - Débutant

// Message d'encouragement
// Salut Samuel ! Félicitations pour avoir décidé d'apprendre JavaScript. Ce langage est très puissant et te permettra de créer des sites web interactifs et dynamiques. Prends ton temps, pratique régulièrement, et surtout, amuse-toi en codant ! 🚀

// Qu'est-ce que JavaScript ?
// JavaScript est un langage de programmation utilisé principalement pour ajouter de l'interactivité aux pages web.
// Il fonctionne directement dans le navigateur sans nécessiter d'installation supplémentaire.

// Où exécuter du code JavaScript ?
// - Dans la console du navigateur (F12 > Console)
// - Dans un fichier .js lié à une page HTML
// - Dans un éditeur de code comme Visual Studio Code

// 1. Déclaration des variables
// Une variable est un espace où l'on stocke des informations.
// Il existe trois mots-clés pour déclarer une variable : var, let et const.

var nom = "Samuel"; // Ancienne méthode, à éviter
let age = 25; // let permet de déclarer une variable modifiable
const pays = "France"; // const est utilisé pour une variable qui ne change pas

// 2. Les types de données
// JavaScript reconnaît plusieurs types de valeurs :
let nombre = 42; // Un nombre
let texte = "Ceci est une phrase"; // Une chaîne de caractères (texte)
let estVrai = true; // Un booléen (true = vrai, false = faux)
let liste = [1, 2, 3, 4, 5]; // Un tableau contenant plusieurs valeurs
let objet = { nom: "Alice", age: 30 }; // Un objet contenant des informations

// 3. Afficher des informations
// La fonction console.log() permet d'afficher un message dans la console du navigateur.
console.log("Bonjour, bienvenue en JavaScript !");
console.log("Nom :", nom);
console.log("Âge :", age);

// 4. Opérations de base
let somme = 5 + 3; // Addition
let difference = 10 - 4; // Soustraction
let produit = 6 * 7; // Multiplication
let quotient = 20 / 4; // Division
let reste = 10 % 3; // Modulo (reste de la division)
console.log("Résultat de l'addition :", somme);

// 5. Les conditions
// Une condition permet d'exécuter un bloc de code seulement si une règle est respectée.
if (age > 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

// 6. Les boucles
// Une boucle permet de répéter une action plusieurs fois.

// Boucle for : répète une action un nombre défini de fois
for (let i = 0; i < 5; i++) {
    console.log("Tour de boucle :", i);
}

// Boucle while : répète tant qu'une condition est vraie
let compteur = 0;
while (compteur < 3) {
    console.log("Compteur :", compteur);
    compteur++;
}

// 7. Les fonctions
// Une fonction est un bloc de code réutilisable qui effectue une tâche précise.
function direBonjour(prenom) {
    return "Bonjour " + prenom + " !";
}
console.log(direBonjour("Samuel"));

// Fonction fléchée (syntaxe plus courte)
const addition = (a, b) => a + b;
console.log("Résultat addition :", addition(3, 5));

// 8. Interaction avec l'utilisateur
// Demander une entrée à l'utilisateur via une boîte de dialogue
// let reponse = prompt("Comment t'appelles-tu ?");
// console.log("Bienvenue, " + reponse + " !");

// 9. Manipulation du DOM (Document Object Model)
// JavaScript peut modifier le contenu des pages web.
// Exemple : Modifier le texte d'un élément HTML ayant l'ID "monElement"
// document.getElementById("monElement").innerText = "Nouveau texte";

// 10. Gestion des événements
// JavaScript permet d'exécuter du code lorsqu'un utilisateur interagit avec la page.
// Exemple : Afficher une alerte lorsqu'un bouton est cliqué
// document.getElementById("monBouton").addEventListener("click", function() {
//     alert("Bouton cliqué !");
// });

// Fin du cours d'initiation à JavaScript
// Felicitation Samuel ! Tu as terminer le premier cour d'initiation a JavaScript. Tu as appris les bases du langage et tu es pret a commencer par des petits projets et evoluer pas a pas .