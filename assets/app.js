(function () {
  var tip = document.getElementById('tip');
  if (!tip) return;

  function show(el, x, y) {
    var k = el.getAttribute('data-k'), v = el.getAttribute('data-v');
    if (!k && !v) return;
    tip.innerHTML = '<span class="tk"></span><span class="tv"></span>';
    tip.querySelector('.tk').textContent = k || '';
    tip.querySelector('.tv').textContent = v || '';
    tip.classList.add('on');
    var r = tip.getBoundingClientRect();
    var left = Math.min(Math.max(8, x + 14), window.innerWidth - r.width - 8);
    var top = y - r.height - 14;
    if (top < 8) top = y + 18;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }
  function hide() { tip.classList.remove('on'); }

  document.querySelectorAll('.hit').forEach(function (el) {
    el.setAttribute('tabindex', '0');
    var k = el.getAttribute('data-k'), v = el.getAttribute('data-v');
    if (k || v) el.setAttribute('aria-label', (k || '') + ': ' + (v || ''));
    el.addEventListener('pointerenter', function (e) { show(el, e.clientX, e.clientY); });
    el.addEventListener('pointermove', function (e) { show(el, e.clientX, e.clientY); });
    el.addEventListener('pointerleave', hide);
    el.addEventListener('focus', function () {
      var b = el.getBoundingClientRect();
      show(el, b.left + b.width / 2, b.top);
    });
    el.addEventListener('blur', hide);
  });
  window.addEventListener('scroll', hide, { passive: true });
})();

(function () {
  var root = document.documentElement, btn = document.getElementById('themeToggle'),
      lbl = document.getElementById('themeLabel'), KEY = 'af-tema';
  function sysDark() { return matchMedia('(prefers-color-scheme: dark)').matches; }
  function paint(t) { lbl.textContent = t === 'dark' ? 'Oscuro' : 'Claro'; }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved) { root.setAttribute('data-theme', saved); paint(saved); }
  else { paint(sysDark() ? 'dark' : 'light'); }
  btn.addEventListener('click', function () {
    var cur = root.getAttribute('data-theme') || (sysDark() ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    paint(next);
  });
})();
