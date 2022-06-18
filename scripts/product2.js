let data=JSON.parse(localStorage.getItem("products"));
let lastdata=JSON.parse(localStorage.getItem("lasdata"))||[];
if(lastdata==""||lastdata.length<=3){
lastdata.push(data)
localStorage.setItem("lasdata",JSON.stringify(lastdata))

}
else{
while(lastdata.length>=4){
    // if(true==Check(data,lastdata)){
    //     // continue;
    //     break;
    // }
    // else{
    lastdata.shift()
lastdata.push(data)
localStorage.setItem("lasdata",JSON.stringify(lastdata))
break;
    // }

}
}
// function Check(data,lastdata){

//     for(let j=0;j<lastdata.length;j++){
//         if(data.title===lastdata[j].title){
//             return true;
//         }
//     }
//     return false;
// }





let Append = (el) =>{
let lable= document.getElementById("top_label");
lable.innerText=`HOME / ${el.title}`

let images= document.getElementById("images1");

let image_1= document.createElement("img")


image_1.src=el.image1

images.append(image_1)


}
Append(data);

// <-----create element function Strat--->

function ADD(creat){
    return pars=document.createElement(creat)
    
 }
// <-----create element function End--->

//<------EMI CALCULATOR STRAT------->

function EMI(money){
    let val= Math.ceil(money/3)
    let gst= Math.ceil(money*0.1543)
    let text=`Or pay ₹ ${val}/month through EMI (UPI/Debit/Credit Cards)
            Includes GST of ₹ ${gst}`
    return text;
}
//<------EMI CALCULATOR END------->




let color_name="black"
let x=data.image1
for(let i=2;i<x.length-4;i++){

    if(x[i]=="B"&&x[i+1]=="l"&&x[i+2]=="u"&&x[i+3]=="e"){
color_name="blue"
    }
    if(x[i]=="B"&&x[i+1]=="l"&&x[i+2]=="a"&&x[i+3]=="c"){
color_name="black"
    } 
    if((x[i]=="r"||x[i]=="R")&&x[i+1]=="e"&&x[i+2]=="d"){
color_name="red"
    }
    if(x[i]=="p"&&x[i+1]=="i"&&x[i+2]=="n"&&x[i+4]=="k"){
        color_name="pink"
            }

    else{
        color_="black"
    }
}

let Price=(p)=>{

    let x = p.trim().split(' ');
    x = x[x.length-1].trim().split(',').map(Number).join('');
    
    return (x);
    }



let AppendDes = ({title,subtitle,price,price2,rating,image1,image2,...a},color_name) =>{

    let details1=document.getElementById("details1");
    
     let smart_name     =ADD("h3");

    let smart_heading   =ADD("h1");

    let smart_slogan    =ADD("p");
        smart_slogan.setAttribute("class","slogan")
    let smart_rating    =ADD("div");
        let smart_star1=ADD("span")
        smart_star1.setAttribute("class","fa fa-star checked")

        let smart_star2=ADD("span")
        smart_star2.setAttribute("class","fa fa-star checked")

        let smart_star3=ADD("span")
        smart_star3.setAttribute("class","fa fa-star checked")

        let smart_star4=ADD("span")
        smart_star4.setAttribute("class","fa fa-star checked")

        let smart_star5=ADD("span")
        smart_star5.setAttribute("class","fa fa-star")

        let smart_star6=ADD("span")
        smart_star6.innerText=` ${rating} `
smart_rating.append(smart_star1,smart_star2,smart_star3,smart_star4,smart_star5,smart_star6)

    smart_price_div     =ADD("div")
    let smart_price     =ADD("p");
smart_price.setAttribute("class","prices")
    let smart_cutoff    =ADD("p");
    smart_cutoff.style="text-decoration:line-through; color: rgb(179,179,179) "
    smart_price_div.append(smart_price,smart_cutoff)
    smart_price_div.setAttribute("class","pricediv")
    let smart_emi       =ADD("p")

    let smart_type      =ADD("p");
    smart_type.setAttribute("class","type")

    let smart_color     =ADD("div");
    smart_color.setAttribute("class","desimg")

        smart_color_img1=ADD("img");
        smart_color_img2=ADD("img");    
        smart_color_name=`color :${color_name}`
            smart_color_img1.src=image2
            smart_color_img2.src=image1
    smart_color.append( smart_color_img1, smart_color_img2)
    smart_name.innerText=title;
    smart_heading.innerText=title;
    smart_slogan.innerText=subtitle;

    smart_price.innerText=`₹ ${Price(price)}`;
    let eprice= Price(price)

    smart_cutoff.innerText=`MRP: ${price2}`;
    smart_emi.innerText= EMI(eprice)
    smart_type.innerText=`Type: ${title}`;







details1.append(smart_name,smart_heading,smart_slogan,smart_rating,smart_price_div,smart_emi,smart_type,smart_color_name,smart_color)


   
document.getElementById("reviewhead").innerText=`MORE FROM ${title}`

}
AppendDes(data,color_name)


function date(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days=["Sun","Mon","Tue","Thu","Fri","Sat"]
const d = new Date();
let month = d.getMonth();
let getdate=d.getDate()
let apdate=Math.ceil(d.getDate()+Math.random()*5)
let dayin=apdate%6
let day=(days[dayin]);


if(apdate>31){
    apdate=apdate-31
    month=month+1
}
month=months[month]
let ddate= document.getElementById("ddate")
ddate.innerText=` ${day},${apdate} ${month} `
}
date()







// <-------------description  start----------->

// let Appends =(data,container) =>{
//     container.innerHTML=""
//     data.forEach(({alt_description,urls:{full}}) => {

//         let div1= document.createElement("div");
//         div1.setAttribute("class","image")
//         let image= document.createElement("img");
//         let h3= document.createElement("h3");

//         image.src=full;
//         h3.innerText=alt_description;

//         div1.append(image,h3);

//         container.append(div1)

//     });
// }

let c=Math.ceil(Math.random()*16)

let arrey=true
let SearchImages = async (que,look) => {
    const Api = `R-mX2g9uSgWoc6RFeb1CuMZtFQBP37Xwas2EDxJN0Zc`
   
    try{

        let res;
    if(look=="p"){
          res=await fetch(`https://api.unsplash.com/search/photos/?query=${que}&orientation=squarish&per_page=20&client_id=R-mX2g9uSgWoc6RFeb1CuMZtFQBP37Xwas2EDxJN0Zc`);
    }
    else if(look=="l"){
         res=await fetch(`https://api.unsplash.com/search/photos/?query=${que}&orientation=landscape&per_page=20&client_id=R-mX2g9uSgWoc6RFeb1CuMZtFQBP37Xwas2EDxJN0Zc`);
    }
        let data =await res.json();
        if(c>16){
            c=1;
        }
       
       let meme=data.results[c].urls.full
        c++
    
        return (meme)
      
    } catch (err){
       
        
        return false
    }
}

let xdata=[
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-About-us-580-380-alpha.jpg?v=1632120627","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-About-us-580-380-omega.jpg?v=1632120627",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-About-us-580-380-alpha-1.jpg?v=1632129734","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-About-us-580-380-omega-1.jpg?v=1632129734",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-Banner-1180-500-01.jpg?v=1633325362",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-06.jpg?v=1633326979","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-04.jpg?v=1633325905",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-Banner-1180-400-02.jpg?v=1633325637","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E2000-Drop-Banner-New-03.jpg?v=1632216026",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-Banner-03.jpg?v=1633326358","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-Banner-04.jpg?v=1633327942",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-07.jpg?v=1633326979","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-03.jpg?v=1633325905",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-09.jpg?v=1633327576","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-10.jpg?v=1633327576",
    "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-01.jpg?v=1633074638","https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Final-Audio-E1000-580-450-02.jpg?v=1633074638",
]

let xda=0
async function smallfun(){
let container=document.getElementById("makeagrid")
let btnsz = container.getElementsByClassName("need");
let pack=["earphone","headphone","earbuds","headset","blutooth","sumsung earbuds"]
let ipack=Math.floor(Math.random()*6)
let looklike=["p","p","p","p","l","p","p","l","l","l","l","p","p","p","p","p","p"]
let lok=0

for(let i=0;i<btnsz.length;i++){
  
 let imag=document.createElement("img");
 if(lok>=looklike.length)lok=0
 let value=await SearchImages(pack[ipack],looklike[lok]);
 lok++
 if(xda>16){
    xda=0
 }
 if(value){
   imag.src=value
 }
 else if(!value){
    imag.src=xdata[xda]
    xda++
 }
btnsz[i].append(imag)
 

}


}
smallfun()
// <-----------------video append------>









var btnContainer = document.getElementById("description");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   console.log(this.innerText)
//    let part=document.getElementsByClassName("part")

//    if(this.innerText=="DESCRIPTION"){
    
//    }
//    if(this.innerText=="SPECS"){
//     part.innerText="spec"
//    }
    });
  }




  




let newPageTitle=data.title
document.querySelector('title').textContent = newPageTitle

//   <------cartpart------>




