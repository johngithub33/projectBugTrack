
//guest user section
var guestUserButton = document.querySelector('#guestuserbutton');

guestUserButton.addEventListener('click', () => {
    console.log('clicked it guest user button')
    window.open('http://localhost:4000/guestuser', '_self')
})


//new user section
var createUserButton = document.querySelector('#createuserbutton');

createUserButton.addEventListener('click', (event) => {
    
    var displayContent = document.querySelector('.createusersection')

    displayContent.style.display = "block";
    displayContent.style.width = "300px"
    displayContent.style.margin = "10px auto"
    displayContent.style.border = "2px solid gray"

})