# Extrair links de arquivo markdown (Node.js)

Está biblioteca extrai links de arquivo markdown (Node.js)

## Como instalar:

```zsh
$  npm install markdown
```

## Como utilizar:
* Formato de entrada da função: string.
* Saída Json


Exemplo:

```node
const mark = require("markdown");

console.log(mark("Loren ipson [example](https://www.example.com)"));

//return [
//{
//  "href": "https://www.example.com",
//  "text": "[example]"
// }
//]

```
