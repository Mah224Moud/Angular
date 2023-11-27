# Architecture

`Vue` utilise le modele MVVM (Model-View-ViewModel) qui est un model proche du modele MVC dont le but est de separer ce qui est affiché sur l'écran (user interface) de la logique de la programmation.

## C

```typescript
const app = Vue.createApp({});
app.mount("#app");
```

## Model

```typescript
cont app = Vue.createApp({
data : function(){
        return {

        }
    }

});
```

## Vue

```html
<div id="app> </div>
```
