import slideshow from "../components/slideshow.js";

var slideshow_content = [
{ img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Chu_HomepageBanner_Desktop_2000x.jpg?v=1654925610", h: "DON'T CHU WISH YOUR IEM WAS HOT LIKE ME", p: "MOONDROP CHU IS BACK" },
{ img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Ananda_HomepageBanner_Desktop2_2000x.jpg?v=1654679048", h: "REINVIGORATED PLANAR BRILLIANCE", p: "HIFIMAN ANANDA STEALTH EDITION" },
{ img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Kublai_Khan_HomepageBanner_Desktop_2000x.jpg?v=1654167888", h: "ONE RULER TO RULE THEM ALL", p: "NOBLE AUDIO'S G.O.A.T KUBLAI KHAN" },
{ img: "https://cdn.shopify.com/s/files/1/0153/8863/files/K9ProEss_HomepageBanner_Desktop_2000x.jpg?v=1654174152", h: "THE GORR OF AUDIOPHILE'S WORLD", p: "FIIO'S FLAGSHIP KILLER K9 PRO ESS" },
{ img: "https://cdn.shopify.com/s/files/1/0153/8863/files/Unique-Melody-Mext_For_Desktop_2000x.jpg?v=1650529094", h: "BONE BREAKING BASS", p: "MEET UNIQUE MELODY'S BIG MEXT THING" }
]

document.getElementById("slideshow").innerHTML = slideshow(slideshow_content[0].img,slideshow_content[0].h,slideshow_content[0].p);
let i=1
setTimeout(function(){
	setInterval(function(){
		if(i==4){
			i=0;
		}
		var box=document.getElementById("slideshow");
		box.innerHTML=null;
		
		box.innerHTML=slideshow(slideshow_content[i].img,slideshow_content[i].h,slideshow_content[i].p);
		i++
		
	
	},3000)
},3000)