# Maestro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Application

### Page principale
- Système de recherche de tablature
- Filtre par instrument
- Affichage par défaut des dernières tablatures ajoutées

### Page partition (détails)
- Preview du pdf 
- Options : Téléchargement de la tablature / signaler une erreur
- Création de ticket (popup)
- Affichage du nombre de ticket en cours
- Création de commentaire

### Page paramètres de compte + tickets
En tant qu'admin :
- Affichage des tickets en cours
- Affichage des tickets traités

En tant qu'utilisateur :
- Paramètres de son compte (username, mot de passe)
- Affichage des tickets qu'il a créé
