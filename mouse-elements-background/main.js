const parallax = function (event) {
  // FOR EACH IN PARALLAX ELEMENTS (everything in parallax div that contains the "data-res" attribute)
  this.querySelectorAll('*[data-res]').forEach((item) => {
    // TAKING THE RESISTANCE/SPEED AND DIRECTION THAT THE ELEMENT WILL DO
    const res = item.dataset.res;
    // CALCULATING NEW COORDINATES
    const newX = (window.innerWidth - event.clientX * res) / 100;
    const newY = (window.innerHeight - event.clientY * res) / 100;
    // MOVING ITEM IN SCREEN
    item.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
  });
  // PARALLAX IN BACKGROUND POSITION
  this.style.backgroundPositionX = -event.clientX / 10 + 'px';
  this.style.backgroundPositionY = -event.clientY / 10 + 'px';
};

// ADDING LISTENER IN ALL PARALLAX DIVS

document.querySelectorAll('.parallax-layer').forEach((element) => {
  element.addEventListener('mousemove', parallax);
});
