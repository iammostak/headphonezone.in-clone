let form = document.getElementById("form");
form.addEventListener("submit", checkDetails);

let user = JSON.parse(localStorage.getItem("userCredentials")) || [];

function checkDetails(){
    event.preventDefault();

    let mail = form.mail.value;
    let password = form.passkey.value;

    form.mail.value="";
    form.passkey.value="";

    let count=0;
    for(let i=0; i<user.length; i++)
    {
        if(user[i].email===mail && user[i].password===password)
        {
            alert("Login Successful");
            window.location.href="index.html";
        }
        else{
            count++;
        }
    }
    if(count===user.length)
    {
        alert("Please check entered credentials");
    }
}