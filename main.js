// Bartøne static site JS
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // mobile menu
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close on click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // copy-to-clipboard helpers
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      toast.textContent = '';
    }, 2200);
  };

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy') || '';
      try{
        await navigator.clipboard.writeText(value);
        showToast('Skopiowano ✔');
      }catch(e){
        // fallback
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try{
          document.execCommand('copy');
          showToast('Skopiowano ✔');
        }catch(_){
          showToast('Nie udało się skopiować');
        }
        document.body.removeChild(ta);
      }
    });
  });
})();