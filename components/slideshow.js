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

function slideshow_ii(i) {
  return `
    <div>SETUPS OF THE MONTH</div>
    <div>
      <div><i class="fa-solid fa-arrow-left"></i></div>
      <div id="countz">${i} / 3</div>
      <div><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  `;
}

export { slideshow, slideshow_ii };