import { slideshow, slideshow_ii } from "../components/slideshow.js";
import { slideshows, deals, trending, newLaunches, wfh, unboxed, logo, slideShow } from "../components/dataStorage.js";
import { footerz, navbars } from "../components/navbar.js"

// alert div --------------------------------------------------------------->

let successz = document.querySelector('.successz');
let smsg = document.querySelector('.successz>span');

let errorz = document.querySelector('.errorz');
let emsg = document.querySelector('.errorz>span');

let warningz = document.querySelector('.warningz');
let wmsg = document.querySelector('.warningz>span');

// Navbar ----------------------------------------------------------------------------------------->

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

// ---------------------------------------------------------------------------------------------->

let slideshow_content = slideshows();

document.getElementById("slideshow").innerHTML = slideshow(slideshow_content[0].img, slideshow_content[0].h, slideshow_content[0].p);

let i = 1;

setInterval(() => {

   if (i == 5) i = 0;

   var box = document.getElementById("slideshow");
   box.innerHTML = null;

   box.innerHTML = slideshow(slideshow_content[i].img, slideshow_content[i].h, slideshow_content[i].p);

   let img = document.getElementById('slideimgs');

   if (i == 2 || i == 4) img.style.transform = 'scaleX(-1)';

   i++;

}, 5000);

// logos by md & shakil ahmad -------------------------------------->

let sz = document.querySelectorAll('.icon');

sz.forEach(function (el) {
   el.addEventListener('click', function () {
      window.location.href = 'earphone.html';
   });
});

// chart part -------------------------------------------------------->

let contentz = document.getElementById('contentz');

let dealsz = document.getElementById('dealsz');
let trendingz = document.getElementById('trendingz');
let newLaunchesz = document.getElementById('newLaunchesz');
let wfhz = document.getElementById('wfhz');
let unboxedz = document.getElementById('unboxedz');

dealsz.addEventListener('click', () => {
   dealsz.style.color = 'rgb(66, 66, 66)';
   appendChart(deals());
});

trendingz.addEventListener('click', () => {
   trendingz.style.color = 'rgb(66, 66, 66)';
   appendChart(trending());
});

newLaunchesz.addEventListener('click', () => {
   newLaunchesz.style.color = 'rgb(66, 66, 66)';
   appendChart(newLaunches());
});

wfhz.addEventListener('click', () => {
   wfhz.style.color = 'rgb(66, 66, 66)';
   appendChart(wfh());
});

unboxedz.addEventListener('click', () => {
   unboxedz.style.color = 'rgb(66, 66, 66)';
   appendChart(unboxed());
});

let appendChart = (data) => {

   contentz.innerHTML = null;

   data.forEach((el) => {

      let card = document.createElement('div');
      card.setAttribute('class', 'cardz');

      let img = document.createElement('img');
      img.src = el.img;

      let title = document.createElement('p');
      title.innerText = el.title;

      let about = document.createElement('p');
      about.innerText = el.about;

      let price = document.createElement('div');
      price.setAttribute('class', 'pricez');

      let newPrice = document.createElement('span');
      newPrice.innerText = el.newPrice;

      let oldPrice = document.createElement('span');
      oldPrice.innerText = el.oldPrice;

      price.append(newPrice, oldPrice);

      let rating = document.createElement('div');
      rating.setAttribute('class', 'ratingz');

      let star1 = document.createElement('i');
      star1.setAttribute('class', 'fa-solid fa-star');

      let star2 = document.createElement('i');
      star2.setAttribute('class', 'fa-solid fa-star');

      let star3 = document.createElement('i');
      star3.setAttribute('class', 'fa-solid fa-star');

      let star4 = document.createElement('i');
      star4.setAttribute('class', 'fa-solid fa-star');

      let star5 = document.createElement('i');
      star5.setAttribute('class', 'fa-solid fa-star-half-stroke');

      let review = document.createElement('span');
      review.innerText = el.review;

      rating.append(star1, star2, star3, star4, star5, review);

      card.append(img, title, about, price, rating);
      contentz.append(card);

   });

}; appendChart(deals());

contentz.addEventListener("click", () => {
   window.location.href = "earphone.html";
});

// brand logo's ---------------------------------------------------------------->

let logoz = document.getElementById('logoz');

let appendLogo = (data) => {

   logoz.innerHTML = null;

   data.forEach((el, index) => {
      let logozCard = document.createElement('div');
      logozCard.setAttribute('class', 'logozCard');

      let img = document.createElement('img');
      img.src = data[index];

      logozCard.append(img);
      logoz.append(logozCard);
   });

}; appendLogo(logo());

// slideShow 2 -------------------------------------------------------------->

let slideShowz = document.getElementById('slideShowz');

let images = slideShow();
let z = 0;
let flag;

if (z == 0) flag = true;

document.querySelector("#right_btn")
   .addEventListener("click", rightSlide);

function rightSlide() {

   if (flag) z = 1, flag = false;
   if (z == images.length) z = 0;

   let imgs = document.querySelector("#slideShowz>img");
   imgs.src = images[z++];

   let count = document.getElementById("countz");
   count.innerHTML = `${z} / 3`;

}

document.querySelector("#left_btn")
   .addEventListener("click", leftSlide);

function leftSlide() {

   z--;

   if (z < 0) z = 2;

   let imgs = document.querySelector("#slideShowz>img");
   imgs.src = images[z];

   let count = document.getElementById("countz");
   count.innerHTML = `${z + 1} / 3`;

}

// news partners --------------------------------------------------------->

let piz = document.getElementById('piz');
let piiz = document.getElementById('piiz');
let piiiz = document.getElementById('piiiz');

let ndtv = document.getElementById('ndtv');
let express = document.getElementById('express');
let today = document.getElementById('today');
let day = document.getElementById('day');
let indulge = document.getElementById('indulge');
let wire = document.getElementById('wire');

ndtv.addEventListener('click', () => {
   ndtv.style.filter = 'brightness(100%)';
   piz.innerText = 'phone? Headphone Zone shows you how to buy a';
   piiz.innerText = 'pair of good cans.';
   piiiz.innerText = 'Tired of the crappy ear buds that come with your';
});

express.addEventListener('click', () => {
   express.style.filter = 'brightness(100%)';
   piz.innerText = 'You seek specialists for fashion, wine and art, but';
   piiz.innerText = 'what stops you from doing so in your pursuit for';
   piiiz.innerText = 'perfect sound? Headphone Zone solves that.';
});

today.addEventListener('click', () => {
   today.style.filter = 'brightness(100%)';
   piz.innerText = 'With Headphone Zone, Indians now have a platform';
   piiz.innerText = 'to experience high end headphones and to seek';
   piiiz.innerText = 'advice from experts within the community.';
});

day.addEventListener('click', () => {
   day.style.filter = 'brightness(100%)';
   piz.innerText = 'What makes Headphone Zone stand out, is its range';
   piiz.innerText = 'of audio accessories, DACs and high-res players from';
   piiiz.innerText = 'the world’s top brands.';
});

indulge.addEventListener('click', () => {
   indulge.style.filter = 'brightness(100%)';
   piz.innerText = 'With Headphone Zone, we don’t have to settle for';
   piiz.innerText = 'earbuds that come bundled with our phones';
   piiiz.innerText = '. . .';
});

wire.addEventListener('click', () => {
   wire.style.filter = 'brightness(100%)';
   piz.innerText = 'Headphone Zone takes care of all customer queries';
   piiz.innerText = 'directly thereby eliminating the knowledge gap';
   piiiz.innerText = 'between the buyer and the product.';
});

// club joining ---------------------------------------------------------------->

document.querySelector('#joinz>button')
   .addEventListener('click', () => {
      warningz.style.display = 'flex';
      wmsg.innerText = 'You need to login first';
      setTimeout(() => { warningz.style.display = 'none'; }, 4000);
   });

// newsletter ----------------------------------------------------------------------->

let emailz = document.getElementById('emailz');

document.getElementById('emailzbtn')
   .addEventListener('click', () => {
      if (emailz.value.includes('@')) {
         emailz.value = null;
         successz.style.display = 'flex';
         smsg.innerText = 'Subscription successful';
         setTimeout(() => { successz.style.display = 'none'; }, 4000);
      } else {
         emailz.value = null;
         errorz.style.display = 'flex';
         emsg.innerText = 'Please, enter your e-mail';
         setTimeout(() => { errorz.style.display = 'none' }, 4000);
      }
   });

// social media -------------------------------------------------------------------->

let parents = document.querySelectorAll("#container_s2>div");
let childs = document.querySelectorAll("#container_s2>div>div");

for (let i = 0; i < parents.length; i++) {

   parents[i].addEventListener("mouseover", function () {
      childs[i].style.display = "block";
   });

   parents[i].addEventListener("mouseout", function () {
      childs[i].style.display = "none";
   });
}

// footer --------------------------------------------------------------------------->

document.getElementById('footerz').innerHTML = footerz();

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

// added items in the cart.----------------------------------------------------->

let cartdata = JSON.parse(localStorage.getItem('cartdata')) || [];
document.getElementById("added_items").innerText = cartdata.length;

// window.onclick ------------------------------------------------------------------>

window.onclick = (event) => {

   if (event.target != searchs_div && event.target != search && event.target != input) searchs_div.style.display = "none";
   if (event.target != dealsz) dealsz.style.color = 'gray';
   if (event.target != trendingz) trendingz.style.color = 'gray';
   if (event.target != newLaunchesz) newLaunchesz.style.color = 'gray';
   if (event.target != wfhz) wfhz.style.color = 'gray';
   if (event.target != unboxedz) unboxedz.style.color = 'gray';
   if (event.target !== ndtv) ndtv.style.filter = 'brightness(200%)';
   if (event.target !== express) express.style.filter = 'brightness(200%)';
   if (event.target !== today) today.style.filter = 'brightness(200%)';
   if (event.target !== day) day.style.filter = 'brightness(200%)';
   if (event.target !== indulge) indulge.style.filter = 'brightness(200%)';
   if (event.target !== wire) wire.style.filter = 'brightness(200%)';
   if (event.target !== ndtv && event.target !== express && event.target !== today && event.target !== day && event.target !== indulge && event.target !== wire) {
      piz.innerText = 'pair of good cans.';
      piiz.innerText = 'Tired of the crappy ear buds that come with your';
      piiiz.innerText = 'phone? Headphone Zone shows you how to buy a';
   }

};