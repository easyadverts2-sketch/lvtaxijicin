/**
 * Inline script pro layout – běží před hydratací, zabraňuje FOUC.
 * Logika musí být duplikovaná (nelze importovat theme.ts v čistém JS v <head>).
 */
export const THEME_INIT_SCRIPT = `
(function() {
  var theme = 'dark';
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      theme = stored;
    } else {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        theme = 'dark';
      } else {
        var hour = new Date().getHours();
        theme = (hour >= 6 && hour < 19) ? 'light' : 'dark';
      }
    }
  } catch (e) {}
  document.documentElement.classList.toggle('dark', theme === 'dark');
})();
`;
