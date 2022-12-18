let activeTable = false;
let menuButton = document.getElementById('menubuttonbox');
let mobilenav = document.getElementById('mobilecontainerid');
let menuBurger = document.getElementById('menubutton');
let xButton = document.getElementById('xbutton');

menuButton.onclick = function(){
  if(activeTable === false){
    mobilenav.style.visibility = 'visible';
    menuBurger.style.display = 'none';
    xButton.style.display = 'flex';
    activeTable = true;
  }else{
    mobilenav.style.visibility = 'hidden';
    menuBurger.style.display = 'flex';
    xButton.style.display = 'none';
    activeTable = false;
  };
}
console.log('bruh');