/**
 * 
 * Javascript for contact us page.
 * @returns  the firstname, lastname, phone, email, address, postal code and suggestions given by end user inside the alert dialog box.
 */

//Validate function for checking all the data entered satisfies the following conditions.
function validate(){
    
  //All the variables below stores the input collected from the end user through html form.
    let firstname= document.getElementById("fname").value;
    let lastname= document.getElementById("lname").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let address=document.getElementById("street-address").value;
    let postal=document.getElementById("postcode").value;
    let suggest=document.getElementById("suggest").value;
    const error_message = document.getElementById("error_message");
    const first_message=document.getElementById("first_message");
    //Text variable to display the error message.
    let text;

    //Checking if all the fields contain the data and are not empty if they are empty than a message would be displayed.
    if(firstname.length==0 && lastname.length==0 && phone.length==0 & email.length==0 && address.length==0 && postal.length==0 && suggest.length==0){
      text="Enter all the required details...and try again.";
      first_message.innerHTML=text;
      return false;
    }
    //Condition to check if the first name entered is of minimum 4 characters or not.
    if(firstname.length < 4){
      text = "First name must be of minimum 4 characters...";
      error_message.innerHTML = text;
      return false;
    }

    //Condition to check if the last name entered is of minimum 3 characters or not.
    if(lastname.length < 3){
      text = "Last name must be of minimum 3 characters...";
      error_message.innerHTML = text;
      return false;
    }

    //Condition to check it the phone number entered is of minimum length 10.
    if(isNaN(phone) || phone.length != 10){
      text = "Phone number must be of length 10...";
      error_message.innerHTML = text;
      return false;
    }

    //Condition to check the email entered has a valid format.
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Email must be entered with valid format...";
        error_message.innerHTML = text;
        return false;
    }

    //Condition to check whether the address is entered or not.
    if(address == ""){
      text = "Address is mandatory to enter...";
      error_message.innerHTML = text;
      return false;
    }
      
    //Condition to check the postal code entered is of valid length.
    if(postal.length > 6){
        text = "Postal code must be of length 6...";
        error_message.innerHTML = text;
        return false;
    }
    
    //Conditon to check if the suggestion entered is of minimum 15 characters.
    if(suggest.length<=15){
        text = "Suggestions must be of minimum 15 characters...";
        error_message.innerHTML = text;
        return false;
    }

    //Message variable to display all the data collected inside the alert dialog box.
    let message;
    message="Details entered by"+" "+firstname+"\n"+
            "First Name: "+firstname+"\n"+
            "Last Name: "+ lastname+"\n"+
            "Phone: "+phone+"\n"+
            "Email: "+email+"\n"+
            "Country: "+country+"\n"+
            "Address: "+address+"\n"+
            "Postal Code: "+postcode+"\n"+
            "Your Suggestion: "+suggest+"\n";
    message.innerHTML=alert(message+"You have Successfully connected with us.");
    return true;

  }