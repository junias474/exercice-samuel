// avant de toucher le code js je veux que tu te sente deja dabord bien avec html et css , je laisse juste ca ici pour que tu jette juste un coup doeil ne t'addarde pas sur ca
document.getElementById('addRowBtn').addEventListener('click', function() {
    // Ajoute un écouteur d'événement 'click' au bouton avec l'ID 'addRowBtn'
    
    // Demander les informations de l'utilisateur
    const id = prompt("Entrez l'ID:");
    // Affiche une boîte de dialogue pour demander l'ID et stocke la valeur saisie dans la variable 'id'
    const nom = prompt("Entrez le NOM:");
    // Affiche une boîte de dialogue pour demander le NOM et stocke la valeur saisie dans la variable 'nom'
    const prenom = prompt("Entrez le PRENOM:");
    // Affiche une boîte de dialogue pour demander le PRENOM et stocke la valeur saisie dans la variable 'prenom'
    const tel = prompt("Entrez le TEL:");
    // Affiche une boîte de dialogue pour demander le TEL et stocke la valeur saisie dans la variable 'tel'
    const moy = prompt("Entrez le MOY:");
    // Affiche une boîte de dialogue pour demander le MOY et stocke la valeur saisie dans la variable 'moy'

    // Créer une nouvelle ligne et ajouter les informations
    const table = document.getElementById('table');
    // Récupère l'élément table avec l'ID 'table'
    const newRow = table.insertRow();
    // Insère une nouvelle ligne à la fin de la table
    newRow.innerHTML = `<td>${id}</td><td>${nom}</td><td>${prenom}</td><td>${tel}</td><td>${moy}</td>`;
    // Définit le contenu HTML de la nouvelle ligne avec les valeurs saisies par l'utilisateur
});