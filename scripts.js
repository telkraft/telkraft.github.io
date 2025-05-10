
function switchLanguage(lang) {
  document.querySelectorAll('[data-tr], [data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}
