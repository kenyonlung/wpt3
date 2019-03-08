import _ from 'lodash';
  import './style.css';
  import Icon from './icon.png';
 import Data from './data.xml';
 import printMe from './print.js';
 import { cube } from './math.js';
 import { square } from './math.js';
  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var element2 = document.createElement('pre');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack12323221'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to ' + cube(5),
           '5 squared is equal to ' + square(5)
           
         ].join('\n\n');
   btn.onclick = printMe;

   element.appendChild(btn);
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

   console.log(Data);

    return element;
  }

  document.body.appendChild(component());

  if (module.hot) {
       module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
         printMe();
       })
     }