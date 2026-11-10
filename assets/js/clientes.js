/* Fichas de cliente a partir de window.BITACORA (data/bitacora.js, generado desde
   Meta-Ads-CLI/bitacora/*.md) y, si la cuenta tiene pestaña de seguimiento, del
   presupuesto del mes (window.SEG). Lo usan index.html y cliente.html. */
(function () {
  const B = window.BITACORA || {orden: [], clientes: {}};
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

  // markdown en línea: `código`, **negrita**, _cursiva_ y [texto](url)
  function inline(s) {
    let t = esc(s);
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    t = t.replace(/(^|\s)_([^_]+)_(?=\s|$|[.,;:])/g, '$1<em>$2</em>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }

  // la clave de la pestaña de seguimiento sale del nombre del archivo (seguimiento-<clave>.html)
  const segKey = c => (c.seguimiento || '').replace(/^seguimiento-|\.html$/g, '') || null;

  function links(c, {bitacora = true} = {}) {
    const L = [];
    if (c.portal) L.push(`<a class="prin" href="${esc(c.portal)}" target="_blank" rel="noopener">${c.slug === 'baloto' ? 'Master' : 'Index del repo'} ↗</a>`);
    if (c.seguimiento) L.push(`<a href="${esc(c.seguimiento)}">Seguimiento</a>`);
    if (c.hoja_presupuesto) L.push(`<a href="${esc(c.hoja_presupuesto)}" target="_blank" rel="noopener">Hoja de presupuesto ↗</a>`);
    if (c.fuente_datos) L.push(`<a href="${esc(c.fuente_datos)}" target="_blank" rel="noopener">Fuente de datos ↗</a>`);
    if (c.flow) L.push(`<a href="${esc(c.flow)}" target="_blank" rel="noopener">Flow ↗</a>`);
    if (c.repo) L.push(`<a href="https://github.com/${esc(c.repo)}" target="_blank" rel="noopener">GitHub ↗</a>`);
    if (bitacora) L.push(`<a href="cliente.html?c=${encodeURIComponent(c.slug)}">Bitácora →</a>`);
    return `<div class="links">${L.join('')}</div>`;
  }

  function ppto(c, seg) {
    if (!seg) return `<div class="cli-ppto sin">Sin pestaña en la hoja de seguimiento: presupuesto en la bitácora.</div>`;
    const S = window.SEG, F = S.fmt(seg.D.cfg.moneda), T = seg.A.T;
    return `<div class="cli-ppto">
      <span><small>Presupuesto ${esc(S.mesLbl(seg.A.mes).toLowerCase())}</small><b>${F.corto(T.ppto)}</b></span>
      <span><small>Consumo</small><b>${F.corto(T.cons)}</b></span>
      <span><small>Pacing</small><b><span class="pill ${S.pace(T.pace)}">${S.fP(T.pace)}</span></b></span>
    </div>`;
  }

  function kpis(c) {
    if (!c.kpis.length) return '';
    return `<div><h4>KPIs</h4><table class="kpis"><thead><tr><th>KPI</th><th>Objetivo</th><th>Último real</th></tr></thead><tbody>${
      c.kpis.map(r => `<tr><td>${inline(r[0])}</td><td>${inline(r[1] || '—')}</td><td class="real">${inline(r[2] || '—')}</td></tr>`).join('')
    }</tbody></table></div>`;
  }

  function pendientes(c, max = 3) {
    if (!c.pendientes.length) return '<div><h4>Pendientes</h4><p class="ultimo">Sin pendientes registrados.</p></div>';
    const resto = c.pendientes.length - max;
    return `<div><h4>Pendientes · ${c.pendientes.length}</h4><ul class="pend">${
      c.pendientes.slice(0, max).map(p => `<li>${inline(p)}</li>`).join('')
    }${resto > 0 ? `<li class="mas">+${resto} más en la bitácora</li>` : ''}</ul></div>`;
  }

  function ultimo(c) {
    const h = c.historico[0];
    if (!h) return '';
    return `<div><h4>Último movimiento</h4><p class="ultimo"><b>${esc(h.fecha)}</b> · ${inline(h.items[0] || '')}${h.items.length > 1 ? ` <span class="t-mute">(+${h.items.length - 1})</span>` : ''}</p></div>`;
  }

  function card(c, seg) {
    const estado = seg ? `<span class="pill ${seg.A.estado.cls}">${esc(seg.A.estado.txt)}</span>` : '';
    return `<article class="cli" id="cli-${esc(c.slug)}">
      <div class="cli-h"><div><h3><a href="cliente.html?c=${encodeURIComponent(c.slug)}">${esc(c.nombre)}</a></h3><small>${esc(c.descripcion)}</small></div>${estado}</div>
      ${ppto(c, seg)}
      ${kpis(c)}
      ${pendientes(c)}
      ${ultimo(c)}
      ${links(c)}
    </article>`;
  }

  // lee el seguimiento de las cuentas que tienen pestaña; si falla, la ficha sale sin presupuesto
  async function seguimientos(slugs) {
    const S = window.SEG, out = {};
    if (!S) return out;
    await Promise.all(slugs.map(async s => {
      const k = segKey(B.clientes[s]);
      if (!k || !S.CUENTAS || !S.CUENTAS[k]) return;
      try { const D = await S.leer(k); out[s] = {D, A: S.alertas(D)}; } catch (e) { /* sin presupuesto */ }
    }));
    return out;
  }

  window.CLI = {B, esc, inline, segKey, links, ppto, kpis, pendientes, ultimo, card, seguimientos};
})();
