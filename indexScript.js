
//guest user section
var guestUserButton = document.querySelector('#guestuserbutton');

guestUserButton.addEventListener('click', () => {
    window.open('http://localhost:4000/guestuser', '_self')
})


//new user section
var createUserButton = document.querySelector('#createuserbutton');

createUserButton.addEventListener('click', (e) => {
    var displayContent = document.querySelector('.createusersection')
    displayContent.style.display = "block";
})
