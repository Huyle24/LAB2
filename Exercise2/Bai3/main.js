// Name and Email validation Function.
// Submit form with id function.

    // Submit form with name function.
    function submit_by_name() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
    var x = document.getElementsByName('form_name');
    x[0].submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Name : " + document.getElementById("form_id").getAttribute("name") + "nn Form Submitted Successfully......");
    }
    }
    
    
    // Name and Email validation Function.
    function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
    alert("Please fill all fields...!!!!!!");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
    } else {
    return true;
    }
    }