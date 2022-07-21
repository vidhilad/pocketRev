function validation() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let conformPass = document.getElementById('conformPass').value;
    let namepattern = /^[a-zA-Z]+$/;

    if (fname == "") {
        document.getElementById('firstName').innerHTML = " **Please fill the first name field";
        return false;
    }
    else if(!namepattern.test(fname)){
        document.getElementById('firstName').innerHTML='Pelase enter letters only';
        return false;
      }
      
    if (lname == "") {
        document.getElementById('lastName').innerHTML = " **Please fill the last name field";
        return false;
    }

    else if(!namepattern.test(lname)){
        document.getElementById('lastName').innerHTML='Pelase enter letters only';
        return false;
      }
    if (email == "") {
        document.getElementById('emailId').innerHTML = " **Please fill the email field";
        return false;
    }

    if (email.indexOf('@') <= 0) {
        document.getElementById('emailId').innerHTML = " **Invalid email id";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailId').innerHTML = " **Invalid email id";
        return false;
    }
    if (phone == "") {
        document.getElementById('phoneNumber').innerHTML = " **Please fill the phone number field";
        return false;
    }

    if (password == "") {
        document.getElementById('pass').innerHTML = " **Please fill the password";
        return false;
    }

    if ((password.length <= 5) || (password.length > 10)) {
        document.getElementById('pass').innerHTML = " **Password is not strong";
        return false;
    }

    if (conformPass == "") {
        document.getElementById('conPass').innerHTML = " **Please fill the confirm password field";
        return false;
    }


    if (password != conformPass) {
        document.getElementById('conPass').innerHTML = " **Password is not matching";
        return false;
    }   
}