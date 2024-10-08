(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('menu-button--open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('menu-open');
    mobileMenuRef.classList.toggle('menu-container--open');
  });
})();
