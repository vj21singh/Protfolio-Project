function validateform() {
    var returnval = true;
    var name = document.forms['myForm']["name"].value;
    if (name.length == 0) {
        alert("Name can not be blank");
        returnval = false;
    }
    var email = document.forms['myForm']["email"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
        alert("Plese enter a valid email address");
        returnval = false;
    }
    var phone = document.forms['myForm']["contact"].value;
    if (phone.length != 10) {
        alert("Plese enter a valid contact number");
        returnval = false;
    }
    return returnval;
}
