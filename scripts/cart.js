

let cartData = JSON.parse(localStorage.getItem("cartdata")) || [];

let cartPrice=0;



// Cart Total Price
for(let i=0; i<cartData.length; i++)
{
    let x = cartData[i].price.trim().split(" ");
    x=x[x.length-1].trim().split(",").map(Number).join("");
    cartPrice+=Number(x);
}

document.querySelector("#cartPrice>span").innerText = `र ${cartPrice}`;
document.querySelector("#checkout>span").innerText = `र ${cartPrice}`;


// Displaying the items added to the Cart
let displayCart = () =>{
    let container = document.getElementById("container");
    cartData.forEach((ele, index) =>{
        let box = document.createElement("div");
        box.setAttribute("class", "card");

        let image_div = document.createElement("div");
        image_div.setAttribute("class", "image_div");

        let content_div = document.createElement("div");
        content_div.setAttribute("class", "content_div");

        let image = document.createElement("img");
        image.src = ele.image1;

        image_div.append(image);

        let title = document.createElement("h2");
        title.innerText=ele.title;
        title.setAttribute("class", "title");

        // let price = document.createElement("p");
        // price.innerText=ele.price;

        let x = ele.price.trim().split(" ");
        x = x[x.length-1].trim().split(",").map(Number).join("");

        // console.log(x);

        let price = document.createElement("h2");
        price.innerText = `र ${x}`;
        price.style.color = "blue";

        let quantity = document.createElement("select");
        quantity.value = 1;

        let option1 = document.createElement("option");
        option1.value=1;
        option1.innerText = 1;
        
        let option2 = document.createElement("option");
        option2.value=2;
        option2.innerText = 2;

        let option3 = document.createElement("option");
        option3.value=3;
        option3.innerText = 3;
        
        let option4 = document.createElement("option");
        option4.value=4;
        option4.innerText = 4;
        
        let option5 = document.createElement("option");
        option5.value=5;
        option5.innerText = 5;
        
        quantity.append(option1, option2, option3, option4, option5);
        let valueCount = quantity.value;
        quantity.onchange = () =>{
            valueCount++;
            let newPrice = x*quantity.value;
            // console.log(Number(quantity.value));
            // y=cartPrice.trim().split(" ");
            // y=y[y.length-1].map(Number);
            // y=y-Number(price)+newPrice;
            // cartPrice=y;
            cartPrice+=newPrice-x;
            document.querySelector("#cartPrice>span").innerText = `र ${cartPrice}`;
            document.querySelector("#checkout>span").innerText = `र ${cartPrice}`;
            price.innerText = `र ${newPrice}`;
        }

        let subtitle = document.createElement("p");
        subtitle.innerText = ele.subtitle;
        subtitle.setAttribute("class", "grey");

        let btn = document.createElement("button");
        btn.innerText = "REMOVE ITEM";
        btn.setAttribute("id", "remove");
        btn.addEventListener("click", () =>{
            removeElement(index);
        })
        

        content_div.append(title, subtitle, quantity, price, btn);

        box.append(image_div, content_div);

        container.append(box);

    })
}


displayCart();


// Removing the added item as per User's Instructions
function removeElement(i){
    cartData.splice(i, 1);
    localStorage.setItem("cartdata", JSON.stringify(cartData));
    window.location.reload();
}



// CHECKOUT
document.getElementById("checkout").addEventListener("click", checkoutToPrice);


function checkoutToPrice(){
    // console.log(cartPrice);
    localStorage.setItem("totalPrice", cartPrice);
    window.location.href = "information.html";
}