/* ============================================================
   FINQUES CÈSAR — Demo · interaccions sòbries
   Sense dependències. Tot vanilla JS.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Menú mòbil ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Tanca el menú en clicar un enllaç (mòbil)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Ombra del header en fer scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Reveal en scroll amb efecte escalonat (respecta prefers-reduced-motion) ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Escalonem segons la posició entre els germans .reveal del mateix contenidor
          var el = entry.target;
          var siblings = el.parentElement
            ? Array.prototype.filter.call(el.parentElement.children, function (c) {
                return c.classList && c.classList.contains("reveal");
              })
            : [el];
          var idx = siblings.indexOf(el);
          if (idx > 0) { el.style.transitionDelay = Math.min(idx * 90, 360) + "ms"; }
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Comptadors animats de les estadístiques ---- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var statsBox = document.querySelector(".stats");
  if (statsBox && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        statsBox.classList.add("in");
        // Anima cada número que sigui purament numèric (250, 900, 30)
        statsBox.querySelectorAll(".n").forEach(function (numEl) {
          // El node de text objectiu: l'<em> si existeix, si no el propi .n
          var target = numEl.querySelector("em") || numEl;
          var raw = target.textContent.trim();
          var end = parseInt(raw.replace(/\D/g, ""), 10);
          if (isNaN(end) || reduceMotion) { return; }     // "2a", "API"… es queden igual
          var dur = 1100, start = null;
          function step(ts) {
            if (start === null) { start = ts; }
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);            // ease-out cubic
            target.textContent = Math.round(end * eased).toString();
            if (p < 1) { requestAnimationFrame(step); }
            else { target.textContent = end.toString(); }
          }
          target.textContent = "0";
          requestAnimationFrame(step);
        });
        obs.disconnect();
      });
    }, { threshold: 0.4 });
    countObserver.observe(statsBox);
  }

  /* ---- Filtres de l'agència (només visual, demo) ---- */
  var filterBtns = document.querySelectorAll(".filters button");
  var props = document.querySelectorAll(".prop-card[data-cat]");
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-filter");
        props.forEach(function (card) {
          var show = cat === "all" || card.getAttribute("data-cat") === cat;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- FAQ accordion: només un obert alhora (fallback per a navegadors
         sense suport de <details name>) ---- */
  var faqItems = document.querySelectorAll("details.faq-item");
  if (faqItems.length) {
    faqItems.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          faqItems.forEach(function (other) {
            if (other !== item) { other.open = false; }
          });
        }
      });
    });
  }

  /* ---- Formulari de contacte: NO funcional (demo) amb validació bàsica ---- */
  var form = document.querySelector("form[data-demo-form]");
  if (form) {
    var note = form.querySelector(".form-feedback");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Validació senzilla del costat del client (només demostració de feedback)
      var nom = form.querySelector("#nom");
      var email = form.querySelector("#email");
      var problems = [];
      if (nom && !nom.value.trim()) { problems.push("el teu nom"); }
      var emailVal = email ? email.value.trim() : "";
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        problems.push("un correu electrònic vàlid");
      }
      if (!note) { return; }
      note.hidden = false;
      if (problems.length) {
        note.style.color = "var(--red, #b8231a)";
        note.textContent = "Abans d'enviar, indica " + problems.join(" i ") + ".";
        var first = problems[0].indexOf("nom") !== -1 ? nom : email;
        if (first) { first.focus(); }
      } else {
        note.style.color = "";
        note.textContent =
          "Gràcies, " + nom.value.trim().split(" ")[0] + "! Aquesta és una demo de presentació: " +
          "el formulari encara no envia dades. A la versió final connectarem l'enviament real i la protecció anti-spam.";
        note.focus();
      }
    });
  }

  /* ---- Any actual al footer ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
