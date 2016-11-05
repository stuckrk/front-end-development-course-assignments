var array = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);
    
    var fullName = firstName + " " + lastName;
    
    getElm('p1_fullName').innerHTML = fullName;

    if (firstName != "" && lastName != "") {
        getElm("p1_valid").innerHTML = true;
    } else {
        getElm("p1_valid").innerHTML = false;
    }
    
    getElm("p1_fullNameLength").innerHTML = fullName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    
    getElm('p2_email').innerHTML = emailAddress;
    
    
    if (emailAddress.indexOf('@') > -1) {
        getElm('p2_valid').innerHTML = true;
    } else {
        getElm('p2_valid').innerHTML = false;
    }
    
    getElm('p2_emailLength').innerHTML = emailAddress.length;
    
    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    
    getElm('p3_number').innerHTML = randomNumber;
    
    if (parseInt(randomNumber) > -1) {
        getElm('p3_valid').innerHTML = true;
    } else {
        getElm('p3_valid').innerHTML = false;
    }

    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    
    array.push(arrayInput);
    
    getElm('p4_valid').innerHTML = array;
    
    getElm('p4_arraylength').innerHTML = array.length;
    
    
    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}