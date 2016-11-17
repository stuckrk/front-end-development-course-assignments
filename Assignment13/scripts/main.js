function getElm(id) {
    return document.getElementById(id);
}


var inputs = ["firstName", "lastName", "emailAddress", "password", "confirmPassword", "aboutMe"];
var error = "invalid";

function submit(){
    var elm;
    var errorList = []
    //Validate Names
    
    for (var i = 0; i < inputs.length; i++) {
        elm = getElm(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.name + ' is required');
            elm.classList.add(error);
        } else {
            elm.classList.remove(error)
        }
    }
    
    // Validate Password
    
    var password = getElm("password").value;
    var passwordConfirm = getElm("confirmPassword").value; 
    
    if (password !== passwordConfirm) {
        errorList.push("Passwords do not match.")
    }
    
    //Validate Time Zone
    
    if (timezone.value < 2) {
        errorList.push("Time Zone is Required.")
    }
    
    //Validate Terms
    
    var terms = getElm("terms").checked;
    
    if (terms === false) {
        errorList.push("Must Accept Terms.");
    }
    
    
    // Display Results
    
    var html; 
    
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = "<h1>Thank you for registering</h1>";
        reset();
    }
    
    getElm("message").innerHTML = html;
}

//Reset form
function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getElm(inputs[i]);
        elm.value = "";
        elm.classList.remove(error);
    }
    
    getElm('message').innerHTML = '';
}




var btnSubmit = getElm("btnSubmit");
btnSubmit.addEventListener('click', submit);

var btnReset = getElm("btnReset");
btnReset.addEventListener('click', reset);
/**

function getElm(id) {
    return document.getElementById(id);
}

function getValue(id) {
    return getElm(id).value;
}

function addClass(id) {
    return getElm(id).classList.add('invalid');
}

function removeClass(id) {
    return getElm(id).classList.remove('invalid');
}



function update() {
    var firstName = getValue("firstName");
    var lastName = getValue("lastName");
    var emailAddress = getValue("emailAddress");
    var password = getValue("password");
    var confirmPassword = getValue("confirmPassword");
    var validEmail = emailAddress.indexOf("@") > 0;
    var validPassword = password === confirmPassword; 
    var fullName = firstName + " " + lastName;
    var popUp = "Thank you, " + fullName;
    
    var messages = [];
    
    if (firstName === '') {
        messages.push("First Name is Required");
        addClass("firstName");
    } else {
        removeClass("firstName");
    }
    
    if (lastName === '') {
        messages.push("Last Name is Required");
        addClass("lastName");
    } else {
        removeClass("firstName");
    }
    
    if (emailAddress === '') {
        messages.push("Email Address is Required");
        addClass("emailAddress");
    } else {
        removeClass("firstName");
    }
    
    if (password === '') {
        messages.push("Password is Required");
        addClass("password");
    } else {
        removeClass("firstName");
    }
    
    if (confirmPassword === '') {
        messages.push("Confirm Password is Required");
        addClass("confirmPassword");
    } else {
        removeClass("firstName");
    }
    
    var html = "<ul>";
    
    for (var i = 0; i < messages.length; i++) {
        html = html + "<li>" + messages[i] + "</li>"
    }
    
    html += "</ul>";
    
    document.getElementById("message").innerHTML = html;
    
    
    
    if (firstName === "" || lastName === "" || emailAddress === "" || password === "" || confirmPassword === "") {
        alert("All Fields Are Required.");
    } else if (firstName !== "" && lastName !== "" && validEmail === false && password !== "" && confirmPassword !== "") {
        alert("Valid Email Address Required");
    } else if (firstName !== "" && lastName !== "" && validEmail === true && validPassword === false) {
        alert("Passwords Must Match");
    } else {
        alert(popUp);
    }
    
}

function btnReset() {
    if (firstName !== "" || lastName !== "" || emailAddress !== "" || password !== "" || confirmPassword !== "") {
        getElm("firstName").innerHTML = "";
        getElm("lastName").innerHTML = "";
        getElm("emailAddress").innerHTML = "";
        getElm("password").innerHTML = "";
        getElm("confirmPassword").innerHTML = "";
    }
}

var btnSubmit = getElm("btnSubmit");
btnSubmit.addEventListener('click', update);

var btnReset = getElm("btnReset");
btnReset.addEventListener('click', btnReset);

**/