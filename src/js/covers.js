const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Елемент у видимій зоні!');
    } else {
      console.log('Елемент не у видимій зоні.');
    }
  });
});

const targetElement = document.querySelector('.covers');
observer.observe(targetElement);
