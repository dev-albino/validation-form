function addEventInElements(element, message){
    element.addEventListener("blur", function(){
        if(element.type === "text"){
            validateEmptyFields(element, createObject(element, message));
        }else if(element.type === "email"){
            isEmailValid(element, createObject(element, message));
        }else{
            passwordInvalid(element, createObject(element, message));
        }
    });
};

////////////////////////////////////////////////////////////////////////////////////////////////////

function validateEmptyFields(input, elements){
    if(!input.value || input.value.length < 4){
        addErrors(input, elements);
    }else{
        removeErrors(input, elements);
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////

function isEmailValid(input, elements){
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(input.value)){
        addErrors(input, elements);
    }else{
        removeErrors(input, elements);
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////

function passwordInvalid(input, elements){
    if(!input.value || input.value.length < 8){
        addErrors(input, elements);
    }else{
        removeErrors(input, elements);
    }
};