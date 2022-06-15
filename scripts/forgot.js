let user = JSON.parse(localStorage.getItem("userCredentials")) || [];


let form = document.getElementById("form");
form.addEventListener("submit", setNewPassword);


function setNewPassword(){
    event.preventDefault();

    let mail = form.mail.value;
    let password1 = form.passkey.value;
    let password2 = form.apasskey.value;

    let count=0;

    if(mail==="" || password1==="" || password2==="")
    {
        alert("Please enter complete credentials");
    }
    else
    {
        for(let i=0; i<user.length; i++)
        {
            if(mail===user[i].email)
            {
                if(password1===password2)
                {
                    user[i].password=password1;
                    localStorage.setItem("userCredentials", JSON.stringify(user));
                    alert("New Password Set");
                    window.location.href="login.html";
                    // console.log(user[i].password);
                }
                else
                {
                    alert("Please enter same Password in both fields")
                }
            }
            else
            {
                count++;
            }
        }
        if(count===user.length)
        {
            alert("Email not found");
        }
    }
}

