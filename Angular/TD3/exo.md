# Exercice 1: Création et manipulation de composants Angular

## Question:

Créez un composant Angular simple appelé Bibliotheque à l'aide de la commande Angular CLI.

## Response:

```bash
ng generate component Bibliotheque
```

## Question:

Donner le nom et la structure du composant qui a été crée

## Response:

- src
- src/app
- src/app/bibliotheque
- src/app/bibliotheque/bibliotheque.component.ts
- src/app/bibliotheque/bibliotheque.component.html
- src/app/bibliotheque/bibliotheque.component.css
- src/app/bibliotheque/bibliotheque.component.spec.ts

## Question:

Créer dans le même dossier un fichier qui permettra de créer une classe livre contenant les propriétés (titre ; auteur ; anneePubli)

## Response:

```typescript
export class Livre {
  titre: string;
  auteur: string;
  anneePubli: number;

  constructor(titre: string, auteur: string, anneePubli: number) {
    this.titre = titre;
    this.auteur = auteur;
    this.anneePubli = anneePubli;
  }
}
```

## Question:

Créer une variable de type de la classe Livre en y ajoutant cinq livres votre composant Bibliotheque

## Response:

Ouvrir le fichier Bibliotheque.component.ts

1. Partie 1: importation

```typescript
import { Livre } from "./livre";
```

2. Partie 2: liaison
3. Partie 3: classe associée

```typescript
export class Bibliotheque {
  livres: Livre[] = [
    new Livre("Harry Potter", "J. K. Rowling", 1997),
    new Livre("Le Seigneur des anneaux", "J. R. R. Tolkien", 1954),
    new Livre("Le Comte de Monte-Cristo", "Alexandre Dumas", 1844),
    new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943),
    new Livre("Le Rouge et le Noir", "Stendhal", 1830),
  ];
}
```

## Question:

Puis affichez ces propriétés dans le modèle HTML du composant.

## Response:

Ouvrir le fichier Bibliotheque.component.html

```html
<h1>Liste des livres</h1>

<div *ngFor="let livre of livres">
  <p>{{livre.titre}}</p>
  <p>{{livre.auteur}}</p>
  <p>{{livre.anneePubli}}</p>
</div>
```

## Question:

Ajouter une fonction dans Bibliotheque qui permet d’ajouter un livre.

## Response:

```typescript

ajouter(livre: Livre): void {
this.livres.push(livre);
}

```

## Question:

Créer des champs et un bouton qui permettront d’ajouter un livre à partir de la page HTML

## Reponse:

<form (submit)="ajouter(new Livre(nom, auteur, annee))" >
    <input type="text" placeholder="nom du livre" name="nom" #test> <br>
    <input type="text" placeholder="auteur du livre" name="auteur" #auteur> <br>
    <input type="number" placeholder="année du livre" name="annee" #annee> <br>
    <input type="reset" value="Annuler">
    <input type="submit" value="Ajouter">
</form>

# Gestion des routes et de la navigation

## Question:

Créez une application Angular avec au moins trois pages (composants) : Accueil, Apropos, et Contact.

## Reponse:

```bash
ng generate component Accueil
ng generate component A propos
ng generate component Contact
```

## Question:

Configurez les routes pour ces pages dans votre application.

## Reponse:

1. Partie 1: Ouvrez le fichier app-routing.module.ts
2. Partie 2: Importation des modules

```bash
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
```

3. Partie 3: Définition des routes

```bash
const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'contact', component: ContactComponent },
];

```

## Question:

Créez une barre de navigation qui permet à l'utilisateur de naviguer entre les pages à l'aide de liens de navigation. Utilisez les routes pour charger dynamiquement les composants associés à chaque
page lorsque l'utilisateur clique sur un lien.

## Reponse:

<nav>
    <ul>
        <li><a routerLink="/accueil">Accueil</a></li>
        <li><a routerLink="/apropos">A propos</a></li>
        <li><a routerLink="/contact">Contact</a></li>
    </ul>
</nav>

</router-outlet>
