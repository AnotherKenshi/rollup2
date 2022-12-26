import "./index.css";
import JS_IMAGE from './assets/js.png';

console.log('Hello World!');

const text = document.createElement('h1')
text.textContent = `I love JavaScript`

const jsImage = document.createElement('img')
jsImage.src = JS_IMAGE
jsImage.className = 'js-logo'

document.body.append(text, jsImage);