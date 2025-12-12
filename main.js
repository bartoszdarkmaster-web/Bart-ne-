(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Update footer year
  const footer = document.querySelector('.footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `\u00a9 ${year} BART\u00d8NE. Built with \u2661.`;
  }
})();
