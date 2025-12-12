document.addEventListener('DOMContentLoaded', function() {
  // mobile menu toggle
  const toggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
  // copy email to clipboard
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const email = this.getAttribute('data-clipboard');
      navigator.clipboard.writeText(email).then(() => {
        this.textContent = 'Copied!';
        setTimeout(() => {
          this.textContent = 'Copy';
        }, 2000);
      });
    });
  }
  // update footer year
  const footer = document.querySelector('.footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} BARTØNE. Built with ♡.`;
  }
});
