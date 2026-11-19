/* Mobile menu: below the large breakpoint the header's links live in a panel
   under the bar. The button opens and closes it; choosing a link, pressing
   Escape, or widening the window past the breakpoint closes it. */
(function () {
  var button = document.querySelector("[data-menu-toggle]");
  var panel = document.getElementById("mobile-menu");
  if (!button || !panel) return;
  var icon = button.querySelector("[data-menu-icon]");
  var wide = window.matchMedia ? window.matchMedia("(min-width: 1024px)") : null;

  function set(open) {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (icon) icon.textContent = open ? "close" : "menu";
  }

  button.addEventListener("click", function () { set(panel.hidden); });
  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) { set(false); button.focus(); }
  });
  if (wide && wide.addEventListener) wide.addEventListener("change", function (e) { if (e.matches) set(false); });
})();
