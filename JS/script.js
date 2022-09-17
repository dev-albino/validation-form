const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

function initApp(){
    addEventInElements(firstName, `Nome inválido (mínimo de 4 letras)`);
    addEventInElements(lastName, `Sobrenome inválido (mínimo de 4 letras)`);
    addEventInElements(password, `A senha deve conter 8 caracteres`);
    addEventInElements(email, `Digite um email válido`);
    firstName.value = ""; 
    lastName.value = ""; 
    email.value = ""; 
    password.value = ""; 
};
initApp();

function createObject(input, message){
    return{
        containerErrors: input.parentNode.children[1],
        message: message
    }
};