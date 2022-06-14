function slideshow(img,h1,p){
	return `
	<img src=${img} alt="">
  <div> 
   <h1>${h1}</h1>
   <p>${p}</p>
   <button>show now</button>
   `
}

export default slideshow;