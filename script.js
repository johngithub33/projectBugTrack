



// createUser class
var createUserForm = document.querySelector('.createUser')


var createUserButton = document.querySelector('.createUserButton');

console.log('user buasdfasdftton',createUserForm);

createUserButton.addEventListener('click', (event) => {
    
    event.preventDefault();

    let tempStyle = createUserForm.style;

    tempStyle.display = "block";
    tempStyle.width = "300px"
    tempStyle.margin = "10px auto"
    tempStyle.border = "2px solid gray"

})