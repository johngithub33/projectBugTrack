


//get section one
var sect1 = document.querySelector('.centersection1');
sect1.style.display = "none";

//get section two
var sect2 = document.querySelector('.centersection2');
sect2.style.display = "none";


//dashboardbutton
var dashboardbutton = document.querySelector('#dashboardbutton')
dashboardbutton.addEventListener('click', () => {
    sect1.style.display = "block";
})