/* FINQUES CÈSAR — MODEL B · interaccions */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Barra lateral mòbil
  var burger = document.querySelector(".burger"), rail = document.querySelector(".rail");
  if (burger && rail) {
    burger.addEventListener("click", function () {
      var o = rail.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false");
    });
    rail.addEventListener("click", function (e) { if (e.target.tagName === "A") { rail.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
  }

  // Reveal escalonat
  var rev = document.querySelectorAll(".reveal");
  if (rev.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, sib = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList && c.classList.contains("reveal"); }) : [el];
        var i = sib.indexOf(el); if (i > 0) el.style.transitionDelay = Math.min(i * 85, 340) + "ms";
        el.classList.add("in"); io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add("in"); }); }

  // Comptadors
  var sbox = document.querySelector(".stats");
  if (sbox && "IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (es, obs) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        sbox.querySelectorAll(".n").forEach(function (numEl) {
          var tgt = numEl.querySelector("em") || numEl, end = parseInt(tgt.textContent.replace(/\D/g, ""), 10);
          if (isNaN(end) || reduce) return;
          var dur = 1100, s = null;
          function step(ts) { if (s === null) s = ts; var p = Math.min((ts - s) / dur, 1), e = 1 - Math.pow(1 - p, 3); tgt.textContent = Math.round(end * e); if (p < 1) requestAnimationFrame(step); else tgt.textContent = end; }
          tgt.textContent = "0"; requestAnimationFrame(step);
        });
        obs.disconnect();
      });
    }, { threshold: 0.4 });
    co.observe(sbox);
  }

  var y = document.querySelector("[data-year]"); if (y) y.textContent = new Date().getFullYear();
})();
