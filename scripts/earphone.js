// ---------------------------------------------Navbar---------------------------------

import { navbars, footerz } from "../components/navbar.js"

document.getElementById("navbars").innerHTML = navbars();

let ref = document.querySelectorAll(".ref");
let childs1 = document.querySelectorAll(".dropdowns");

for (let i = 0; i < ref.length; i++) {

    ref[i].addEventListener("mouseover", function () {
        if (i == 2 || i == 3) childs1[i].style.display = 'block';
        else childs1[i].style.display = "flex";
    });

    ref[i].addEventListener("mouseout", function () {
        childs1[i].style.display = "none";
    });

}

let searchs_div = document.querySelector("#searchs>div");
let search = document.querySelector("#searchs");
let input = document.querySelector("#searchBars");

search.onclick = (event) => {
    searchs_div.style.display = "block";
}

// ------------------------------------Data Append-----------------------------------------------

var ProductsArray = [
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-Black_1160x.jpg?v=1633698380",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E1000-BALCK-No-Mic-03_1160x.jpg?v=1632819650",
        title: "Final - E1000",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "1,799",
        price2: "₹ 2,499",
        rating: "171 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-20_1160x.jpg?v=1593516090",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_1160x.jpg?v=1593432193",
        title: "BLON - BL-03",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "1,990",
        price2: "₹ 3,999",
        rating: "454 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Moondrop-Spaceship-01_1160x.jpg?v=1615961062",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Moondrop-Spaceship-02_1160x.jpg?v=1615961066",
        title: "Moondrop - Spaceship",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "1,799",
        price2: "₹ 2,199",
        rating: "51 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-C10Pro-Black-01_1160x.jpg?v=1627994426",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-C10pro-Black-02_1160x.jpg?v=1627994425",
        title: "CCA - C10 PRO",
        subtitle: "In-Ears With 1DD + 4BA Driver",
        rupees: "₹",
        price: "2,799",
        price2: "₹ 3,999",
        rating: "121 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/b76f02f42ef15e18e9f1b5aed7f7edf5_1160x.jpg?v=1641184507",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/397b9537bf78aea1a4a4acc4496a47fe_1160x.jpg?v=1641184507",
        title: "1Custom - Junior",
        subtitle: "In-Ears With 1 DD + 2 BA Drivers",
        rupees: "₹",
        price: "15,999",
        price2: "₹ 16,999",
        rating: "12 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-01_1160x.jpg?v=1612869168",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_1160x.jpg?v=1612869168",
        title: "Meze - 12 Classics V2",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "4,499",
        price2: "₹ 6,999",
        rating: "31 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH1s-Black-01_1160x.jpg?v=1621923405",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-FH1S-Black-1_1160x.jpg?v=1621576170",
        title: "FiiO - FH1S",
        subtitle: "In-Ears With 1 DD + 1 BA Drivers",
        rupees: "₹",
        price: "5,290",
        price2: "₹ 6,990",
        rating: "26 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-TripowinXHBB-Mele-Black-1160-1160-01_1160x.jpg?v=1634118581",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Tripowin-XHBB-Mele-Black-02_1160x.jpg?v=1634118546",
        title: "Tripowin x HBB - Mele",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "4,990",
        price2: "₹ 5,999",
        rating: "28 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-VE-Monk-Plus-Without-Mic-04_1160x.jpg?v=1627629881",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Untitled-1_82ab0df9-a1d5-4267-b04d-7560882528c3_1160x.jpg?v=1627629881",
        title: "Venture Electronics - Monk Plus",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "599",
        price2: "899",
        rating: "47 reviews",

    },
    {
        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-7HZ-Timeless-01_1160x.jpg?v=1634110891",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-7HZ-Timeless-015_8a556c13-9dd8-41ab-9c39-6cfd7cca4403_1160x.jpg?v=1634111958",
        title: "7HZ - Timeless",
        subtitle: "Planar Magnetic In-Ears",
        rupees: "₹",
        price: "17,990",
        price2: "₹ 21,999",
        rating: "14 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/KZ-ZSN-Pro-X-Black-01_960774c7-2c57-4f9c-ab41-12cff3d684de_1160x.jpg?v=1650864564",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/KZ-ZSN-Pro-X-Black-02_596bf1c5-9f86-4e25-a29b-bc5422a38160_1160x.jpg?v=1650864564",
        title: "KZ - ZSN Pro X",
        subtitle: "In-Ears With 1 DD + 1 BA Drivers",
        rupees: "₹",
        price: "1,999",
        price2: "₹ 2,499",
        rating: "471 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-CS16-Black-01_1160x.jpg?v=1627907247",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-CCA-CS16-Black-02_1160x.jpg?v=1627907389",
        title: "CCA - CS16",
        subtitle: "In-Ears With 8 Balanced Armature Driver",
        rupees: "₹",
        price: "7,999",
        price2: "₹ 11,999",
        rating: "1 review",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-IKKO-OH2-Grey-01_1160x.jpg?v=1653557313",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-IKKO-OH2-Grey-6_1160x.jpg?v=1653559634",
        title: "IKKO - OH2",
        subtitle: "In-Ears with 1 Dynamic Driver",
        rupees: "₹",
        price: "7,999",
        price2: "₹ 13,999",
        rating: "No reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-SoundMAGIC-E10C-1160-1160-gun-black_1160x.jpg?v=1617094947",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-SoundMAGIC-E10C-1160-1160_1160x.jpg?v=1617094947",
        title: "SoundMAGIC - E10C",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "1,599",
        price2: "₹ 3,199",
        rating: "710 reviews",

    },

    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/soundmagic-e11c-black-headphone-zone-5369095847999_1160x.jpg?v=1580360044",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-SoundMAGIC-E11C-1160-1160-black_1160x.jpg?v=1649233095",
        title: "SoundMAGIC - E11C",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "2,499",
        price2: "₹ 3,999",
        rating: "405 reviews",

    },

    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/52af5795fecba210a9ac164f697ffdb3_1160x.jpg?v=1650872939",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/4be3c481986e40ba9c3133b879bdae48_1160x.jpg?v=1650872939",
        title: "KZ - ZST X",
        subtitle: "In-Ears With 1 DD + 1 BA Drivers",
        rupees: "₹",
        price: "1,599",
        price2: "₹ 1,999",
        rating: "375 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/14_6eae386b-4aff-4f08-885c-48e4f10b02b7_1160x.jpg?v=1614079747",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Silver-01_1160x.jpg?v=1614671808",
        title: "KZ - DQ6",
        subtitle: "In-Ears With 3 DD Drivers",
        rupees: "₹",
        price: "2,299",
        price2: "₹ 2,999",
        rating: "100 reviews",

    },
    {

        image1: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-EDX-Pro-Crystal-01_1160x.jpg?v=1630578130",
        image2: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-EDX-Pro-crystal-01_459c4189-ee97-4c56-8b95-f9e8b1c6f00a_1160x.jpg?v=1634125156",
        title: "KZ - EDX Pro",
        subtitle: "In-Ears With 1 Dynamic Driver",
        rupees: "₹",
        price: "999",
        price2: "₹ 1,299",
        rating: "495 reviews",

    },
]


let container = document.querySelector(".smallProducts")

function appendData(data) {
    container.innerHTML = null;
    data.forEach(function (ele) {
        let div = document.createElement("div")
        div.setAttribute("class", "smallBox")

        let image = document.createElement("img")
        image.src = ele.image1;
        image.style.cursor = "pointer";

        let title = document.createElement("h3")
        title.innerText = ele.title;
        title.style.marginBottom = "10px";

        let subtitle = document.createElement("h4")
        subtitle.innerText = ele.subtitle;
        subtitle.style.marginBottom = "10px";
        subtitle.style.fontSize = "13px"

        let smalldiv = document.createElement("div")
        smalldiv.setAttribute("class", "smalldiv")

        let rupeediv = document.createElement("div")

        let rupees = document.createElement("p")
        rupees.innerText = ele.rupees;
        rupees.style.color = "blue";
        rupees.style.fontSize = "17px";

        let price = document.createElement("h3")
        price.innerText = ele.price;
        price.style.color = "blue";

        rupeediv.append(rupees, price)
        rupeediv.setAttribute("class", "rupeediv")

        let oldprice = document.createElement("h3")
        oldprice.innerText = ele.price2;
        oldprice.style.color = "grey";
        oldprice.style.textDecoration = "line-through";

        smalldiv.append(rupeediv, oldprice)

        let ratingsdiv = document.createElement("div")
        ratingsdiv.setAttribute('class', 'ratings');

        let star1 = document.createElement('i');
        star1.setAttribute('class', "fa fa-star checked");

        let star2 = document.createElement('i');
        star2.setAttribute('class', "fa fa-star checked");

        let star3 = document.createElement('i');
        star3.setAttribute('class', "fa fa-star checked");

        let star4 = document.createElement('i');
        star4.setAttribute('class', "fa fa-star");

        let star5 = document.createElement('i');
        star5.setAttribute('class', "fa fa-star");

        let ratings = document.createElement("p")
        ratings.innerText = ele.rating;
        ratings.style.fontSize = "13px";

        ratingsdiv.append(star1, star2, star3, star4, star5, ratings)
        div.append(image, title, subtitle, smalldiv, ratingsdiv)
        container.append(div)

        div.onclick = () => {
            localStorage.setItem("products", JSON.stringify(ele));
            window.location.href = "./products2.html";
        }

    })



}

appendData(ProductsArray)

// -----------------------------------Sorting----------------------------------

document.querySelector(".sortingOptions").addEventListener("click", sortingFunc)

function sortingFunc() {
    console.log("click")
    let select = document.querySelector(".sortingOptions").value;

    console.log(select)

    if (select == "LTH") {
        ProductsArray.sort(function (a, b) {
            return a.price.split(",").join('') - b.price.split(",").join('');
            // console.log(a.price.split(",").join('')-b.price.split(",").join(''))
        })
        appendData(ProductsArray)
    }
    if (select == "HTL") {
        ProductsArray.sort(function (a, b) {
            return b.price.split(",").join('') - a.price.split(",").join('');
            // console.log(a.price.split(",").join('')-b.price.split(",").join(''))
        })
        appendData(ProductsArray)
    }

}
// --------------------------------------------Footer---------------------------------



document.getElementById("footerz").innerHTML = footerz();

document.getElementById('fbz')
    .addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/HeadphoneZone';
    });

document.getElementById('twz')
    .addEventListener('click', () => {
        window.location.href = 'https://twitter.com/Headphone_Zone';
    });

document.getElementById('igz')
    .addEventListener('click', () => {
        window.location.href = 'https://www.instagram.com/headphonezone/';
    });

document.getElementById('ytz')
    .addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/channel/UCVJzKP5WF8PAYrEjoroWtCw';
    });





window.onclick = (event) => {

    if (event.target != searchs_div && event.target != search && event.target != input) searchs_div.style.display = "none";
};


// To give no. of items in Cart
let data = JSON.parse(localStorage.getItem("cartdata")) || [];

document.getElementById("added_items").innerText = data.length;
