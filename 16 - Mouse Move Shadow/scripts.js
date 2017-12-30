const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 20;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = x / width * walk - walk / 2;
  const yWalk = y / height * walk - walk / 2;

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

  console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
