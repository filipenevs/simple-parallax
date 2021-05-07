const parallax = function (event) {
  // GETTING MID SCREEN
  const midX = window.innerWidth / 2;
  const midY = window.innerHeight / 2;
  // FOR EACH IN PARALLAX ELEMENTS (everything in parallax div that contains the "data-res" attribute)
  this.querySelectorAll('*[data-res]').forEach((item) => {
    // TAKING THE RESISTANCE/SPEED AND DIRECTION THAT THE ELEMENT WILL DO
    const res = item.dataset.res;
    // CALCULATING NEW COORDINATES
    const newX = ((event.clientX - midX) * res) / 200;
    const newY = ((event.clientY - midY) * res) / 200;
    // MOVING ITEM IN SCREEN
    item.style.transform = `translate(${newX}px, ${newY}px)`;
  });
  // PARALLAX IN BACKGROUND POSITION
  const res = this.dataset.res;
  this.style.backgroundPositionX = -(event.clientX * res) / 200 + 'px';
  this.style.backgroundPositionY = -(event.clientY * res) / 200 + 'px';
};

// ADDING LISTENER IN ALL PARALLAX DIVS
document.querySelectorAll('.parallax-layer').forEach((element) => {
  element.addEventListener('mousemove', parallax);
});
