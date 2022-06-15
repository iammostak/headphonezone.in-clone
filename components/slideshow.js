function slideshow(img, head, p) {
  return `
    <img id="slideimgs" src=${img} alt="">
    <div> 
      <p id='heads'>${head}</p>
      <p id='ps'>${p}</p>
      <button>SHOP NOW</button>
    </div>
  `;
}

export default slideshow;