


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

function addRowtoGrid(){
    const getgrid = document.querySelector('.griddata')

        //the below will be pulled from database in the future
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

        //checkbox section
        const checkboxDiv = document.createElement('label');
        checkboxDiv.setAttribute('class', 'container')
        checkboxDiv.style.textAlign = 'center';
        
            const para6 = document.createElement("input");
            para6.setAttribute('type', 'checkbox')
                        
            const spanCheck = document.createElement('span')
            spanCheck.setAttribute('class', 'checkmark')

            checkboxDiv.appendChild(para6);
            checkboxDiv.appendChild(spanCheck);


        //end checkbox section


    getgrid.append(para, para2, para3, para4, para5, checkboxDiv);
}

function removeRowFromGrid(){

    const getgrid = document.querySelector('.griddata')
    
    //delete the 11th child 5 times, this deletes a row
    for(let i = 0; i<5; i++)
    {
        getgrid.removeChild(getgrid.childNodes[11]);
    }
    
}

addRowtoGrid();
addRowtoGrid();
addRowtoGrid();
addRowtoGrid();

// removeRowFromGrid();
// removeRowFromGrid();





