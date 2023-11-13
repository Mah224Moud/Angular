# Angular

## Introduction

- Le developpement web en constante evolution -> besoin:

## Caractéristiques:

- Framework application Js dev par Google
- Créer des app web monopages (chargées sur le client)
- Sollicitent le serveur que pour echanger des donnees via des services web(pas pour charger des pages)
- Architecture MEAN :

## Installation

```bash
npm install -g @angular/cli # installer le cli @angular/cli de facon globale (accessible partout depuis le terminal de l'ordinateur)
```

## Creation de projet

```bash
ng new ProjectName # ça cree un projet appele ProjectName puis nous pose un certain nombres de questions style, typescript, etc
```

## Lancer le serveur

```bash
ng serve -o # lance le serveur puis ouvre le navigateur
ng serve # on lance le serveur puis on ouvre manuellement le navigateur
```

## Creation d'un composant

```bash
# toutes les 3 commandes sont valides elles creent un composant appelé ComponentName
ng generate component ComponentName
ng g component ComponentName
ng g c ComponentName
```
