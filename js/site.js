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

        // Form submission — POSTs as JSON to a FormSubmit AJAX endpoint
        // configured via the form's `action` attribute. Falls back to local-only
        // success state if no action is set.
        document.querySelectorAll('form[data-form]').forEach(function (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                var card = form.closest('[data-form-card]');
                var btn = form.querySelector('button[type="submit"]');
                var originalLabel = btn ? btn.innerHTML : null;
                var action = form.getAttribute('action');

                function showSuccess() {
                    if (!card) return;
                    form.classList.add("hidden");
                    var success = card.querySelector('[data-form-success]');
                    if (success) {
                        success.classList.remove("hidden");
                        if (window.lucide) window.lucide.createIcons();
                    }
                }
                function showError(msg) {
                    var existing = form.querySelector('[data-form-error]');
                    if (!existing) {
                        existing = document.createElement('div');
                        existing.setAttribute('data-form-error', '');
                        existing.className = 'p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800';
                        form.appendChild(existing);
                    }
                    existing.textContent = msg || 'Sorry — your message could not be sent. Please email corporate@casialab.com directly.';
                    if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
                }

                // No endpoint? Fall back to the legacy in-place success state.
                if (!action) { showSuccess(); return; }

                // Honeypot triggered (bot filled the hidden _honey field) — drop silently.
                var honey = form.querySelector('input[name="_honey"]');
                if (honey && honey.value) { showSuccess(); return; }

                // Build a JSON payload. Checkboxes with the same name collapse to an array.
                var data = {};
                var fd = new FormData(form);
                fd.forEach(function (value, key) {
                    if (typeof value !== 'string') return; // skip files etc.
                    if (data[key] !== undefined) {
                        if (!Array.isArray(data[key])) data[key] = [data[key]];
                        data[key].push(value);
                    } else {
                        data[key] = value;
                    }
                });

                if (btn) { btn.disabled = true; btn.innerHTML = 'Sending…'; }

                fetch(action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(function (res) {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.json();
                }).then(function (json) {
                    var ok = json && (json.success === true || json.success === 'true');
                    if (ok) {
                        showSuccess();
                    } else {
                        var msg = json && json.message;
                        // FormSubmit's "needs Activation" response — the recipient's
                        // inbox actually receives a confirmation email. Treat as soft success.
                        if (msg && /activation/i.test(msg)) {
                            showSuccess();
                        } else {
                            showError(msg);
                        }
                    }
                }).catch(function (err) {
                    showError(err && err.message ? null : null);
                });
            });
        });

        document.querySelectorAll('[data-form-reset]').forEach(function (btn) {
            btn.addEventListener("click", function () {
                var card = btn.closest('[data-form-card]');
                if (!card) return;
                var form = card.querySelector("form[data-form]");
                var success = card.querySelector('[data-form-success]');
                if (form) { form.reset(); form.classList.remove("hidden"); }
                if (success) success.classList.add("hidden");
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
