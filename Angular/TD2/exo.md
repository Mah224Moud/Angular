# Exo 1

1. Application TypeScript

## Creer classe personne

```typescript
class Personne {
  nom: string;
  age: number;
  ville: string;

  constructor(nom: string, age: number, ville: string) {
    this.nom = nom;
    this.age = age;
    this.ville = ville;
  }
}
```

## Creer interface Employe

```typescript
interface Employe {
  salaire: number;
  travailler(): void;
}
```

## Creer une classe EmployeClass

```typescript
class EmployeClass extends Personne implements Employe {
  salaire: number;
  constructor(nom: string, age: number, ville: string, salaire: number) {
    super(nom, age, ville);
    this.salaire = salaire;
  }
  travailler(): void {
    console.log(this.nom + " travaille");
  }
}
```

## Creer une instance EmployeClass

```typescript
let nouvelEmploye = new EmployeClass("Anna", 25, "Dijon", 2000);
nouvelEmploye.travailler();
```

2. Heritage TypeScript

## Creer une classe Livre

```typescript
class Livre {
  titre: string;
  auteur: string;
  annee: number;

  constructor(titre: string, auteur: string, annee: number) {
    this.titre = titre;
    this.auteur = auteur;
    this.annee = annee;
  }
}
```

## Creer une classe Bibliotheque avec une liste de livres

```typescript
class Bibliotheque {
  livres: Livre[];
  constructor() {
    this.livres = [];
  }

  ajouter(livre: Livre): void {
    this.livres.push(livre);
  }

  supprimer(titre: string): void {
    this.livres.filter((livre) => {
      if (livre.titre === titre) {
        this.livres.splice(this.livres.indexOf(livre), 1);
      }
    });
  }

  tousLesLivres(): void {
    this.livres.forEach((livre) => {
      console.log(livre);
    });
  }
}
```

## Exemple d'utilisation

```typescript
let bibliotheque = new Bibliotheque();
bibliotheque.ajouter(new Livre("Livre 1", "Auteur 1", 2000));
bibliotheque.ajouter(new Livre("Livre 2", "Auteur 2", 2020));
bibliotheque.ajouter(new Livre("Livre 3", "Auteur 3", 2010));
bibliotheque.ajouter(new Livre("Livre 4", "Auteur 4", 2003));

bibliotheque.supprimer("Livre 4");

bibliotheque.tousLesLivres();
```
