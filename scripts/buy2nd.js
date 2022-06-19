document.querySelector(".submit-btn").addEventListener("click",OTP)
var Data= JSON.parse(localStorage.getItem("price"))
var box=document.querySelector("#plan")
var t_price=localStorage.getItem('totalPrice')


Display(box)
function Display(){
   
    box.value='₹ '+t_price;
    // box.value='₹'+ 50000
    console.log(Data)
    
    
}
var arr= JSON.parse(localStorage.getItem("main")) || [];


function OTP(event){
    event.preventDefault()
    var data={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        mobile:document.querySelector("#mobile").value,
        noc:document.querySelector("#noc").value,
        cn:document.querySelector("#cn").value,
        mon:document.querySelector("#mon").value,
        yr:document.querySelector("#yr").value,
        cvv:document.querySelector("#cvv").value



    }
    arr.push(data)
    console.log(arr)

    localStorage.setItem("main",JSON.stringify(arr))
   
    if(document.querySelector("#yr").value>2027){
        alert(" Alert! Expire year is wrong,We cannot procceed.")
        
    }
    else if(document.querySelector("#name").value!=document.querySelector("#noc").value){
        alert("Name not same as above")
       
    }
    else{
       alert("We are sending a OTP(One Time Password) on Your Registered Mobile Number.")
       window.location.href="OTP.html"
       
        

    }
   
   
  
  
}