// Mark JS as ready as early as possible so .js-ready CSS can take effect.
document.documentElement.classList.add('js-ready');

(function () {
    function ready(fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    }


    function initSolutionTabs() {
        var container = document.querySelector('[data-tabs]');
        if (!container) return;
        var tabs = Array.prototype.slice.call(container.querySelectorAll('[data-tab]'));
        var panels = Array.prototype.slice.call(document.querySelectorAll('[data-tab-panel]'));
        if (!tabs.length || !panels.length) return;

        function activate(id) {
            tabs.forEach(function (t) {
                var on = t.getAttribute('data-tab') === id;
                t.setAttribute('aria-selected', on ? 'true' : 'false');
                t.classList.toggle('is-active', on);
            });
            panels.forEach(function (p) {
                var on = p.getAttribute('data-tab-panel') === id;
                p.classList.toggle('hidden', !on);
                if (on) {
                    // Re-trigger fade animation
                    p.style.animation = 'none';
                    void p.offsetWidth;
                    p.style.animation = '';
                }
            });
            if (window.lucide) window.lucide.createIcons();
        }

        var stopped = false;
        tabs.forEach(function (t) {
            t.addEventListener('click', function () {
                stopped = true;
                activate(t.getAttribute('data-tab'));
            });
        });

        // Auto-cycle every 6s until the user clicks a tab.
        var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;
        var i = 0;
        setInterval(function () {
            if (stopped) return;
            i = (i + 1) % tabs.length;
            activate(tabs[i].getAttribute('data-tab'));
        }, 6000);
    }

    ready(function () {
        if (window.lucide && typeof window.lucide.createIcons === "function") {
            window.lucide.createIcons();
        }

        initSolutionTabs();

        var toggle = document.getElementById("navToggle");
        var menu = document.getElementById("mobileNav");
        if (toggle && menu) {
            toggle.addEventListener("click", function () {
                var isOpen = menu.classList.toggle("hidden");
                toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
                if (window.lucide) window.lucide.createIcons();
            });
        }

        // Smooth-scroll in-page anchors
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            a.addEventListener("click", function (e) {
                var id = a.getAttribute("href");
                if (id.length < 2) return;
                var target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });

        // Anti-spam guard. Forms submit natively (standard POST) so FormSubmit's
        // own server-side CAPTCHA runs and the user is redirected to thanks.html.
        // Here we only block the obvious bots before the request leaves the page:
        //   1) Honeypot — a hidden field a human never fills.
        //   2) Time-trap — submissions faster than a human could plausibly fill.
        var FORM_MIN_MS = 3000;
        var pageReadyAt = Date.now();
        document.querySelectorAll('form[data-form]').forEach(function (form) {
            form.addEventListener("submit", function (e) {
                var honey = form.querySelector('input[name="_honey"]');
                if (honey && honey.value) { e.preventDefault(); return; }
                if (Date.now() - pageReadyAt < FORM_MIN_MS) { e.preventDefault(); return; }
                // Otherwise allow the native submit — FormSubmit handles CAPTCHA + redirect.
            });
        });

        // Scroll reveal — fades sections up as they enter the viewport.
        var reveals = document.querySelectorAll('[data-reveal]');
        if (!reveals.length) return;
        var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced || !('IntersectionObserver' in window)) {
            reveals.forEach(function (el) { el.classList.add('is-revealed'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
                if (delay) {
                    setTimeout(function () { el.classList.add('is-revealed'); }, delay);
                } else {
                    el.classList.add('is-revealed');
                }
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(function (el) { io.observe(el); });
    });
})();
