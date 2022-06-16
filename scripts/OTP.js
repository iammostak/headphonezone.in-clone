
document.querySelector(".submit-btn").addEventListener("click",OTP)
var data3=JSON.parse(localStorage.getItem("main"))
var Data= JSON.parse(localStorage.getItem("price"))
var box=document.querySelector("#rupee")
var box2=document.querySelector("#off")


Display(box,box2)
function Display(){
   
    box.innerText='amount';
    box2.innerText="After 20% off Payable Amount"
    console.log(Data)
    
    
}

function OTP(event){
    event.preventDefault()
    swal({
        title: "Congratulation!",
        text: "Your payment successfull",
        icon: "success",
        buttons: true,
        dangerMode: false,
    })
    .then(function (isOkay) {
        if (isOkay) {
            
            localStorage.setItem('purchase_done',true)
            window.location.href="index.html"
        }
        else localStorage.setItem('purchase_done',false)
    });
    return false;
   

   
   
    
}