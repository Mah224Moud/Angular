## TypeScript:

    Est un langage de programmation qui est utilisé pour créer des applications web. C'est un langage qui ajoute la possible d'implementer des classes en js et typer les varibles. C'est aussi une sourcouche ajoutée au javascript

Example sur les types:

```typescript
const | let | var <variable>:type = valeurs;

// les types de base
let num:number = 12;
let str:string = "hello";
let bool:boolean = true;
let object:object = {"nom": "john"};
let list:Array<number> = [1,2,3,4,5];
let list2:number[] = [1,2,3,4,5];


// les types enum
enum Color {
Red,
Green,
Blue
}
let c: Color = Color.Green;


// fonctions et types
function add(num1:number, num2:number):number{
    return num1 + num2;
}

function buildName(firstName:string, lastName:string):string{
    return firstName + " " + lastName;
}
```

Exemple sur les classes:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo(): void {
    console.log("My name is " + this.name + " and I'm " + this.age);
  }
}

const person = new Person("John", 30);
person.showInfo(); // My name is John and I'm 30
```

Exemple sur les heritages:

```typescript
class Phone {
  private brand: string;
  private price: number;
  private name: string;

  constructor(brand: string, price: number, name: string) {
    this.brand = brand;
    this.price = price;
    this.name = name;
  }

  showInfo(): void {
    console.log(
      this.name + " form " + this.brand + " and costs " + this.price + "€"
    );
  }
}

class ApplePhone extends Phone {
  constructor(brand: string, price: number, name: string) {
    super(brand, price, name);
  }
}

const phone = new ApplePhone("Apple", 100, "iPhone 12");
phone.showInfo();
```
