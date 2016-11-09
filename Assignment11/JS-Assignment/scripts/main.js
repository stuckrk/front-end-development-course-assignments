



function getElm(id) {
    return document.getElementById(id);
}

function getValue(id) {
    return getElm(id).value;
}



function update() {
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var emailAddress = getValue('emailAddress');
    
    var messages = [];
    
    if (firstName == '') {
        messages.push("First Name is Required")
    }
    
    if (lastName == '') {
        messages.push("Last Name is Required")
    }
    
    if (emailAddress == '') {
        messages.push("Email Address is Required")
    }
    
    var html = "<ul>"
    
    for (var i = 0; i < messages.length; i++) {
        html = html + '<li>' + messages[i] + '</li>'
    }
    
    html = html + '</ul>'
    
    document.getElementById("error-list").innerHTML = html;
    
    
    if (firstName !== "" && lastName !== "" && emailAddress !== "") {
        alert("Submitted");
    }
    
    var user = {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    }
    
}

var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);


var arr = ['User', 'Email', 'Phone', 'Address', 'Zip'];
var x = arr[2];
console.log(x);
