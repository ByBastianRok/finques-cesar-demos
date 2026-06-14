/* FINQUES CÈSAR — MODEL C · panells a pantalla completa */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var deck = document.querySelector(".deck");
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

  // Punts de navegació lateral (es construeixen ABANS de l'observer)
  var dotsWrap = document.querySelector(".dots");
  var dots = [];
  if (dotsWrap) {
    panels.forEach(function (p, i) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Anar al panell " + (i + 1));
      b.addEventListener("click", function () {
        p.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      });
      dotsWrap.appendChild(b); dots.push(b);
    });
    if (dots[0]) dots[0].classList.add("on");
  }

  // Observer: marca el panell visible (anima contingut + actualitza punts)
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          var i = panels.indexOf(en.target);
          dots.forEach(function (d, k) { d.classList.toggle("on", k === i); });
          // comptadors quan el panell d'estadístiques entra
          if (en.target.classList.contains("stats-panel")) runCounters(en.target);
        }
      });
    }, { threshold: 0.5, root: deck && deck.scrollHeight > window.innerHeight + 50 ? deck : null });
    panels.forEach(function (p) { io.observe(p); });
  } else {
    panels.forEach(function (p) { p.classList.add("in"); });
  }

  // Comptadors
  function runCounters(panel) {
    if (panel._counted) return; panel._counted = true;
    panel.querySelectorAll(".n").forEach(function (numEl) {
      var tgt = numEl.querySelector("em") || numEl, end = parseInt(tgt.textContent.replace(/\D/g, ""), 10);
      if (isNaN(end) || reduce) return;
      var dur = 1200, s = null;
      function step(ts) { if (s === null) s = ts; var p = Math.min((ts - s) / dur, 1), e = 1 - Math.pow(1 - p, 3); tgt.textContent = Math.round(end * e); if (p < 1) requestAnimationFrame(step); else tgt.textContent = end; }
      tgt.textContent = "0"; requestAnimationFrame(step);
    });
  }

  // Menú mòbil
  var burger = document.querySelector(".burger"), menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false");
    });
    menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
  }

  var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();
})();
