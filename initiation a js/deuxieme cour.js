// Cours d'initiation à JavaScript - Niveau 2

// Bravo Samuel ! 🎉 Maintenant que tu connais les bases de JavaScript,
// nous allons approfondir un peu plus avec des concepts importants.

// 1. Les opérateurs logiques et de comparaison
// Les opérateurs sont des symboles qui permettent d'effectuer des opérations sur des valeurs.
// Il existe plusieurs types d'opérateurs : arithmétiques, de comparaison et logiques.

let a = 10; // Déclaration d'une variable a avec la valeur 10
let b = 5; // Déclaration d'une variable b avec la valeur 5

// Opérateurs de comparaison (ils retournent toujours un booléen : true ou false)
console.log(a > b); // Vérifie si a est plus grand que b (true)
console.log(a < b); // Vérifie si a est plus petit que b (false)
console.log(a == 10); // Vérifie si a est égal à 10 en valeur (true)
console.log(a === "10"); // Vérifie si a est strictement égal à "10" (false, car types différents)
console.log(a !== b); // Vérifie si a est différent de b (true)

// Opérateurs logiques (ils permettent de combiner des conditions)
console.log(true && false); // L'opérateur ET (&&) retourne true seulement si les deux conditions sont vraies (ici false)
console.log(true || false); // L'opérateur OU (||) retourne true si au moins une condition est vraie (ici true)
console.log(!true); // L'opérateur NON (!) inverse la valeur (ici false)

// 2. Les structures de contrôle avancées
// Elles permettent d'exécuter du code sous certaines conditions

let age = 20; // Déclaration d'une variable age avec la valeur 20
if (age >= 18 && age < 60) { // Vérifie si l'âge est entre 18 et 59
    console.log("Vous êtes un adulte actif.");
} else if (age >= 60) { // Vérifie si l'âge est 60 ou plus
    console.log("Vous êtes senior.");
} else { // Si aucune des conditions précédentes n'est remplie
    console.log("Vous êtes mineur.");
}

// 3. Les fonctions avancées
// Une fonction est un bloc de code réutilisable qui effectue une action précise

function multiplier(x, y) { // Fonction qui prend deux paramètres x et y
    return x * y; // Retourne le produit de x et y
}
console.log("5 * 3 =", multiplier(5, 3)); // Appelle la fonction et affiche le résultat

// Fonction fléchée avec un seul paramètre
const carre = n => n * n; // Fonction qui retourne le carré d'un nombre
console.log("Le carré de 4 est", carre(4));

// 4. Les tableaux (arrays) - Manipulation avancée
// Un tableau est une liste ordonnée d'éléments

let fruits = ["Pomme", "Banane", "Cerise"]; // Tableau contenant trois fruits
console.log("Premier fruit :", fruits[0]); // Affiche le premier élément du tableau
fruits.push("Orange"); // Ajoute "Orange" à la fin du tableau
fruits.pop(); // Supprime le dernier élément du tableau
console.log("Liste des fruits :", fruits); // Affiche la liste mise à jour

// Parcourir un tableau avec une boucle for
for (let i = 0; i < fruits.length; i++) { // Boucle qui parcourt le tableau
    console.log("Fruit numéro", i + 1, ":", fruits[i]);
}

// 5. Les objets - Stocker des informations liées
// Un objet est une structure qui regroupe plusieurs informations sous un même nom

let utilisateur = {
    nom: "Samuel", // Propriété nom
    age: 25, // Propriété âge
    pays: "France", // Propriété pays
    afficherInfo: function() { // Méthode qui retourne une chaîne formatée avec les infos de l'utilisateur
        return `Nom: ${this.nom}, Age: ${this.age}, Pays: ${this.pays}`;
    }
};
console.log(utilisateur.afficherInfo()); // Affiche les informations de l'utilisateur

// 6. Les boucles avancées
// Une boucle for...of pour parcourir un tableau
for (let fruit of fruits) { // Parcourt chaque élément du tableau fruits
    console.log("Fruit :", fruit);
}

// Une boucle for...in pour parcourir un objet
for (let cle in utilisateur) { // Parcourt chaque propriété de l'objet utilisateur
    console.log(`${cle} : ${utilisateur[cle]}`);
}

// 7. Introduction aux fonctions asynchrones avec setTimeout
// setTimeout permet d'exécuter une fonction après un certain délai
console.log("Début du programme");
setTimeout(() => { // Exécute le code après 2 secondes
    console.log("Ce message s'affiche après 2 secondes");
}, 2000);
console.log("Fin du programme");

// Félicitations Samuel ! Tu viens de finir le deuxième cours sur JavaScript.
// Continue à pratiquer et on passe au prochain niveau bientôt ! 🚀