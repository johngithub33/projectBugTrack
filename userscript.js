


//get section one
var sect1 = document.querySelector('.centersection1');
sect1.style.display = "none";

//get section two
var sect2 = document.querySelector('.centersection2');
sect2.style.display = "none";


//dashboardbutton
var dashboardbutton = document.querySelector('#dashboardbutton')
dashboardbutton.addEventListener('click', () => {
    sect1.style.display = "contents";
})

var blankbutton = document.querySelector('#blankbutton')
blankbutton.addEventListener('click', () => {
    sect1.style.display = "none";
})

var section2button = document.querySelector('#managerolesbutton')
section2button.addEventListener('click', () => {
    sect2.style.display = "contents";
})



//insert row method here for HTML tables....
// .griddata

const getgrid = document.querySelector('.griddata')

const para = document.createElement("p");
const node = document.createTextNode("345");
para.appendChild(node);
getgrid.appendChild(para);
// getgrid.appendChild(para.appendChild(node));

const getgrid2 = document.querySelector('.griddata')
const para2 = document.createElement("p");
const node2 = document.createTextNode("ricky");
para2.appendChild(node2);
getgrid2.appendChild(para2);


