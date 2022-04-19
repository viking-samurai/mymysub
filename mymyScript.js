const pictures = document.querySelectorAll('.picture');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

pictures.forEach(picture => picture.addEventListener('click', toggleOpen));
pictures.forEach(picture => picture.addEventListener('transitionend', toggleActive));
