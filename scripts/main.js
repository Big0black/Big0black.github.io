var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/01.png') {
      myImage.setAttribute ('src','images/02.png');
    } else {
      myImage.setAttribute ('src','images/01.png')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('请输入你的名字')；
    localStorage.setItem('name',myName);
    myHeading.innerHTML = '刘海波是我老爸，唱歌贼难听，' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = '刘海波是我老爸，唱歌贼难听' + storeName;
}
myButton.onclick = function() {
    setUserName()；
}
