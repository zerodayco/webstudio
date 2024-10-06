const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Елемент у видимій зоні!');
      animationOn(cards);
    } else {
      console.log('Елемент не у видимій зоні.');
      animationOff(cards);
    }
  });
});

function animationOff(items) {
  items.forEach(element => {
    element.style.animationPlayState = 'paused';
  });
}

function animationOn(items) {
  items.forEach(element => {
    element.style.animationPlayState = 'running';
  });
}

const targetElement = document.querySelector('.covers');
observer.observe(targetElement);

const cards = document.querySelectorAll('.marquee__line');
