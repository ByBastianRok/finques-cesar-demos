/* FINQUES CÈSAR — Model C · selector de paleta de color */
(function () {
  'use strict';
  var KEY = 'fc-theme-c';

  var paletes = {
    or: {
      label: 'Or',
      dot: '#cba45a',
      vars: {}
    },
    jade: {
      label: 'Jade',
      dot: '#0d9488',
      vars: {
        '--gold':        '#0d9488',
        '--gold-bright': '#14b8a6'
      }
    }
  };

  /* widget en fosc perquè el model C té fons negre */
  var elStyle = document.createElement('style');
  elStyle.textContent = [
    '#fc-sw{',
      'position:fixed;bottom:24px;right:24px;z-index:300;',
      'display:flex;align-items:center;gap:9px;',
      'background:rgba(18,21,26,.92);backdrop-filter:blur(12px);',
      'border:1px solid rgba(255,255,255,.1);border-radius:999px;',
      'padding:9px 16px;box-shadow:0 4px 28px rgba(0,0,0,.5);',
    '}',
    '#fc-sw .fc-label{',
      'font-size:.62rem;font-weight:700;text-transform:uppercase;',
      'letter-spacing:.15em;color:rgba(255,255,255,.38);margin-right:2px;',
      'font-family:system-ui,sans-serif;',
    '}',
    '#fc-sw .fc-dot-btn{',
      'width:22px;height:22px;border-radius:50%;border:2.5px solid transparent;',
      'cursor:pointer;padding:0;background:none;transition:all .2s;flex:0 0 auto;',
    '}',
    '#fc-sw .fc-dot-btn.on{border-color:#fff;transform:scale(1.2);}',
    '#fc-sw .fc-dot{display:block;width:100%;height:100%;border-radius:50%;}'
  ].join('');
  document.head.appendChild(elStyle);

  var sw = document.createElement('div');
  sw.id = 'fc-sw';
  sw.setAttribute('role', 'group');
  sw.setAttribute('aria-label', 'Canviar paleta de color');
  var html = '<span class="fc-label" aria-hidden="true">Color</span>';
  Object.keys(paletes).forEach(function (k) {
    var p = paletes[k];
    html += '<button class="fc-dot-btn" data-pal="' + k + '" title="' + p.label + '" aria-label="Paleta ' + p.label + '">'
          + '<span class="fc-dot" style="background:' + p.dot + '"></span>'
          + '</button>';
  });
  sw.innerHTML = html;
  document.body.appendChild(sw);

  var elOverride = document.createElement('style');
  elOverride.id = 'fc-override';
  document.head.appendChild(elOverride);

  function aplicar(clau) {
    var p = paletes[clau] || paletes.or;
    var vars = p.vars;
    var css = Object.keys(vars).length
      ? ':root{' + Object.keys(vars).map(function (k) { return k + ':' + vars[k]; }).join(';') + '}'
      : '';
    elOverride.textContent = css;
    document.querySelectorAll('#fc-sw .fc-dot-btn').forEach(function (btn) {
      btn.classList.toggle('on', btn.dataset.pal === clau);
    });
    try { localStorage.setItem(KEY, clau); } catch (e) {}
  }

  document.querySelectorAll('#fc-sw .fc-dot-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { aplicar(btn.dataset.pal); });
  });

  var saved;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  aplicar(saved && paletes[saved] ? saved : 'or');
}());
