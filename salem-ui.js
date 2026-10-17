/* Sistema del Consejo Local · utilidades de interfaz compartidas (iconos, menú de usuario, movimiento) */
(function(){
  var TRAZOS = {
    minutas:'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/><path d="M10 12h6M10 16h6"/>',
    disciplina:'<path d="M12 4v16M8 20h8"/><path d="M5 7.5h14"/><path d="M5 7.5L2.8 13a2.7 2.7 0 005.4 0z"/><path d="M19 7.5L16.8 13a2.7 2.7 0 005.4 0z"/>',
    ministerios:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.3c3 .2 5 2.3 5 5.7"/>',
    calendario:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8 14h2M14 14h2M8 17h2"/>',
    cruz:'<path d="M12 3v18M6 9h12"/>',
    personas:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.3c3 .2 5 2.3 5 5.7"/>',
    casa:'<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>',
    comite:'<rect x="6" y="5" width="12" height="16" rx="1.5"/><path d="M9 5V3h6v2M9 11h6M9 15h6"/>',
    rombo:'<path d="M12 3l9 9-9 9-9-9z"/><path d="M12 8l4 4-4 4-4-4z"/>',
    editar:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    imprimir:'<path d="M7 9V3h10v6"/><rect x="4" y="9" width="16" height="8" rx="1.5"/><path d="M7 14h10v7H7z"/>',
    habilitar:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
    reabrir:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 010 12h-3"/>',
    eliminar:'<path d="M4 7h16M10 3h4M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
    volver:'<path d="M15 5l-7 7 7 7"/>',
    mas:'<path d="M12 5v14M5 12h14"/>',
    descargar:'<path d="M12 4v11M7 11l5 5 5-5"/><path d="M5 20h14"/>',
    respaldo:'<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4"/><path d="M8 20v-6h8v6"/>',
    alerta:'<path d="M12 4l9.5 16.5h-19z"/><path d="M12 10v4.5M12 17.5v.1"/>',
    reloj:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
    'reloj-arena':'<path d="M7 3h10M7 21h10"/><path d="M8 3c0 5.5 8 5.5 8 9s-8 3.5-8 9"/><path d="M16 3c0 5.5-8 5.5-8 9"/>',
    prohibido:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
    clip:'<path d="M8.5 12.5l6-6a3 3 0 014.2 4.2l-8.2 8.2a5 5 0 01-7-7l7.2-7.2"/>',
    buscar:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    pausa:'<path d="M9 5v14M15 5v14"/>',
    play:'<path d="M8 5l11 7-11 7z"/>',
    ajustes:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.3c3 .2 5 2.3 5 5.7"/>',
    salir:'<path d="M9 4H5v16h4"/><path d="M15 8l4 4-4 4M19 12H9"/>',
    sobre:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    persona:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    burbuja:'<path d="M4 5h16v10H10l-4 4v-4H4z"/>',
    megafono:'<path d="M4 10v4h3l8 4V6L7 10z"/><path d="M18 9a4 4 0 010 6"/>',
    pin:'<path d="M9 4h6l-1 6 3 3H7l3-3z"/><path d="M12 13v7"/>',
    enlace:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    libro:'<path d="M5 4h13a1 1 0 011 1v14H7a2 2 0 00-2 2z"/><path d="M5 4v17"/><path d="M9 8h6"/>',
    ajustes2:'<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    urna:'<rect x="4" y="12" width="16" height="8" rx="1"/><path d="M8 12V7h8v5"/><path d="M10 9.6l1.4 1.4 2.6-2.6"/>',
    candado:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    recargar:'<path d="M20 12a8 8 0 11-2.3-5.7"/><path d="M20 4v5h-5"/>',
    imagen:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/>',
    documento:'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/>',
    cerrar:'<path d="M6 6l12 12M18 6L6 18"/>',
    resaltador:'<path d="M14 4l6 6-8 8H6v-6z"/><path d="M4 21h8"/>',
    bombilla:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>',
    inicio:'<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>'
  };
  function ic(nombre){
    return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (TRAZOS[nombre] || TRAZOS.rombo) + '</svg>';
  }
  window.ic = ic;

  var SalemUI = {
    // Si el logo no carga, muestra la inicial de la iglesia en su lugar
    logoFallback: function(img){
      var s = document.createElement('span'); s.className = 'monograma'; s.textContent = 'S';
      if(img && img.parentNode) img.parentNode.replaceChild(s, img);
    },
    // Datos del usuario en el menú del encabezado
    usuario: function(email){
      var i = document.getElementById('usuario-inicial');
      if(i) i.textContent = (email || '?').charAt(0).toUpperCase();
    },
    menu: function(ev){
      if(ev) ev.stopPropagation();
      var m = document.getElementById('menu-usuario'), b = document.getElementById('btn-usuario');
      if(!m) return;
      var abrir = !m.classList.contains('abierto');
      m.classList.toggle('abierto', abrir);
      if(b) b.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    },
    cerrarMenu: function(){
      var m = document.getElementById('menu-usuario'), b = document.getElementById('btn-usuario');
      if(m) m.classList.remove('abierto');
      if(b) b.setAttribute('aria-expanded', 'false');
    },
    // Movimiento de entrada: se activa unos segundos y luego se retira para no repetirse en cada actualización de datos
    entrada: function(){
      document.body.classList.add('anim-on');
      clearTimeout(SalemUI._t);
      SalemUI._t = setTimeout(function(){ document.body.classList.remove('anim-on'); }, 2600);
    },
    // Cuenta las cifras desde cero hasta su valor (solo enteros)
    contar: function(raiz){
      if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var els = raiz.querySelectorAll('.n');
      els.forEach(function(el){
        var fin = parseInt(el.textContent, 10);
        if(isNaN(fin) || String(fin) !== el.textContent.trim() || fin === 0) return;
        var t0 = performance.now(), dur = 900;
        el.textContent = '0';
        (function paso(t){
          var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(fin * e);
          if(p < 1) requestAnimationFrame(paso);
        })(t0);
      });
    }
  };
  window.SalemUI = SalemUI;

  // Sustituye los emojis de la interfaz por iconos de trazo fino (solo en páginas con <body data-iconos>)
  var EMOJIS = {
    '＋':'mas','🗑':'eliminar','🗓':'calendario','✅':'habilitar','🔗':'enlace','📌':'pin','📋':'comite','🖨':'imprimir','🖍':'resaltador',
    '✎':'editar','✕':'cerrar','✓':'check','📖':'libro','⚙':'ajustes2','✉':'sobre','🙋':'persona','📣':'megafono','💬':'burbuja',
    '🗳':'urna','🔒':'candado','⌂':'inicio','🔍':'buscar','🙏':'cruz','↻':'recargar','↺':'recargar','📜':'minutas','📎':'clip','💡':'bombilla',
    '🖼':'imagen','📕':'documento','📘':'documento','📗':'documento','📙':'documento','🔎':'buscar'
  };
  var COLOR = { '📕':'#b3261e', '📘':'#2a4a9a', '📗':'#1d6a4c', '📙':'#a35a10' };
  var RE_EMO = new RegExp('(' + Object.keys(EMOJIS).map(function(k){ return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\uFE0F?', 'g');
  var OMITIR = /^(SCRIPT|STYLE|TEXTAREA|OPTION|TITLE|SELECT)$/;
  function omitir(nodo){
    for(var el = nodo.parentNode; el && el !== document.body; el = el.parentNode){
      if(el.nodeType !== 1) continue;
      if(OMITIR.test(el.tagName) || el.isContentEditable || el.hasAttribute('data-sin-iconos') || (el.classList && el.classList.contains('rte-content'))) return true;
    }
    return false;
  }
  SalemUI.emojis = function(raiz){
    if(!raiz) return;
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, null), nodos = [], n;
    while((n = w.nextNode())){ RE_EMO.lastIndex = 0; if(RE_EMO.test(n.nodeValue) && !omitir(n)) nodos.push(n); }
    nodos.forEach(function(t){
      var txt = t.nodeValue, frag = document.createDocumentFragment(), ult = 0, m;
      RE_EMO.lastIndex = 0;
      while((m = RE_EMO.exec(txt))){
        if(m.index > ult) frag.appendChild(document.createTextNode(txt.slice(ult, m.index)));
        var cont = document.createElement('span'); cont.innerHTML = ic(EMOJIS[m[1]]);
        var svg = cont.firstChild; if(COLOR[m[1]]) svg.style.color = COLOR[m[1]];
        frag.appendChild(svg); ult = m.index + m[0].length;
      }
      if(ult < txt.length) frag.appendChild(document.createTextNode(txt.slice(ult)));
      t.parentNode.replaceChild(frag, t);
    });
  };
  document.addEventListener('DOMContentLoaded', function(){
    if(!document.body.hasAttribute('data-iconos')) return;
    SalemUI.emojis(document.body);
    new MutationObserver(function(muts){
      muts.forEach(function(m){
        m.addedNodes.forEach(function(a){
          if(a.nodeType === 1) SalemUI.emojis(a);
          else if(a.nodeType === 3 && a.parentNode && a.parentNode.nodeType === 1 && /[^\x00-\x7F]/.test(a.nodeValue)) SalemUI.emojis(a.parentNode);
        });
      });
    }).observe(document.body, { childList:true, subtree:true });
  });

  document.addEventListener('click', function(e){ if(!e.target.closest || !e.target.closest('.usuario')) SalemUI.cerrarMenu(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') SalemUI.cerrarMenu(); });
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-i]').forEach(function(el){ el.insertAdjacentHTML('afterbegin', ic(el.getAttribute('data-i'))); });
  });
})();
