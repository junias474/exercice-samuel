// avant de toucher le code js je veux que tu te sente deja dabord bien avec html et css , je laisse juste ca ici pour que tu jette juste un coup doeil ne t'addarde pas sur ca
        document.getElementById('addRowBtn').addEventListener('click', function() {
            // Demander les informations de l'utilisateur
            const id = prompt("Entrez l'ID:");
            const nom = prompt("Entrez le NOM:");
            const prenom = prompt("Entrez le PRENOM:");
            const tel = prompt("Entrez le TEL:");
            const moy = prompt("Entrez le MOY:");

            // Créer une nouvelle ligne et ajouter les informations
            const table = document.getElementById('table');
            const newRow = table.insertRow();
            newRow.innerHTML = `<td>${id}</td><td>${nom}</td><td>${prenom}</td><td>${tel}</td><td>${moy}</td>`;
        });