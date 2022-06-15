import slideshow from "../components/slideshow.js";
import { deals, trending, newLaunches, wfh, unboxed, logo } from "../components/dataStorage.js";

var slideshow_content = [
   { img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Chu_HomepageBanner_Desktop_2000x.jpg?v=1654925610", h: "DON'T CHU WISH YOUR IEM WAS HOT LIKE ME", p: "MOONDROP CHU IS BACK" },
   { img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Ananda_HomepageBanner_Desktop2_2000x.jpg?v=1654679048", h: "REINVIGORATED PLANAR BRILLIANCE", p: "HIFIMAN ANANDA STEALTH EDITION" },
   { img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Kublai_Khan_HomepageBanner_Desktop_2000x.jpg?v=1654167888", h: "ONE RULER TO RULE THEM ALL", p: "NOBLE AUDIO'S G.O.A.T KUBLAI KHAN" },
   { img: "https://cdn.shopify.com/s/files/1/0153/8863/files/K9ProEss_HomepageBanner_Desktop_2000x.jpg?v=1654174152", h: "THE GORR OF AUDIOPHILE'S WORLD", p: "FIIO'S FLAGSHIP KILLER K9 PRO ESS" },
   { img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Unique-Melody-Mext_For_Desktop_2000x.jpg?v=1650529094", h: "BONE BREAKING BASS", p: "MEET UNIQUE MELODY'S BIG MEXT THING" }
];

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

}, 3000);

// chart part -------------------------------------------------------->

let contentz = document.getElementById('contentz');

let dealsz = document.getElementById('dealsz');
let trendingz = document.getElementById('trendingz');
let newLaunchesz = document.getElementById('newLaunchesz');
let wfhz = document.getElementById('wfhz');
let unboxedz = document.getElementById('unboxedz');

window.onclick = (event) => {
   if (event.target != dealsz) dealsz.style.color = 'gray';
   if (event.target != trendingz) trendingz.style.color = 'gray';
   if (event.target != newLaunchesz) newLaunchesz.style.color = 'gray';
   if (event.target != wfhz) wfhz.style.color = 'gray';
   if (event.target != unboxedz) unboxedz.style.color = 'gray';
}


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