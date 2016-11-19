document.getElementById('btnSubmit').addEventListener('click', submit);
document.getElementById('btnReset').addEventListener('click', reset);


function getElm(id) {
    return document.getElementById(id);
}

var inputs = ["firstName", "lastName", "emailAddress","findUs", "whyNeed"];

var error = "invalid";


function submit() {
    var elm;
    var errorList = [];
    
    // Validate Inputs + TextArea
    
    for (var i = 0; i < inputs.length; i++){
        elm = getElm(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.name + ' is required');
            elm.classList.add(error);
        } else {
            elm.classList.remove(error);
        }
    }
    
    // Validate Email Address
    
    var emailAddress = getElm("emailAddress");
    var isValidEmail = (emailAddress.value.indexOf('@') > -1 && emailAddress.value.indexOf('.com') > -1);
    
    if (emailAddress.value !== '' && isValidEmail === false) {
        errorList.push("Valid email is required.");
        emailAddress.classList.add(error);
    } else if (isValidEmail === true) {
        emailAddress.classList.remove(error);
    }
    
    // Validate Select 
    
    /*
    var findUs = getElm("findUs");
    
    if (findUs.value === "") {
        errorList.push("How did you find us is required.");
        findUs.classList.add(error);
    } else {
        findUs.classList.remove(error);
    }
    
    */ 
    
    // Validate Terms
    
    var terms = getElm("termsConditions").checked;
    
    if (terms === false) {
        errorList.push("You must accept the terms of service.");
        elm.classList.add(error);
    } else {
        elm.classList.remove(error);
    }
    
    // Display Results
    
    var html;
    
    if (errorList.length > 0) {
        html = '<ul class="error"><li>' + errorList.join('</li><li>') + '</li><ul>';
    } else {
        html = "<h1>Thank you for your submission.";
        reset();
    }
    
    getElm("messages").innerHTML = html;
}

//Reset Form

function reset(){
    for (var i = 0; i < inputs.length; i++) {
        var elm = getElm(inputs[i]);
        elm.value = "";
        elm.classList.remove(error);
    }
    
    getElm("messages").innerHTML = "";
}