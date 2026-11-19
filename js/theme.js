/* Light / dark switch. The <head> of every page sets data-theme on <html>
   before anything paints (the visitor's saved choice, else their system
   setting); this file wires the header button and keeps the browser's
   theme colour in step. A choice is remembered in localStorage; without
   one, the page follows the system setting as it changes. */
(function () {
  var root = document.documentElement;
  var KEY = "casia-theme";
  var BAR = { dark: "#0f131c", light: "#f8f9ff" };
  var system = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;

  function saved() {
    try { var t = localStorage.getItem(KEY); return t === "light" || t === "dark" ? t : null; }
    catch (e) { return null; }
  }
  function current() { return root.getAttribute("data-theme") === "light" ? "light" : "dark"; }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var next = theme === "light" ? "dark" : "light";
    var label = "Switch to " + next + " mode";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.setAttribute("aria-label", label);
      b.setAttribute("title", label);
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.removeAttribute("media");
      m.setAttribute("content", BAR[theme]);
    });
  }

  apply(current());

  document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      var theme = current() === "light" ? "dark" : "light";
      try { localStorage.setItem(KEY, theme); } catch (e) { /* private mode: still switches */ }
      apply(theme);
    });
  });

  if (system && system.addEventListener) {
    system.addEventListener("change", function (e) {
      if (!saved()) apply(e.matches ? "light" : "dark");
    });
  }
})();
