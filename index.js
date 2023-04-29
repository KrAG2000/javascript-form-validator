function checker() {

    let username_check = new RegExp(/^[^0-9][\w\d]+[\.\_\-]?[\w\d]+$/);
    let email_check = new RegExp(/^[\w\d]*[\.]?[\w\d]*[@][\w]+[\.][\w]+$/);
    let password_check = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/);

    function style(rog, section) {
        document.querySelectorAll('.warning').style.listStyle = "none";
    }

    // USERNAME SECTION
    let inputusername = document.querySelector('#username').value;

    if (username_check.test(inputusername) && inputusername.length >= 3) {
        document.getElementById('warning-username').style.color = "green";
        // FUNCTION TEST IN PROGRESS
        document.getElementById('warning-username').innerHTML = "<i class='fa-regular fa-circle-check'></i> Success";
        console.log("UN:Success");
    }
    else if (inputusername.length < 3) {
        document.getElementById('warning-username').style.color = "red";
        document.getElementById('warning-username').innerHTML = "<li><i class='fa-regular fa-circle-xmark'></i> It should have at least 3 characters.</li>";
        // document.getElementById('warning-username').style.listStyle = "none";
        console.log("UN:Failure");
    }
    else if(!isNaN(inputusername[0])){
        document.getElementById('warning-username').style.color = "red";
        document.getElementById('warning-username').innerHTML = "<li><i class='fa-regular fa-circle-xmark'></i> Username should not start with a number.</li>";
        // document.getElementById('warning-username').style.listStyle = "none";
        console.log("UN:Failure");
    }
    else{
        document.getElementById('warning-username').style.color = "red";
        document.getElementById('warning-username').innerHTML = "<li><i class='fa-regular fa-circle-xmark'></i> Invalid username entered</li>";
        // document.getElementById('warning-username').style.listStyle = "none";
        console.log("UN:Failure");
    }


    // E-MAIL SECTION
    let inputemail = document.querySelector('#email').value;

    if (email_check.test(inputemail)) {
        document.getElementById('warning-email').style.color = "green";
        document.getElementById('warning-email').innerHTML = "<i class='fa-regular fa-circle-check'></i> Success";
        console.log("EM:Success");
    }
    else {
        document.getElementById('warning-email').style.color = "red";
        document.getElementById('warning-email').innerHTML = "<i class='fa-regular fa-circle-xmark'></i> Invalid email address!";
        console.log("EM:Failure");
    }


    // PASSWORD SECTION
    let inputPassword = document.querySelector('#password').value;

    if (password_check.test(inputPassword)) {
        document.getElementById('warning-password').style.color = "green";
        document.getElementById('warning-password').innerHTML = "<i class='fa-regular fa-circle-check'></i> Success";
        console.log("PW:Success");
    }
    else if(inputPassword.length < 6){
        document.getElementById('warning-password').style.color = "red";
        document.getElementById('warning-password').innerHTML = "<li><i class='fa-regular fa-circle-xmark'></i> It should be at least 6 character long.</li>";
        // document.getElementById('warning-password').style.listStyle = "none";
        console.log("PW:Failure");
    }
    else {
        document.getElementById('warning-password').style.color = "red";
        document.getElementById('warning-password').innerHTML = "<li><i class='fa-regular fa-circle-xmark'></i> Password should contain a lowercase and an uppercase letter, a number and a symbol.</li>";
        // document.getElementById('warning-password').style.listStyle = "none";
        console.log("PW:Failure");
    }


        // RE_ENTERED PASSWORD SECTION
    let inputrPassword = document.querySelector('#r-password').value;
    if (inputPassword == inputrPassword) {
        document.getElementById('warning-r-password').style.color = "green";
        document.getElementById('warning-r-password').innerHTML = "<i class='fa-regular fa-circle-check'></i> Success";
        console.log("RPW:Success");
    }
    else if (inputrPassword.length == 0) {
        document.getElementById('warning-r-password').style.color = "red";
        document.getElementById('warning-r-password').innerHTML = "<i class='fa-regular fa-circle-xmark'></i> Invalid password";
        console.log("RPW:Failure");
    }
    else {
        document.getElementById('warning-r-password').style.color = "red";
        document.getElementById('warning-r-password').innerHTML = "<i class='fa-regular fa-circle-xmark'></i> Password does not match.";
        console.log(inputPassword, "!=", inputrPassword);
        console.log("RPW:Failure");
    }

    console.log('Program ends!');
}


