window.onload = function () {
	document.getElementById('login').onclick = validate;
  };

function validate()
{
	let btn = document.getElementById('btnCount');

	let fname2 = document.querySelector('#UserName');
	 let password = document.querySelector('#password');
	
	let namepattern = /^[a-zA-Z]{3,30}$/;
  
	//console.log(fname2.parentNode.children);
	if (fname2.value == '') {
		document.getElementsByTagName("small")[0].innerHTML = "Please Enter First Name";
	
	} else if (!namepattern.test(fname2.value)) {
		document.getElementsByTagName("small")[0].innerHTML = "Please Enter First Name With Letter Only";
	
	} else {
		document.getElementsByTagName("small")[0].innerHTML = "valid first name";
	
	}

	let passwordpattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(password.value == '')
	{
		document.getElementsByTagName("small")[1].innerHTML = "Please Enter Password";
	}
	else if(!passwordpattern.test(password.value))
	{
		
		document.getElementsByTagName("small")[1].innerHTML  = "Please Enter valid passowd using letters, numbers, characters";
	}
	else{
		document.getElementsByTagName("small")[1].innerHTML  = "valid password";
	}



	if(passwordpattern.test(password.value) && namepattern.test(fname2.value))
	{
		let result = confirm('Are you sure you want to submit?');

	let message = result ? 'form submitted' :
    'You clicked the Cancel button';

alert(message);
	}
}


