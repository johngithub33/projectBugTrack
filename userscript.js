


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

addRowtoGrid();
addRowtoGrid();
addRowtoGrid();

function addRowtoGrid(){
    const getgrid = document.querySelector('.griddata')

        const para = document.createElement("p");
        const node = document.createTextNode("345");
        para.appendChild(node);

        const para2 = document.createElement("p");
        const node2 = document.createTextNode("ricky");
        para2.appendChild(node2);

        const para3 = document.createElement("p");
        const node3 = document.createTextNode("UAE");
        para3.appendChild(node3);

        const para4 = document.createElement("p");
        const node4 = document.createTextNode("notes!");
        para4.appendChild(node4);

        const para5 = document.createElement("p");
        const node5 = document.createTextNode("mom@mom.com");
        para5.appendChild(node5);

    getgrid.append(para, para2, para3, para4, para5);
}



