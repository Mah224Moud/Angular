# Exercice 1 :

Dans le modèle, créez un tableau contenant les informations suivantes pour dix étudiants :
Nom, prénoms, groupeTD, et groupeTP. Ensuite, concevez un tableau dans la vue avec une
ligne d'entête, suivi d'autant de lignes que d'éléments dans le tableau du modèle, produisant le
résultat ci-dessous :

#ID Nom Prénoms Groupe TD Groupe TP
1 ABA Thomas 2 4
2 KAK Marc 1 1
3 BEN Arthur 2 3
Mettez en place des fonctions qui permettent d'afficher les étudiants par groupe de TP et par
groupe de TD. Chaque liste devra être affichée dans des tableaux distincts dans les vues.
Sachant que 2 groupe de TD (groupe 1 et 2) et il y a 4 groupe de TP (Groupe 1, 2, 3 et 4).

```typescript
<script>
cont app = Vue.createApp({
data : function(){
        return {
            students = [
                {
                    id: '1',
                    nom: "ABA",
                    prenom: "Thomas",
                    GroupeTD: 2,
                    GroupeTP: 4
                },
                {
                    id: '2',
                    nom: "KAK",
                    prenom: "Marc",
                    GroupeTD: 1,
                    GroupeTP: 1
                },
                {
                    id: '3',
                    nom: "BEN",
                    prenom: "Arthur",
                    GroupeTD: 2,
                    GroupeTP: 3
                }
            ]
        }
    }

});

methods : {
    getStudentsByGroup(group) {
        return this.students.filter(student => student.GroupeTP === group);
    }
},
computed : {
    studentsByGroupTD() {
        return [...this.students.map(student => student.GroupeTD)];
    },
    studentsByGroupTP() {
        return [...this.students.map(student => student.GroupeTP)];
    }
}
</script>
```

```html
<div id="app">
  <table>
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Prénoms</th>
      <th>Groupe TD</th>
      <th>Groupe TP</th>
    </tr>
    <tr v-for="student in students">
      <td>{{student.id}}</td>
      <td>{{student.nom}}</td>
      <td>{{student.prenom}}</td>
      <td>{{student.GroupeTD}}</td>
      <td>{{student.GroupeTP}}</td>
    </tr>
  </table>
</div>
```

```html
<div id="app">
  <h2 v-for="TP in studentsByGroupTP()" v-bind:key="TP">Goupe de TP</h2>
  <table>
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Prénoms</th>
      <th>Groupe TD</th>
      <th>Groupe TP</th>
    </tr>
    <tr v-for="students in getStudentsByGroup(TP)">
      <td>{{student.id}}</td>
      <td>{{student.nom}}</td>
      <td>{{student.prenom}}</td>
      <td>{{student.GroupeTD}}</td>
      <td>{{student.GroupeTP}}</td>
    </tr>
  </table>

  <h2 v-for="TD in studentsByGroupTD()" v-bind:key="TD">Goupe de TD</h2>
  <table>
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Prénoms</th>
      <th>Groupe TD</th>
      <th>Groupe TP</th>
    </tr>
    <tr v-for="students in getStudentsByGroup(TD)">
      <td>{{student.id}}</td>
      <td>{{student.nom}}</td>
      <td>{{student.prenom}}</td>
      <td>{{student.GroupeTD}}</td>
      <td>{{student.GroupeTP}}</td>
    </tr>
  </table>
</div>
```

## Exercice 2

1. Mettez en place un formulaire de saisie pour les utilisateurs, comprenant des champs
   tels que le nom, le prénom et l'adresse e-mail.
2. Utilisez les directives de liaison de Vue.js pour établir des liens entre les valeurs
   saisies dans les champs et les propriétés de l'instance Vue.
3. Implémentez une validation élémentaire pour garantir que les champs obligatoires sont
   correctement renseignés avant de procéder à la soumission du formulaire.
4. En cas d'échec de la validation, assurez-vous d'afficher un message d'erreur pour
   informer l'utilisateur des corrections nécessaires.

```html
<form @submit.prevent="validate()">
  <input type="text" v-model="nom" placeholder="Nom" /> <br />
  <input type="text" v-model="prenom" placeholder="Prénom" /> <br />
  <input type="text" v-model="email" placeholder="votremail@test.com" /> <br />
  <input type="reset" value="Annuler" />
  <input type="submit" value="Envoyer" />
</form>
```

```typeScript
cont app = Vue.createApp({
    data() {
        return{
            nom: "",
            prenom: "",
            email: ""
        }
    }
    method : {
        validate() {
            if (!this.nom || !this.prenom || !this.email) {
                return "Tous les champs sont obligatoires";
            }

            return null;
        }
    }
});
```

## Exercice 3:

1. Mettez en place une application pour la gestion des films en Vue.js dans un fichier HTML.
2. Divisez l'application en deux composants : Liste_film et Add_film.
3. Dans le composant Liste_film, affichez une liste de films avec des détails tels que le titre et l’année.
4. Dans le composant Liste_film, qui permet d’ajouter des films.

```typescript
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/vue@2.6.12/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <liste-film></liste-film>
      <add-film></add-film>
    </div>

    <script>
      const app = Vue.createApp({
        data() {
          return [];
        },

        app.component("list-film", {
            data(){
                return {
                    film: [
                        {
                            title: "Cendrillon",
                            year: 2000
                        },
                        {
                            title: "Vikking",
                            year: 2002
                        }
                    ]
                }
            },
            template: `<ul>
                <li v-for="film in films">
                    <h2> {{film.title}} </h2>
                    <p> {{film.year}} </p>
                </li>
            `
        })
      });
    </script>
  </body>
</html>
```
