import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exo2';
}

export class Produit {
  produits: any[] = [
    {
      id: 1,
      name: 'produit1',
      price: 10,
      description: 'description1'
    },
    {
      id: 2,
      name: 'produit2',
      price: 20,
      description: 'description2'
    },
    {
      id: 3,
      name: 'produit3',
      price: 30,
      description: 'description3'
    }
  ];
}
