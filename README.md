#Calculateur de Différence de Dates
#Description
Ce projet est une simple application React qui permet de calculer la différence en jours entre deux dates. L'utilisateur peut entrer une date de début et une date de fin, et l'application retourne le nombre de jours entre ces deux dates.

#Structure du Projet
- src/components: Contient tous les composants React
- CalculateButton.tsx: Bouton pour déclencher le calcul
- DateInput.tsx: Champ pour saisir une date
- DateDifferenceCalculator.tsx: Composant principal qui rassemble tout
- src/hooks: Contient les hooks personnalisés
- useDateDifferenceCalculator.ts: Hook pour gérer la logique de calcul de la différence de dates
- src/utils: Contient les types et autres utilitaires
- types.ts: Définition des interfaces et types utilisés dans les composants
- src/__tests__: Contient les fichiers de tests
- useDateDifferenceCalculator.test.ts: Test du hook useDateDifferenceCalculator
- src/App.tsx: Point d'entrée de l'application
- package.json: Liste des dépendances et scripts
#Dépendances Utilisées
* React
* TypeScript
* @testing-library/react-hooks pour tester les hooks
#Comment Démarrer l'Application
Installation des dépendances : Ouvrez un terminal et naviguez jusqu'à la racine du projet. Exécutez ensuite la commande suivante :
* npm install

#Démarrer l'application : 
Toujours depuis la racine du projet, exécutez la commande suivante :

* npm run start

#Tester L'application :
Toujours dans la racine du projet, exécutez la commande suivante : 
 
* npm run test

L'application sera accessible à http://localhost:3000/ par défaut.