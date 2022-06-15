let form = document.getElementById("form");
form.addEventListener("submit", saveUserData);

let dataFrame = JSON.parse(localStorage.getItem("userCredentials")) || [];

function saveUserData(){
    event.preventDefault();

    class Create{
        constructor(f_name, l_name, email, password){
            this.first_name = f_name;
            this.last_name = l_name;
            this.email = email;
            this.password = password;
        }
    }

    if(form.first_name.value==="" || form.last_name.value==="" || form.email.value==="" || form.password.value==="")
    {
        alert("Please Enter Complete Credentials. Sorry Account cannot be created");
    }
    else
    {
        let c1 = new Create(form.first_name.value, form.last_name.value, form.email.value, form.password.value);

        dataFrame.push(c1);

        localStorage.setItem("userCredentials", JSON.stringify(dataFrame));

        form.first_name.value="";
        form.last_name.value=""; 
        form.email.value="";
        form.password.value="";

        window.location.href="login.html";
    }
}