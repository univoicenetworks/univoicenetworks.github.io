// Mobile menu toggle and tap-to-open for the Service mega menu
document.addEventListener('click', function (e) {
  var t = e.target.closest('.wpr-mobile-toggle');
  if (t) {
    var w = t.closest('.univoice-mega');
    var h = document.querySelector('.site-header');
    if (h) w.style.setProperty('--menu-top', Math.max(0, h.getBoundingClientRect().bottom) + 'px');
    var open = w.classList.toggle('menu-open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
    return;
  }
  var s = e.target.closest('.wpr-mega-menu-true > .wpr-menu-item');
  if (s) {
    e.preventDefault();
    var li = s.parentElement;
    var isOpen = li.classList.toggle('is-open');
    s.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    return;
  }
  document.querySelectorAll('.wpr-mega-menu-true.is-open').forEach(function (li) {
    if (!li.contains(e.target)) li.classList.remove('is-open');
  });
});
// Highlight the current page in the main menu
(function () {
  var p = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.wpr-nav-menu a.wpr-menu-item').forEach(function (a) {
    if (a.getAttribute('href') === p) a.classList.add('wpr-active-menu-item');
  });
})();
