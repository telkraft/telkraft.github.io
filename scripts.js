function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-tr]');
  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });
}
