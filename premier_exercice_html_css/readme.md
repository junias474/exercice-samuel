# Exercice HTML & CSS - Débutant

## Objectif
Créer une page web basique en HTML et CSS qui affiche une carte de présentation avec :
- Votre nom
- Une courte biographie
- Une image

## Instructions
1. Dans le dossier `exercice/`, ouvrez `index.html` et ajoutez la structure de base HTML.
2. Créez une section avec une classe `card` qui contiendra :
   - Une image (avatar)
   - Votre nom en titre
   - Une courte biographie
3. Dans `style.css`, ajoutez des styles pour :
   - Centrer la carte sur la page
   - Ajouter une bordure arrondie
   - Améliorer le design avec des couleurs et des espacements
4. Testez le rendu dans un navigateur.

## Exemple de structure HTML
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carte de Présentation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <img src="avatar.png" alt="Votre photo">
        <h2>Votre Nom</h2>
        <p>Votre courte biographie ici.</p>
    </div>
</body>
</html>
```

## Exemple de style CSS
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
```

## Livrable attendu
- Un dossier `exercice/` contenant :
  - `index.html`
  - `style.css`
  - Une image `avatar.png` (facultatif, vous pouvez utiliser une image en ligne)

## Bonus (optionnel)
- Ajoutez un bouton "En savoir plus" sous la biographie avec un effet au survol.

Bonne chance ! 🚀