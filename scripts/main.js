var myImage = document.querySelector('img');

myImage.onclick = function() {
      var Mysrc = myImage.getAttribute('src');
      if(Mysrc === 'images/og__fodnljjkwl6y.png') {
            myImage.setAttribute ('src','images/ac_video_poster_960x540_2x.jpg');
      } else {
            myImage.setAttribute ('src','images/og__fodnljjkwl6y.png');
      }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
      setUserName();
} else {
      var storedName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

function setUserName() {
      var myName = prompt('Please enter your name.');
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

myButton.onclick = function() {
      setUserName();
}