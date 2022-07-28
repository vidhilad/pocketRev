function validate(){
    
    let firstname= document.getElementById("fname").value;
    let lastname= document.getElementById("lname").value;
    let phone = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let countries = document.getElementById("country").value;
    let address=document.getElementById("street-address").value;
    let postal=document.getElementById("postcode").value;
    let suggest=document.getElementById("suggest").value;
    const error_message = document.getElementById("error_message");
    
    let text;
    if(firstname.length < 4){
      text = "Please Enter valid First Name...";
      error_message.innerHTML = text;
      return false;
    }
    if(lastname.length < 3){
      text = "Please Enter valid Last Name...";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number...";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email...";
        error_message.innerHTML = text;
        return false;
    }
    if(countries.length > 1 ){
        text = "Please make only one valid selection...";
        error_message.innerHTML = text;
        return false;
    }
    if(address == ""){
      text = "Please enter the address with more than 10 characters...";
      error_message.innerHTML = text;
      return false;
    }
      
    if(postal.length > 6){
        text = "Please Enter valid postal code...";
        error_message.innerHTML = text;
        return false;
    }
      
    if(suggest.length<=15){
        text = "Please Enter the suggestions properly...";
        error_message.innerHTML = text;
        return false;
    }
    let message;
    message="Details entered by"+firstname+"<br>"+
            "First Name: "+firstname+"<br>"+
            "Last Name: "+ lastname+"<br>"+
            "Phone: "+phone+"<br>"+
            "Email: "+email+"<br>"+
            "Country: "+country+"<br>"+
            "Address: "+address+"<br>"+
            "Postal Code: "+postcode+"<br>"+
            "Your Suggestion: "+suggest+"<br>";
    alert(message+"<br>"+"You have been connected with us Successfully!");
    return true;
  }