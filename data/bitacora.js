// Generado por Meta-Ads-CLI/tools/build_bitacora_portal.py desde bitacora/*.md. No editar a mano.
window.BITACORA = {
 "generado": "2026-11-10",
 "orden": [
  "baloto",
  "megaloto",
  "ris",
  "lasalle",
  "upb",
  "corpas",
  "betplay",
  "raza",
  "gana",
  "yajuego"
 ],
 "clientes": {
  "baloto": {
   "slug": "baloto",
   "nombre": "Baloto",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/baloto/",
   "repo": "adcomgroupco/baloto",
   "seguimiento": "seguimiento-baloto.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1156637178",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/1zEv8npIyHnoaEXKZDRh-vpyo88RU0WmKUgSKwSYzaMU/edit",
   "flow": "https://docs.google.com/spreadsheets/d/1D2uyRusvbWzsAczN9pdkXx7DnCSHia4_ifYFvfmvy1E/edit",
   "activo": "si",
   "titulo": "Baloto",
   "descripcion": "Lotería (Colombia) · COP · resultados medidos en GA4 + plataformas",
   "actualizado": "2026-11-10",
   "pendientes": [
    "**Pauta al 100 % antes del viernes 2026-11-13.** El 10 nov se llevaba 70,7 %, por debajo del ritmo esperado. Faltaban dos cosas:",
    "**Medición:** en GTM, cambiar el activador de las etiquetas de compra (Facebook, TikTok y demás de pauta) de «compra exitosa» al evento GA4 `purchase`. El de registro ya está cambiado. Desde ahora las compras e ingresos se toman de `purchase` en GA4, que trae cantidad, compradores y valor. Falta añadir `purchase` al reporte PMA GA4_BALOTO e importarlo en Google Ads como conversión principal.",
    "**Facturación:** facturar ya octubre y noviembre, una factura por mes y por marca (Baloto / MiLoto / …), unas 6 en total. Cada factura debe decir el mes y el producto, si no la devuelven.",
    "**CDM diciembre:** enviar a Christian solo la pestaña ONJ, junto con los editables actuales para que ONJ trabaje sobre ellos. Christian valida con Juan Manuel; si no hay cambios, se comparte el cuadro completo.",
    "**Piezas Navidad (ADCOM):** pasar la solicitud de diseño esta semana y enviar piezas para aprobación la próxima (1–2 rondas de ajustes). Deben mantener la esencia de las piezas actuales, solo con versión navideña.",
    "**Material del festivo:** lo del lunes 2026-11-16 se entrega el viernes 2026-11-13.",
    "**Videos ONJ:** Christian compartirá unos 30 videos de pauta para diciembre para que demos observaciones. Habrá máximo 4 TopFeed (Velitas, inicio de novenas, Navidad y 31 de diciembre).",
    "**Cali:** cruzar datos a fin de mes y presentar los resultados: participación digital y ventas de Cali frente a los meses anteriores.",
    "Reporte CRM (Jonathan Prieto) y ajustes del reporte de octubre. El reporte de implementación de X ya no aplica: la campaña se canceló.",
    "Para el plan post-acumulado: acumulados actuales, histórico de caídas, lineamientos, presupuesto y bases CRM.",
    "Aprobación formal de la propuesta Navidad 2026 ($15M). Christian la vio bien en la reunión."
   ],
   "por_verificar": [
    {
     "fecha": "2026-11-13",
     "texto": "la pauta de noviembre va al 100 % del ritmo esperado (criterio: pacing ≥ 100 % en la hoja de seguimiento; el 10 nov iba en 70,7 %).",
     "vencida": false
    }
   ],
   "restricciones": [
    [
     "2026-11-10",
     "Campaña de X cancelada; sus $10M pasan a MiLoto",
     "Reasignado en la hoja de seguimiento y en plataformas",
     "Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega)"
    ],
    [
     "2026-11-10",
     "Compras e ingresos se reportan desde el evento GA4 `purchase`",
     "Reportes con `purchase`; plataformas siguen con «compra exitosa» hasta cambiar GTM",
     "Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega)"
    ],
    [
     "2026-11-10",
     "Facturas: una por mes y por marca, con mes y producto escritos",
     "Octubre y noviembre (~6 facturas)",
     "Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega)"
    ]
   ],
   "kpis": [
    [
     "ROAS (nov)",
     "10",
     "9,78 oct (10,06 sin awareness)",
     "Plataformas × ticket $4.100"
    ],
    [
     "Compras (nov)",
     "643.082 (antes 608.165)",
     "_(seguimiento)_",
     "Plataformas"
    ],
    [
     "Registros (nov)",
     "18.000",
     "11.980 al 10 nov, proyección ~40.000 (58 % de los registros vienen de pauta)",
     "GA4 (Christian)"
    ],
    [
     "Cali (5–30 nov)",
     "—",
     "$2,37M invertidos · 4.975 compras · CPA $477 · ~$20M en ingresos · ROAS 8,7. Participación digital en Cali: 17 % → 33 %",
     "Meta + tablero del cliente"
    ],
    [
     "Ticket medio",
     "$4.100",
     "$4.000–4.500 (píxel Meta, 30 oct–2 nov)",
     "Meta píxel"
    ]
   ],
   "cuentas": [
    [
     "Google Ads",
     "ADCOM - BALOTO 2025v2",
     "733-425-8135",
     "Acceso directo (no está bajo MCC 641-081-5435)"
    ],
    [
     "Meta",
     "Baloto",
     "act_301246690358973",
     "Página 142150155982041 · IG 17841407137559102 · Pixel 522901254737678. El system user «CLI para IA» tiene permiso de anuncios en la página desde 2026-10-18. El conector Meta de claude.ai no ve la cuenta"
    ],
    [
     "TikTok",
     "Baloto",
     "_(completar)_",
     ""
    ],
    [
     "GA4",
     "Propiedad Baloto",
     "379455608",
     "Reporte PMA GA4_BALOTO"
    ],
    [
     "X / Programática",
     "—",
     "—",
     "Consumo solo en hoja de datos/seguimiento"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-10",
     "items": [
      "**X → MiLoto:** en la hoja de seguimiento, la fila 668 (X) queda «Cancelado» con $0, y sus $10M se reparten en proporción entre las campañas de MiLoto. El total sigue en $260,3M.",
      "**Reunión de seguimiento** ([notas](https://docs.google.com/document/d/1DFJMCUlWOVIMwN7UgwgQsPBqOVrSP5JPhQxb3oioXXo)):",
      "CDM diciembre dividido en 3 pestañas: TOTAL (178 piezas), ONJ (88: TikTok ACQ, PMax, Promocional, Videos, Search, CRM regular, X, Cali, RMK TikTok Baloto/MiLoto) y ADCOM (90: Año Nuevo, Registro de temporada, Cobro de premios, Acumulado Baloto, MiLoto, Colorloto, Navidad).",
      "`tablero-baloto.html` pasa a modo «mix» (compras de plataforma, registros GA4, ingresos = compras × $4.100).",
      "Navidad reestructurada: 3 KV por fase (Aguinaldo 1–15, Novena 16–24, Fin de año 25–31) × 14 piezas; sin videos. ADCOM desarrolla 9 KV / 90 piezas; ONJ 88 piezas evergreen. Deck commit a30075a."
     ]
    },
    {
     "fecha": "2026-11-09",
     "items": [
      "Propuesta Navidad 2026 (`propuesta-navidad-2026.html`, commit ed69db5)."
     ]
    },
    {
     "fecha": "2026-11-05",
     "items": [
      "Grupo «Reportes de implementación» en el index; primer reporte `cali-2026-11-05.html`. Nueva portada para videos D3 (decía «$50.000 millones»)."
     ]
    },
    {
     "fecha": "2026-11-04",
     "items": [
      "Campaña Cali creada: Meta 120248278061500680 (CBO $500k/día, 5–30 nov, Cali + 25 km); conjuntos 120248278061680680 (píxel/CRM) y 120248278069210680 (intereses). UTM `adcom_baloto_fb_act_conversion_cali`. Fila 669 del seguimiento.",
      "Meta $100M → presupuestos de nov reescalados; ROAS 10 exigido para nov.",
      "Codexa revirtió el deploy de GA4: sin compras ni ingresos en GA4."
     ]
    },
    {
     "fecha": "2026-11-02",
     "items": [
      "Reporte general octubre (`reportes/reporte-general-2026-10-octubre.html`, commit 1c6d6d2), 29 slides + PDF."
     ]
    },
    {
     "fecha": "2026-10-26",
     "items": [
      "Las 2 campañas Search empiezan a pujar también por SUBMIT_LEAD_FORM (registros)."
     ]
    },
    {
     "fecha": "2026-10-20",
     "items": [
      "Política de marca en Search: marca solo en `marca_baloto` (Maximizar conversiones)."
     ]
    },
    {
     "fecha": "2026-10-18",
     "items": [
      "Permiso de anuncios en la página Baloto para el system user."
     ]
    },
    {
     "fecha": "2026-10-16",
     "items": [
      "Grupo `fase1_noticia_premio` (205026162470) en search_category (23771945181)."
     ]
    },
    {
     "fecha": "2026-10-13",
     "items": [
      "Hoja «[Baloto] Fuente de datos» compartida y conectada al tablero."
     ]
    }
   ],
   "chats": [
    {
     "id": "fb14ddda-f772-4074-a044-312ca4f47dfb",
     "tema": "organización de repos; tablero, flow, reportes y Navidad (sesión principal)"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    },
    {
     "id": "01e274c5-4996-4626-9dac-2c676297ec48",
     "tema": "CDM diciembre dividido en TOTAL / ONJ / ADCOM"
    }
   ],
   "markdown": "# Baloto\n\n> Lotería (Colombia) · COP · resultados medidos en GA4 + plataformas\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Google Ads | ADCOM - BALOTO 2025v2 | 733-425-8135 | Acceso directo (no está bajo MCC 641-081-5435) |\n| Meta | Baloto | act_301246690358973 | Página 142150155982041 · IG 17841407137559102 · Pixel 522901254737678. El system user «CLI para IA» tiene permiso de anuncios en la página desde 2026-10-18. El conector Meta de claude.ai no ve la cuenta |\n| TikTok | Baloto | _(completar)_ | |\n| GA4 | Propiedad Baloto | 379455608 | Reporte PMA GA4_BALOTO |\n| X / Programática | — | — | Consumo solo en hoja de datos/seguimiento |\n\n## Repositorios y scripts\n- Repo/portal: `~/Documents/GitHub/baloto` → [adcomgroupco/baloto](https://github.com/adcomgroupco/baloto) («Master Baloto»). Tablero `tablero-baloto.html`, `seguimiento-presupuesto-baloto.html`, reportes en `reportes/`, implementaciones en `implementaciones/`.\n- Scripts en este repo: [scripts/clients/baloto/](../scripts/clients/baloto/) (`build_baloto_flow.py`, datos del tablero).\n- Push: lo hace el usuario (GitHub Desktop).\n\n## Fuentes de datos y hojas\n- **Fuente de datos** «[Baloto] Fuente de datos»: [1zEv8npIyHnoaEXKZDRh-vpyo88RU0WmKUgSKwSYzaMU](https://docs.google.com/spreadsheets/d/1zEv8npIyHnoaEXKZDRh-vpyo88RU0WmKUgSKwSYzaMU) — pestaña RESUMEN GENERAL, HOMOLOGACION, HOMOLOGACIÓN G4. Pública (gviz).\n- **Seguimiento de presupuesto** (presupuesto real): [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1156637178) gid 1156637178. Mandan estos valores, no `baloto_flow.js`.\n- **Flow**: [1D2uyRusvbWzsAczN9pdkXx7DnCSHia4_ifYFvfmvy1E](https://docs.google.com/spreadsheets/d/1D2uyRusvbWzsAczN9pdkXx7DnCSHia4_ifYFvfmvy1E) — pestaña por mes (Noviembre_2026; «Propuesta Navidad 2026» gid 1789310959).\n- **CDM** diciembre ([1NF-7Qi1jPkg-ixTQ0FSwNrjsi9_9rorBrIBkhNFgTZM](https://docs.google.com/spreadsheets/d/1NF-7Qi1jPkg-ixTQ0FSwNrjsi9_9rorBrIBkhNFgTZM)), 3 pestañas: «TOTAL Diciembre 2026» gid 273436142 (178 piezas), «ONJ Diciembre 2026» gid 367321025 (88) y «ADCOM Diciembre 2026» gid 1944306265 (90 piezas, 9 KV). Columna P «KV · DESARROLLA».\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Meta | $22.082.171 | - | - |\n| TikTok | $21.643.376 | - | - |\n| Google | $19.170.172 | - | - |\n| **Total** | **$62.895.719** | - | - |\n\nSin presupuesto del mes en el flow: ver la hoja de seguimiento o «Presupuesto y flow».\n\nAl ritmo de los días completos cierra en $209.652.398.\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| TikTok | `adcom_baloto_tiktok_acq_conversion-registros` | $14.895.148 |\n| Google | `adcom_baloto_gg_awa_search_category_trafico_awa_googleads` | $9.064.255 |\n| Google | `adcom_baloto_gg_awa_search_competencia_trafico_awa_googleads` | $6.230.137 |\n| Meta | `adcom_baloto_fb_acq_meta_conversion-acq_influencers_meta` | $4.950.795 |\n| Meta | `adcom_baloto_fb_ret_conversion-rmkt-ret_acumulado` | $4.749.115 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- Noviembre 2026: Meta $107,8M (incluye Cali $13M), TikTok $71,25M, Google $71,25M, X $10M → reasignados a MiLoto (2026-11-10, se cancela X): MiLoto Meta acumulado $26,03M, MiLoto Meta $6,2M, MiLoto TikTok $8,69M. Objetivo ROAS 10 con ticket $4.100: 608.165 compras, y desde el cambio de X a MiLoto 643.082 compras con ROAS 10,62, 18.000 registros GA4.\n- Propuesta Navidad 2026 (vista bien en la reunión del 10 nov; falta la aprobación formal): $15M + 15% gestión.\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| ROAS (nov) | 10 | 9,78 oct (10,06 sin awareness) | Plataformas × ticket $4.100 |\n| Compras (nov) | 643.082 (antes 608.165) | _(seguimiento)_ | Plataformas |\n| Registros (nov) | 18.000 | 11.980 al 10 nov, proyección ~40.000 (58 % de los registros vienen de pauta) | GA4 (Christian) |\n| Cali (5–30 nov) | — | $2,37M invertidos · 4.975 compras · CPA $477 · ~$20M en ingresos · ROAS 8,7. Participación digital en Cali: 17 % → 33 % | Meta + tablero del cliente |\n| Ticket medio | $4.100 | $4.000–4.500 (píxel Meta, 30 oct–2 nov) | Meta píxel |\n\n## Reglas y cosas a tener en cuenta\n- Resultados: registros desde GA4. Compras e ingresos desde el evento GA4 `purchase` (Christian, 2026-11-10: el deploy no se desmontó y sigue activo). Hasta cambiar los activadores de GTM, las plataformas siguen leyendo «compra exitosa».\n- Excluir filas «Otros (no Adcom)» / «Sin medio» de los totales pagos.\n- La columna «Registros» de Google en la hoja viene ~0: usar «Registros GA4».\n- Marca en Search solo en el grupo `marca_baloto` de search_category; search_competencia sin marca (lista «Negativas marca Baloto»).\n- Ticket de referencia: $4.100 (reporte octubre); flujo con CPA real oct × 1,25.\n- Meta no sube imágenes por URL (error #3): subir bytes.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| 2026-11-10 | Campaña de X cancelada; sus $10M pasan a MiLoto | Reasignado en la hoja de seguimiento y en plataformas | Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega) |\n| 2026-11-10 | Compras e ingresos se reportan desde el evento GA4 `purchase` | Reportes con `purchase`; plataformas siguen con «compra exitosa» hasta cambiar GTM | Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega) |\n| 2026-11-10 | Facturas: una por mes y por marca, con mes y producto escritos | Octubre y noviembre (~6 facturas) | Sí, reunión 2026-11-10 (Christian Manrique, Paula Vega) |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n- 2026-11-13: la pauta de noviembre va al 100 % del ritmo esperado (criterio: pacing ≥ 100 % en la hoja de seguimiento; el 10 nov iba en 70,7 %).\n\n## Contactos y chats\n- Personas: Christian Manrique (tráfico/GA4), Paula Vega (facturación), Misael Vargas (operadorjuegos.com.co), Jonathan Prieto (CRM), ONJ (agencia creativa de Baloto), Codexa (desarrollo web).\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `fb14ddda-f772-4074-a044-312ca4f47dfb` — organización de repos; tablero, flow, reportes y Navidad (sesión principal)\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n- `01e274c5-4996-4626-9dac-2c676297ec48` — CDM diciembre dividido en TOTAL / ONJ / ADCOM\n\n## Pendientes\n_Reunión de seguimiento del 2026-11-10 (Christian Manrique, Paula Vega):_\n- **Pauta al 100 % antes del viernes 2026-11-13.** El 10 nov se llevaba 70,7 %, por debajo del ritmo esperado. Faltaban dos cosas:\n  - ~~Reasignar los $10M de X a MiLoto~~ (hecho el 2026-11-10 en la hoja de seguimiento, las plataformas, la hoja del flow, `baloto_flow.js` y `flow-noviembre-2026.html`).\n  - **TikTok Reach & Frequency:** la reserva no quedó creada en la plataforma. Hay que crear la campaña desde cero, volver a reservar y avisar a Christian cuando la aprueben.\n- **Medición:** en GTM, cambiar el activador de las etiquetas de compra (Facebook, TikTok y demás de pauta) de «compra exitosa» al evento GA4 `purchase`. El de registro ya está cambiado. Desde ahora las compras e ingresos se toman de `purchase` en GA4, que trae cantidad, compradores y valor. Falta añadir `purchase` al reporte PMA GA4_BALOTO e importarlo en Google Ads como conversión principal.\n- **Facturación:** facturar ya octubre y noviembre, una factura por mes y por marca (Baloto / MiLoto / …), unas 6 en total. Cada factura debe decir el mes y el producto, si no la devuelven.\n- **CDM diciembre:** enviar a Christian solo la pestaña ONJ, junto con los editables actuales para que ONJ trabaje sobre ellos. Christian valida con Juan Manuel; si no hay cambios, se comparte el cuadro completo.\n- **Piezas Navidad (ADCOM):** pasar la solicitud de diseño esta semana y enviar piezas para aprobación la próxima (1–2 rondas de ajustes). Deben mantener la esencia de las piezas actuales, solo con versión navideña.\n- **Material del festivo:** lo del lunes 2026-11-16 se entrega el viernes 2026-11-13.\n- **Videos ONJ:** Christian compartirá unos 30 videos de pauta para diciembre para que demos observaciones. Habrá máximo 4 TopFeed (Velitas, inicio de novenas, Navidad y 31 de diciembre).\n- **Cali:** cruzar datos a fin de mes y presentar los resultados: participación digital y ventas de Cali frente a los meses anteriores.\n- Reporte CRM (Jonathan Prieto) y ajustes del reporte de octubre. El reporte de implementación de X ya no aplica: la campaña se canceló.\n- Para el plan post-acumulado: acumulados actuales, histórico de caídas, lineamientos, presupuesto y bases CRM.\n- Aprobación formal de la propuesta Navidad 2026 ($15M). Christian la vio bien en la reunión.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-10\n- **X → MiLoto:** en la hoja de seguimiento, la fila 668 (X) queda «Cancelado» con $0, y sus $10M se reparten en proporción entre las campañas de MiLoto. El total sigue en $260,3M.\n  | Fila | Campaña | Presupuesto | Diario |\n  |---|---|---|---|\n  | 674 | Meta 120237089274450680 (acumulado) | $19,67M → $26,03M | $714k → $1.108k |\n  | 675 | Meta 120244686627750680 | $4,68M → $6,2M | $158k → $233k |\n  | 676 | TikTok 1868190541111394 | $6,57M → $8,69M | $265k → $311k |\n\n  Flow Noviembre_2026 (gid 2036995481): X (fila 21) con peso 0; Activación $88,88M (F11) y Retención $87,27M (F23), con los pesos L recalculados. Resultado: 643.082 compras, ROAS 10,62 y 18.002 registros. Se regeneraron `baloto_flow.js` y `flow-noviembre-2026.html`, falta el push.\n  La campaña de TikTok es Smart+: su presupuesto se cambia con `smart_plus/campaign/update/`. Después se corrió `update_seguimientos.py`.\n- **Reunión de seguimiento** ([notas](https://docs.google.com/document/d/1DFJMCUlWOVIMwN7UgwgQsPBqOVrSP5JPhQxb3oioXXo)):\n  - Se cancela X y sus $10M pasan a MiLoto.\n  - Pauta al 100 % para el viernes; faltan TikTok R&F y X.\n  - Compras desde GA4 `purchase`.\n  - Facturación separada por mes y por marca.\n  - CDM en 3 pestañas; a ONJ se le envía solo la suya.\n  - Cali con ROAS 8,7 y participación digital del 17 % al 33 %.\n- CDM diciembre dividido en 3 pestañas: TOTAL (178 piezas), ONJ (88: TikTok ACQ, PMax, Promocional, Videos, Search, CRM regular, X, Cali, RMK TikTok Baloto/MiLoto) y ADCOM (90: Año Nuevo, Registro de temporada, Cobro de premios, Acumulado Baloto, MiLoto, Colorloto, Navidad).\n- `tablero-baloto.html` pasa a modo «mix» (compras de plataforma, registros GA4, ingresos = compras × $4.100).\n- Navidad reestructurada: 3 KV por fase (Aguinaldo 1–15, Novena 16–24, Fin de año 25–31) × 14 piezas; sin videos. ADCOM desarrolla 9 KV / 90 piezas; ONJ 88 piezas evergreen. Deck commit a30075a.\n### 2026-11-09\n- Propuesta Navidad 2026 (`propuesta-navidad-2026.html`, commit ed69db5).\n### 2026-11-05\n- Grupo «Reportes de implementación» en el index; primer reporte `cali-2026-11-05.html`. Nueva portada para videos D3 (decía «$50.000 millones»).\n### 2026-11-04\n- Campaña Cali creada: Meta 120248278061500680 (CBO $500k/día, 5–30 nov, Cali + 25 km); conjuntos 120248278061680680 (píxel/CRM) y 120248278069210680 (intereses). UTM `adcom_baloto_fb_act_conversion_cali`. Fila 669 del seguimiento.\n- Meta $100M → presupuestos de nov reescalados; ROAS 10 exigido para nov.\n- Codexa revirtió el deploy de GA4: sin compras ni ingresos en GA4.\n### 2026-11-02\n- Reporte general octubre (`reportes/reporte-general-2026-10-octubre.html`, commit 1c6d6d2), 29 slides + PDF.\n### 2026-10-26\n- Las 2 campañas Search empiezan a pujar también por SUBMIT_LEAD_FORM (registros).\n### 2026-10-20\n- Política de marca en Search: marca solo en `marca_baloto` (Maximizar conversiones).\n### 2026-10-18\n- Permiso de anuncios en la página Baloto para el system user.\n### 2026-10-16\n- Grupo `fase1_noticia_premio` (205026162470) en search_category (23771945181).\n### 2026-10-13\n- Hoja «[Baloto] Fuente de datos» compartida y conectada al tablero."
  },
  "betplay": {
   "slug": "betplay",
   "nombre": "Betplay",
   "moneda": "COP",
   "portal": "",
   "repo": "",
   "seguimiento": "",
   "hoja_presupuesto": "",
   "fuente_datos": "",
   "flow": "",
   "activo": "si",
   "titulo": "Betplay",
   "descripcion": "Apuestas (Colombia) · COP",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Revisar las negativas «como»/«cual».",
    "Acceso a X de Betplay (sin confirmar)."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "tCPA registro Search marca",
     "$25.000",
     "_(completar)_",
     "Google Ads"
    ],
    [
     "Inversión oct",
     "—",
     "Google 537,1M · Meta 218,8M · TikTok 46,0M",
     "Plataformas"
    ]
   ],
   "cuentas": [
    [
     "Google Ads",
     "BRAND 2023 - BETPLAY 2020",
     "714-286-4193",
     "Acceso directo: `login_customer_id = \"7142864193\"` (con el MCC da PERMISSION_DENIED). En el MCC solo está la cancelada «betplay TB» 556-491-4695"
    ],
    [
     "Meta",
     "ADCOM 2025 - BETPLAY CO",
     "act_8379325938836897",
     "COP. Página BetPlay Colombia 1498953276812833"
    ],
    [
     "Meta",
     "BETPLAY ES GANA",
     "act_597685526481229",
     "Página BetPlay GANA 100667239614599"
    ],
    [
     "TikTok",
     "Betplay Colombia",
     "7401189997686259728",
     "TopView no aparece en `ad/get`"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-09",
     "items": [
      "Pregunta: por qué subió el costo de registro de BP en Google."
     ]
    },
    {
     "fecha": "2026-11-04",
     "items": [
      "Deck «BetPlay Innovación 2026» v2 (13 slides: TopView, Smart+, Advantage+, YouTube/PMax, AI Max, propuestas programática y ChatGPT Ads) + correo al cliente."
     ]
    },
    {
     "fecha": "2026-11-03",
     "items": [
      "Grupo «Puntos BetPlay» 204487521769 en la campaña de marca: 12 keywords en frase, 5 negativas, 1 RSA."
     ]
    }
   ],
   "chats": [
    {
     "id": "c9f2df71-6f9c-4ad7-bf8c-3b07b0e1554c",
     "tema": "accesos, Puntos BP, gasto, deck de innovación"
    }
   ],
   "markdown": "# Betplay\n\n> Apuestas (Colombia) · COP\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Google Ads | BRAND 2023 - BETPLAY 2020 | 714-286-4193 | Acceso directo: `login_customer_id = \"7142864193\"` (con el MCC da PERMISSION_DENIED). En el MCC solo está la cancelada «betplay TB» 556-491-4695 |\n| Meta | ADCOM 2025 - BETPLAY CO | act_8379325938836897 | COP. Página BetPlay Colombia 1498953276812833 |\n| Meta | BETPLAY ES GANA | act_597685526481229 | Página BetPlay GANA 100667239614599 |\n| TikTok | Betplay Colombia | 7401189997686259728 | TopView no aparece en `ad/get` |\n\n## Repositorios y scripts\n- Sin repo propio. Decks en [reports/betplay/](../reports/betplay/) (`BetPlay_Innovacion_2026_v2.pdf`).\n\n## Fuentes de datos y hojas\n- **Reales cumplidos**: el bloque de Betplay lo llena otra persona ([hoja](https://docs.google.com/spreadsheets/d/1touG9kkUfrA3e7YnPiDLutP4w4hIwVsnqBb0Dlh6mCU)).\n- _(completar: fuente de datos, flow)_\n\n## Presupuesto y flow\n- Octubre 2026 (gasto real): Google 537,1M, Meta 218,8M, TikTok 46,0M. Meta: Liga 15,6 % / Institucional 84,4 %. Google YouTube 30,2 % (nov MTD 51,8 %).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| tCPA registro Search marca | $25.000 | _(completar)_ | Google Ads |\n| Inversión oct | — | Google 537,1M · Meta 218,8M · TikTok 46,0M | Plataformas |\n\n## Reglas y cosas a tener en cuenta\n- Campaña Search principal 24070530144 «5.1 INST - MARCA - CONVERSIONES - Registro | TEST MaxConv tCPA25K». URL `https://betplay.com.co/registrarse?utm_source=google&utm_medium=the_brand&utm_campaign=Marca`.\n- Negativas amplias «como»/«cual» pueden bloquear búsquedas tipo «cómo redimir puntos».\n- Conversiones de Google/Meta poco confiables (varias acciones).\n- Llamadas API: `dangerouslyDisableSandbox`; usar `requests` (urllib falla SSL).\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `c9f2df71-6f9c-4ad7-bf8c-3b07b0e1554c` — accesos, Puntos BP, gasto, deck de innovación\n\n## Pendientes\n- Revisar las negativas «como»/«cual».\n- Acceso a X de Betplay (sin confirmar).\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-09\n- Pregunta: por qué subió el costo de registro de BP en Google.\n### 2026-11-04\n- Deck «BetPlay Innovación 2026» v2 (13 slides: TopView, Smart+, Advantage+, YouTube/PMax, AI Max, propuestas programática y ChatGPT Ads) + correo al cliente.\n### 2026-11-03\n- Grupo «Puntos BetPlay» 204487521769 en la campaña de marca: 12 keywords en frase, 5 negativas, 1 RSA."
  },
  "corpas": {
   "slug": "corpas",
   "nombre": "Corpas",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/corpas/",
   "repo": "adcomgroupco/corpas",
   "seguimiento": "seguimiento-corpas.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1972183735",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/12-tP-61OKnLdx1wONS0YT0q7O19eZ8V3ZrTDChOmyGo/edit",
   "flow": "https://docs.google.com/spreadsheets/d/1B9rms3VL1o3INwbeCd3EO8QOmUrQVf-kMi6ac50YV6E/edit",
   "activo": "si",
   "titulo": "Corpas (Fundación Universitaria Juan N. Corpas)",
   "descripcion": "Educación · COP · periodo 2027-1 desde 2026-10-01",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Demand Gen: faltan formatos 1,91:1 y videos.",
    "Material para las 4 campañas Meta por programa sin anuncios.",
    "Renovar token de usuario Meta antes del 2027-01-08."
   ],
   "por_verificar": [
    {
     "fecha": "2026-11-12",
     "texto": "los 4 anuncios MBA v2 (`estatico_mba-pt{1..4}-v2_2027-1`) pasan la revisión de Meta (criterio: `effective_status` ACTIVE en los 4).",
     "vencida": false
    }
   ],
   "restricciones": [
    [
     "2026-11-05",
     "Pauta por programa 2027-1, Escenario #2: +$89.316.745 para 12 programas, sin TikTok",
     "Google $68,36M / Meta $20,96M; nov $24,56M",
     "Sí, aprobado 2026-11-05"
    ]
   ],
   "kpis": [
    [
     "CPL CRM Search Medicina",
     "$50.000",
     "_(completar)_",
     "HubSpot"
    ],
    [
     "CPL Google Search Medicina",
     "$50.000",
     "_(completar)_",
     "Google Ads"
    ],
    [
     "Inversión (nov)",
     "$58,52M + $24,56M programas",
     "_(seguimiento)_",
     "Forecast"
    ]
   ],
   "cuentas": [
    [
     "Google Ads",
     "ADCOM 2023 - CORPAS",
     "510-846-7200",
     "Bajo MCC 641-081-5435"
    ],
    [
     "Meta",
     "ADCOM 2023 - JCORPAS",
     "act_269936680156641",
     "Página 57307088135 · Pixel 7521978061258946. Crear anuncios con `META_USER_TOKEN_CORPAS` (usuario Daniela Devia Diaz, app «ADCOM CLI Corpas»; vence 2027-01-08). El system user no tiene rol en la página"
    ],
    [
     "TikTok",
     "UniCorpas",
     "7434246727286489089",
     "COP. Identidad BC_AUTH_TT «Unicorpas» 9e6b5861-a4fc-5821-b333-ca4e83f71f09 (bc 7268374449601363970). Sin permiso de píxel ni audiencias"
    ],
    [
     "CRM",
     "HubSpot",
     "—",
     "Lead de pauta = «Lead de Pauta 1»"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-10",
     "items": [
      "Meta MBA 2027-1: el cliente actualizó las piezas en Drive (carpeta 13ZyaaeOrJsSMuNETqOfEdJ9JrVF11HcI: partes 1-3 rehechas con logos 55 años + ADEN, y una parte 4 nueva «Piensa como estratega, lidera como directivo»). Se crearon 4 anuncios `estatico_mba-pt{1..4}-v2_2027-1` (120251409308930043, …312840043, …316710043, …320930043) y se pausaron los 3 anteriores. Script `scripts/clients/corpas/meta_mba_piezas_v2.py`, log reports/meta/corpas/piezas_mba_v2_2026-11-10.json. Reporte `implementacion-meta-programas-20271.html` actualizado (fila MBA y conteo de anuncios).",
      "Portal: nueva sección «Implementaciones» en el index con reportes estilo pozo Megaloto (`implementaciones/mba-piezas-2026-11-10.html`, `implementaciones/musica-videos-2026-11-09.html`), generados con `scripts/clients/corpas/build_implementaciones.py`. Los 4 anuncios MBA v2 ya aprobados y activos. No hay video del MBA en Drive."
     ]
    },
    {
     "fecha": "2026-11-09",
     "items": [
      "8 campañas Meta por programa ACTIVAS (`adcom_ucorpas_fb_acq_landing_meta_<slug>-2027-1`); 4 sin material en pausa (SGCA, Edu Salud, Epidemiología, Salud Familiar). Log reports/meta/corpas/programas_2027-1_2026-11-09.json.",
      "Pausadas 16 piezas de programa en generales/branding; nuevos diarios (General Pregrados 14k, Medicoquirúrgicos 27k, Branding pre 5k, pos 4k).",
      "Token de usuario `META_USER_TOKEN_CORPAS` en .env."
     ]
    },
    {
     "fecha": "2026-11-06",
     "items": [
      "12 Search por programa 2027-1 aplicadas y activas (`corpas_search_programas_2027_1.py`). Generales nov: pre $54k/día, pos $13k/día."
     ]
    },
    {
     "fecha": "2026-11-05",
     "items": [
      "TikTok branding 2027-1 activado: pregrados 1881022267537953 y posgrados 1881022256216081 ($27k/día c/u).",
      "UTM Search Medicina corregida a 2027-1."
     ]
    },
    {
     "fecha": "2026-11-02",
     "items": [
      "Ajustes de geo en Google y Meta."
     ]
    },
    {
     "fecha": "2026-10-23",
     "items": [
      "Search generales activadas: pregrados 24395778478, posgrados 24384621003. Demand Gen branding en pausa (24384704856, 24395866075). Meta generales/branding en pausa (120251120987080043, 120251120987530043, 120251120988640043, 120251120989420043)."
     ]
    },
    {
     "fecha": "2026-10-16",
     "items": [
      "Reporte de ángulos de comunicación y discurso de presentación."
     ]
    }
   ],
   "chats": [
    {
     "id": "ed6cfaf7-a4ef-4e5b-a29e-585008534bfe",
     "tema": "Google/Meta/TikTok 2027-1 (sesión principal)"
    },
    {
     "id": "0c68509b-de31-4a05-bc7b-99b9eb0fb5ab",
     "tema": "ángulos de comunicación"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    },
    {
     "id": "8a7ebf51-fd46-4690-a950-2aebe38369fb",
     "tema": "actualización de piezas MBA en Meta"
    }
   ],
   "markdown": "# Corpas (Fundación Universitaria Juan N. Corpas)\n\n> Educación · COP · periodo 2027-1 desde 2026-10-01\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Google Ads | ADCOM 2023 - CORPAS | 510-846-7200 | Bajo MCC 641-081-5435 |\n| Meta | ADCOM 2023 - JCORPAS | act_269936680156641 | Página 57307088135 · Pixel 7521978061258946. Crear anuncios con `META_USER_TOKEN_CORPAS` (usuario Daniela Devia Diaz, app «ADCOM CLI Corpas»; vence 2027-01-08). El system user no tiene rol en la página |\n| TikTok | UniCorpas | 7434246727286489089 | COP. Identidad BC_AUTH_TT «Unicorpas» 9e6b5861-a4fc-5821-b333-ca4e83f71f09 (bc 7268374449601363970). Sin permiso de píxel ni audiencias |\n| CRM | HubSpot | — | Lead de pauta = «Lead de Pauta 1» |\n\n## Repositorios y scripts\n- Portal: `~/Documents/GitHub/corpas` → [adcomgroupco/corpas](https://github.com/adcomgroupco/corpas) (GitHub Pages). Tablero interno `seguimiento-cpa-medicina.html`, `implementacion-meta-programas-20271.html`. Copia en [reports/html/jcorpas/](../reports/html/jcorpas/).\n- Scripts: [scripts/clients/corpas/](../scripts/clients/corpas/) (`meta_programas_2027_1.py`), [scripts/google/corpas_*.py](../scripts/google/) (search generales, programas 2027-1, demand gen, medicina extra).\n- Reportes de implementación: `implementaciones/` del portal, generados con `scripts/clients/corpas/build_implementaciones.py` (añadir una función por implementación nueva y su link en la sección «Implementaciones» del index).\n- Push vía GitHub Desktop.\n\n## Fuentes de datos y hojas\n- **Fuente de datos** «[Corpas] Fuente de datos»: [12-tP-61OKnLdx1wONS0YT0q7O19eZ8V3ZrTDChOmyGo](https://docs.google.com/spreadsheets/d/12-tP-61OKnLdx1wONS0YT0q7O19eZ8V3ZrTDChOmyGo) (PMA, 6 a. m.) — GG_CORPAS, RESUMEN GENERAL 1686215180, HUBSPOT_CONTACTS 929744023, HUBSPOT_DEALS 546568239, METAS 913150849.\n- **Presupuesto / seguimiento**: [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1972183735) gid 1972183735 (un bloque por mes; el último es el vigente).\n- **Forecast** «[Corpas] Forecast 2025/2026»: [1B9rms3VL1o3INwbeCd3EO8QOmUrQVf-kMi6ac50YV6E](https://docs.google.com/spreadsheets/d/1B9rms3VL1o3INwbeCd3EO8QOmUrQVf-kMi6ac50YV6E) — «Anual por medio» 1114328606, «RESUMEN» 0, «Otros programas 2027-1» 16598530.\n- **Cuadro Meta por programa 2027-1** gid 1272652460. Piezas: carpeta Drive «PIEZAS CAMPAÑA 2027 I» 1D4cvZtZmjStmVPQsJ_i6wSuE6zHdii9u.\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Google | $16.642.075 | - | - |\n| Meta | $11.038.734 | - | - |\n| TikTok | $290.108 | - | - |\n| **Total** | **$27.970.917** | $58.520.000 | 48 % |\n\nPresupuesto: [Corpas] Forecast 2025/2026 · RESUMEN, distribución mensual 2027-1 (conversión + branding). La fuente de verdad es la hoja de seguimiento.\n\nAl ritmo de los días completos cierra en $93.236.390 (159 % del presupuesto).\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| Google | `adcom_ucorpas_gg_acq_search_pregrado-medicina-2027-1` | $9.339.570 |\n| Meta | `adcom_ucorpas_fb_acq_landing_meta_general-posgrados-2027-1` | $3.322.247 |\n| Meta | `adcom_ucorpas_fb_acq_landing_meta_pregrado-medicina-2027-1` | $2.518.943 |\n| Meta | `adcom_ucorpas_fb_acq_landing-video_meta_pregrado-medicina-2027-1` | $2.154.135 |\n| Google | `adcom_ucorpas_gg_acq_search_general_pregrados-2027-1` | $1.979.452 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- 2027-1: leads $250M + branding $16M; distribución oct 20 % / nov 22 % / dic 30 % / ene 25 % / feb 3 %.\n- Nov 2026 = $58,52M (Google 23,94M, Meta 33,18M, TikTok 1,41M).\n- Pauta por programa (Escenario #2, aprobado 5 nov): +$89.316.745 para 12 programas; sin TikTok; Google 68,36M / Meta 20,96M; nov 24,56M.\n- Objetivos Search Medicina: CPL CRM $50.000 y CPL Google $50.000.\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| CPL CRM Search Medicina | $50.000 | _(completar)_ | HubSpot |\n| CPL Google Search Medicina | $50.000 | _(completar)_ | Google Ads |\n| Inversión (nov) | $58,52M + $24,56M programas | _(seguimiento)_ | Forecast |\n\n## Reglas y cosas a tener en cuenta\n- La marca institucional sola va en Search Medicina.\n- La plantilla de seguimiento de HubSpot a nivel cuenta rompe URLs con `?`: URL final sin UTM + parámetro personalizado `utmcampaign`.\n- «Canal de Ingreso» cambió a «google»/«facebook» el 29 oct (existe «Google Orgánico», que no es pauta): comparar por igualdad.\n- Test landings Medicina en Meta (original / video / quiz): 6 semanas a 33 %, luego 60/20/20.\n- Geo: Google pregrado Bogotá + Cundinamarca (11 municipios excluidos); Meta pregrado radio 20 km desde Suba + Soacha, Zipaquirá, Facatativá.\n- En diciembre hay que volver a subir los diarios de generales/branding Meta según el forecast.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| 2026-11-05 | Pauta por programa 2027-1, Escenario #2: +$89.316.745 para 12 programas, sin TikTok | Google $68,36M / Meta $20,96M; nov $24,56M | Sí, aprobado 2026-11-05 |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n- 2026-11-12: los 4 anuncios MBA v2 (`estatico_mba-pt{1..4}-v2_2027-1`) pasan la revisión de Meta (criterio: `effective_status` ACTIVE en los 4).\n\n## Contactos y chats\n- Personas: Daniela Devia Diaz (token Meta). Canal de alertas: Google Chat `corpas-google-chat` (webhook en `GOOGLE_CHAT_WEBHOOK_CORPAS`).\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `ed6cfaf7-a4ef-4e5b-a29e-585008534bfe` — Google/Meta/TikTok 2027-1 (sesión principal)\n- `0c68509b-de31-4a05-bc7b-99b9eb0fb5ab` — ángulos de comunicación\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n- `8a7ebf51-fd46-4690-a950-2aebe38369fb` — actualización de piezas MBA en Meta\n\n## Pendientes\n- Demand Gen: faltan formatos 1,91:1 y videos.\n- Material para las 4 campañas Meta por programa sin anuncios.\n- Renovar token de usuario Meta antes del 2027-01-08.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-10\n- Meta MBA 2027-1: el cliente actualizó las piezas en Drive (carpeta 13ZyaaeOrJsSMuNETqOfEdJ9JrVF11HcI: partes 1-3 rehechas con logos 55 años + ADEN, y una parte 4 nueva «Piensa como estratega, lidera como directivo»). Se crearon 4 anuncios `estatico_mba-pt{1..4}-v2_2027-1` (120251409308930043, …312840043, …316710043, …320930043) y se pausaron los 3 anteriores. Script `scripts/clients/corpas/meta_mba_piezas_v2.py`, log reports/meta/corpas/piezas_mba_v2_2026-11-10.json. Reporte `implementacion-meta-programas-20271.html` actualizado (fila MBA y conteo de anuncios).\n- Portal: nueva sección «Implementaciones» en el index con reportes estilo pozo Megaloto (`implementaciones/mba-piezas-2026-11-10.html`, `implementaciones/musica-videos-2026-11-09.html`), generados con `scripts/clients/corpas/build_implementaciones.py`. Los 4 anuncios MBA v2 ya aprobados y activos. No hay video del MBA en Drive.\n### 2026-11-09\n- 8 campañas Meta por programa ACTIVAS (`adcom_ucorpas_fb_acq_landing_meta_<slug>-2027-1`); 4 sin material en pausa (SGCA, Edu Salud, Epidemiología, Salud Familiar). Log reports/meta/corpas/programas_2027-1_2026-11-09.json.\n- Pausadas 16 piezas de programa en generales/branding; nuevos diarios (General Pregrados 14k, Medicoquirúrgicos 27k, Branding pre 5k, pos 4k).\n- Token de usuario `META_USER_TOKEN_CORPAS` en .env.\n### 2026-11-06\n- 12 Search por programa 2027-1 aplicadas y activas (`corpas_search_programas_2027_1.py`). Generales nov: pre $54k/día, pos $13k/día.\n### 2026-11-05\n- TikTok branding 2027-1 activado: pregrados 1881022267537953 y posgrados 1881022256216081 ($27k/día c/u).\n- UTM Search Medicina corregida a 2027-1.\n### 2026-11-02\n- Ajustes de geo en Google y Meta.\n### 2026-10-23\n- Search generales activadas: pregrados 24395778478, posgrados 24384621003. Demand Gen branding en pausa (24384704856, 24395866075). Meta generales/branding en pausa (120251120987080043, 120251120987530043, 120251120988640043, 120251120989420043).\n### 2026-10-16\n- Reporte de ángulos de comunicación y discurso de presentación."
  },
  "gana": {
   "slug": "gana",
   "nombre": "Gana",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/gana/",
   "repo": "adcomgroupco/gana",
   "seguimiento": "",
   "hoja_presupuesto": "",
   "fuente_datos": "",
   "flow": "",
   "activo": "si",
   "titulo": "Gana",
   "descripcion": "Apuestas / chance (Colombia) · COP",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Enviar certificado de Coljuegos a Google para habilitar la pauta.",
    "Corregir la medición de registros en Meta."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "CPA registro (propuesta)",
     "~$5.600",
     "TikTok $4.643 (may–jul)",
     "Propuesta / TikTok"
    ],
    [
     "Registros / mes (propuesta)",
     "~4.486",
     "_(completar)_",
     "Propuesta"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "Gana",
     "act_1497284188840551",
     "_(verificar nombre)_ Volvió a correr en oct 2026 tras la restricción; hoy no mide registros"
    ],
    [
     "TikTok",
     "Adcom - Gana",
     "_(completar)_",
     "Corrió mayo–julio 2026"
    ],
    [
     "Google Ads",
     "—",
     "—",
     "En verificación: requiere certificado de Coljuegos"
    ],
    [
     "Programática",
     "—",
     "—",
     "Abril–junio 2026: $39,3M (alcance, no registros)"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-10-30",
     "items": [
      "Plan de medios «Contingencia y Diversificación 2026» publicado en el repo; actualizado (Meta activa, Google añadido), con historial real y previews de TikTok y programática; mix ajustado a $50M/mes."
     ]
    }
   ],
   "chats": [
    {
     "id": "0a7ff9be-d48d-46e7-a009-85371cfbb590",
     "tema": "plan de medios universo digital 2026"
    },
    {
     "id": "da51c7c8-4448-4eb7-bd41-871da6ab2ee9",
     "tema": "subir reporte al repo"
    }
   ],
   "markdown": "# Gana\n\n> Apuestas / chance (Colombia) · COP\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | Gana | act_1497284188840551 | _(verificar nombre)_ Volvió a correr en oct 2026 tras la restricción; hoy no mide registros |\n| TikTok | Adcom - Gana | _(completar)_ | Corrió mayo–julio 2026 |\n| Google Ads | — | — | En verificación: requiere certificado de Coljuegos |\n| Programática | — | — | Abril–junio 2026: $39,3M (alcance, no registros) |\n\n## Repositorios y scripts\n- Repo: `~/Documents/GitHub/gana` → [adcomgroupco/gana](https://github.com/adcomgroupco/gana) · https://adcomgroupco.github.io/gana/ — `plan-medios-universo-digital-2026.html`, reportes semanales, avance de pauta, ATL.\n- Otros colaboradores del repo: manuela-ops (manuela@adcom.group), DanielAdcom98 (esteban@adcom.group).\n\n## Fuentes de datos y hojas\n- _(completar: fuente de datos, flow, seguimiento)_\n\n## Presupuesto y flow\n- Propuesta mensual: $50M → Meta $20M, Google $15M (Search 8M / YouTube-Demand Gen 4M / PMax 3M), TikTok $10M, Programática $5M (~4.486 registros, CPA ~$5.600).\n- Meta 1–29 oct 2026: $36,2M, 7,0M de alcance.\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| CPA registro (propuesta) | ~$5.600 | TikTok $4.643 (may–jul) | Propuesta / TikTok |\n| Registros / mes (propuesta) | ~4.486 | _(completar)_ | Propuesta |\n\n## Reglas y cosas a tener en cuenta\n- TikTok: el video que explica cómo registrarse («Registro placa», CPA $2.229) costó menos de la mitad que los aspiracionales. Apuntar a la BD presencial fue lo más caro ($22.000–$28.600/registro). Duplicar presupuesto (×2,47 en junio) duplicó el CPA.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `0a7ff9be-d48d-46e7-a009-85371cfbb590` — plan de medios universo digital 2026\n- `da51c7c8-4448-4eb7-bd41-871da6ab2ee9` — subir reporte al repo\n\n## Pendientes\n- Enviar certificado de Coljuegos a Google para habilitar la pauta.\n- Corregir la medición de registros en Meta.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-10-30\n- Plan de medios «Contingencia y Diversificación 2026» publicado en el repo; actualizado (Meta activa, Google añadido), con historial real y previews de TikTok y programática; mix ajustado a $50M/mes."
  },
  "lasalle": {
   "slug": "lasalle",
   "nombre": "La Salle",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/lasalle/",
   "repo": "adcomgroupco/lasalle",
   "seguimiento": "seguimiento-lasalle.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1257480593",
   "fuente_datos": "",
   "flow": "https://docs.google.com/spreadsheets/d/1eItWY7G0UAMiy8FIjpqEUT_m43j5wFbPhaVgrjh6Rvk/edit#gid=654817097",
   "activo": "si",
   "titulo": "La Salle (La Salle Pereira Bilingual School)",
   "descripcion": "Colegio · COP · leads de matrícula",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Corregir `build_lasalle_weekly.py` para usar la custom conversion.",
    "Google: filtrar mejor las búsquedas (negativas).",
    "Corregir el idioma del formulario y los errores de texto («matrícular», «Sétimo»).",
    "Publicar el reporte de revisión de audiencias."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "CPL Meta landing (/gracias)",
     "$44.544",
     "$45.834 (2–9 nov)",
     "Meta custom conversion"
    ],
    [
     "CPL Meta formulario",
     "$11.613",
     "$9.643 (2–9 nov)",
     "Meta leads"
    ],
    [
     "CPL Google",
     "$101.129",
     "$198.929 (2–9 nov)",
     "GA4 registro_completo"
    ],
    [
     "Leads (nov)",
     "189",
     "49 al 8 nov",
     "Plataformas"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "La Salle",
     "act_720329781089929",
     "Conversión web = custom conversion `offsite_conversion.custom.1540924850920375` («LSP - Leads (Gracias page)»), no `complete_registration` (infla ~2,5×)"
    ],
    [
     "Google Ads",
     "La Salle",
     "901-678-0564",
     "Vía MCC 641-081-5435. Conversión = registro_completo importado de GA4"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-10 (aprox.)",
     "items": [
      "Pausados 19 anuncios Meta; quedan 5 por campaña. Landing: reel_6_enlasalleelproceso, estatico_bienestar_v2, estatico_sostenimiento_v1, reel_1, reel_5. Formulario: reel_6_form, reel_8_form, estatico_bilinguismo_v2, reel_2_form, estatico_bienestar_v1. Revisar el miércoles 11."
     ]
    },
    {
     "fecha": "2026-11-09",
     "items": [
      "Estado al 8 nov: $1,21M de $5M (24 %), 49 leads (formulario 37, landing 10, Google 2)."
     ]
    },
    {
     "fecha": "2026-11-02",
     "items": [
      "Activación de noviembre con $5M (campañas reactivadas tras la pausa del 27 oct)."
     ]
    },
    {
     "fecha": "2026-10 (fin)",
     "items": [
      "Flow Nov 2026 creado. Histórico jul–27 oct: form $10,51M / 787 leads ($13.357); web $9,54M / 140 leads ($68.149); Google $10,04M / 113 ($88.852).",
      "Repo organizado con planeación, creatividad e informes."
     ]
    }
   ],
   "chats": [
    {
     "id": "faf6f510-aa16-4475-83e1-7aabb76816bf",
     "tema": "reporte semanal, flow nov, activación y optimización (sesión principal)"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    }
   ],
   "markdown": "# La Salle (La Salle Pereira Bilingual School)\n\n> Colegio · COP · leads de matrícula\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | La Salle | act_720329781089929 | Conversión web = custom conversion `offsite_conversion.custom.1540924850920375` («LSP - Leads (Gracias page)»), no `complete_registration` (infla ~2,5×) |\n| Google Ads | La Salle | 901-678-0564 | Vía MCC 641-081-5435. Conversión = registro_completo importado de GA4 |\n\n## Repositorios y scripts\n- Portal: `~/Documents/GitHub/lasalle` → [adcomgroupco/lasalle](https://github.com/adcomgroupco/lasalle) — `index.html` (Tableros, Planeación, Creatividad, Informes, Implementación), `reporte-semanal.html`, flow general, segmentación Meta v4, palabras clave v2, brief audiovisual, 8 PDFs de implementación.\n- Scripts: [scripts/clients/lasalle/build_lasalle_weekly.py](../scripts/clients/lasalle/build_lasalle_weekly.py) → `data/lasalle_daily.js` (pendiente: usar la custom conversion para la campaña web).\n- Push vía GitHub Desktop.\n\n## Fuentes de datos y hojas\n- **Flow de medios** «[LaSalle]_Flow de medios»: [1eItWY7G0UAMiy8FIjpqEUT_m43j5wFbPhaVgrjh6Rvk](https://docs.google.com/spreadsheets/d/1eItWY7G0UAMiy8FIjpqEUT_m43j5wFbPhaVgrjh6Rvk/edit#gid=654817097) — «Flow Nov 2026» gid 654817097, « Flow Global 2026» 2038758460, «Flow real Facturado» 645555913, «Glow Sep-oct» 833778756.\n- **Seguimiento de presupuesto**: [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=1257480593) gid 1257480593 (meses cerrados repiten consumo: histórico desde APIs).\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Meta | $1.003.160 | - | - |\n| Google | $489.025 | - | - |\n| **Total** | **$1.492.185** | - | - |\n\nSin presupuesto del mes en el flow: ver la hoja de seguimiento o «Presupuesto y flow».\n\nAl ritmo de los días completos cierra en $4.973.949.\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| Meta | `adcom_lasalle_meta_conv_campaña-todos` | $569.568 |\n| Google | `adcom_lasalle_gg_conv_search_campaña-general-institucional` | $489.025 |\n| Meta | `adcom_lasalle_meta_conv_form_campaña_all` | $433.592 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- Noviembre 2026: $5.000.000 sin IVA ($5.950.000 con IVA) → Meta landing (Primaria) $2M, Meta formulario (Jardín + Transición) $1,5M, Google Search $1,5M. Meta: 189 leads con CPL reales de octubre ($44.544 / $11.613 / $101.129).\n- Ago–oct: Search 4,5M, «todos» 3,5M, form 4,0M (por mes, según seguimiento).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| CPL Meta landing (/gracias) | $44.544 | $45.834 (2–9 nov) | Meta custom conversion |\n| CPL Meta formulario | $11.613 | $9.643 (2–9 nov) | Meta leads |\n| CPL Google | $101.129 | $198.929 (2–9 nov) | GA4 registro_completo |\n| Leads (nov) | 189 | 49 al 8 nov | Plataformas |\n\n## Reglas y cosas a tener en cuenta\n- Formulario «Form_LaSalle-Julio-condicional»: está en inglés (campos automáticos) y deja pasar a quien responde «No».\n- Audiencias con OR en flexible_spec (llegan a todos); visitantes_90dias tiene ~20 personas; sin exclusiones.\n- Google: el problema es rendimiento, no medición (las conversiones GA4 sí llegan).\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `faf6f510-aa16-4475-83e1-7aabb76816bf` — reporte semanal, flow nov, activación y optimización (sesión principal)\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n\n## Pendientes\n- Corregir `build_lasalle_weekly.py` para usar la custom conversion.\n- Google: filtrar mejor las búsquedas (negativas).\n- Corregir el idioma del formulario y los errores de texto («matrícular», «Sétimo»).\n- Publicar el reporte de revisión de audiencias.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-10 (aprox.)\n- Pausados 19 anuncios Meta; quedan 5 por campaña. Landing: reel_6_enlasalleelproceso, estatico_bienestar_v2, estatico_sostenimiento_v1, reel_1, reel_5. Formulario: reel_6_form, reel_8_form, estatico_bilinguismo_v2, reel_2_form, estatico_bienestar_v1. Revisar el miércoles 11.\n### 2026-11-09\n- Estado al 8 nov: $1,21M de $5M (24 %), 49 leads (formulario 37, landing 10, Google 2).\n### 2026-11-02\n- Activación de noviembre con $5M (campañas reactivadas tras la pausa del 27 oct).\n### 2026-10 (fin)\n- Flow Nov 2026 creado. Histórico jul–27 oct: form $10,51M / 787 leads ($13.357); web $9,54M / 140 leads ($68.149); Google $10,04M / 113 ($88.852).\n- Repo organizado con planeación, creatividad e informes."
  },
  "megaloto": {
   "slug": "megaloto",
   "nombre": "Megaloto",
   "moneda": "USD",
   "portal": "https://adcomgroupco.github.io/megaloto/",
   "repo": "adcomgroupco/megaloto",
   "seguimiento": "seguimiento-megaloto.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=993244039",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/1XLyfDF_NpSMau_gvgVSF9Fc6h3EuOHHdhkoTbRe7tms/edit",
   "flow": "https://drive.google.com/file/d/1IhggoWp8gTJqJQD3k1-ubMKryHHIj4Mj/view",
   "activo": "si",
   "titulo": "Megaloto",
   "descripcion": "Lotería (Paraguay) · USD (TikTok factura en COP → USD con TRM 3.500)",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Pegar los flows ideal Nov–Dic (xlsx local en Descargas) en el flow de Drive.",
    "Investigar por qué el CRM nunca registra jugadas `PAGO_ONLINE-TIKTOK-*` (la landing.megaloto.com.py parece perder las UTMs antes de lotoqr).",
    "Audiencias «Jugadores» en TikTok: hay que asignarlas a mano (sin permiso por API)."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "Inversión Meta / mes",
     "13.000 USD",
     "_(seguimiento)_",
     "Hoja de seguimiento"
    ],
    [
     "Inversión TikTok / mes",
     "4.200 USD",
     "_(seguimiento)_",
     "Hoja de seguimiento"
    ],
    [
     "Jugadas atribuidas (CRM)",
     "_(completar)_",
     "~1.000 perdidas en oct por UTM",
     "HOMOLOGACION"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "Megaloto 4",
     "act_2362027187633383",
     "USD, BM «Caproni 2». Página 215825578287504 · IG @megalotopy 17841464477857262 · Pixel LotoQr 2 = 1790896178792185 (de otro BM). El conector Meta de claude.ai no la ve: usar el token CLI"
    ],
    [
     "Meta",
     "Megaloto 3",
     "—",
     "Restringida, sin acceso API. Gasto manual en `MANUAL_SPEND` de tools/collect_monthly_spend.py"
    ],
    [
     "TikTok",
     "ADCOM - Megaloto",
     "7671062540692111368",
     "COP, zona America/Bogota (API en UTC). Pixel 7673953426899845127"
    ],
    [
     "X / Programática",
     "—",
     "—",
     "En USD, desde la hoja de datos"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-06",
     "items": [
      "TikTok nov: VV AWA 1881117047068993 / grupo 1881117041647697 (116.700 COP/día) y Conversión 1881117051894977 / grupo 1881117065958882 (204.200 COP/día), 07/11–01/12. HOMOLOGACION filas 37–39.",
      "Reporte mensual incluye TikTok y «Avance vs flow». Flow movido a nuevo xlsx.",
      "Diagnóstico: audiencias de píxel tienen tamaño real (~5–28K); la brecha de CPA one-activos vs M3 no es por audiencias vacías."
     ]
    },
    {
     "fecha": "2026-11-04",
     "items": [
      "Conjunto caliente lleno (50 anuncios) → duplicado `Megaloto_jugadores-one-activos_v2` 120248588167430656 (63,70/día)."
     ]
    },
    {
     "fecha": "2026-11-02",
     "items": [
      "Presupuestos Meta nov cargados. TikTok cons-tiktok reactivado (14.035.000 COP lifetime, fin 2026-12-01)."
     ]
    },
    {
     "fecha": "2026-10-30",
     "items": [
      "one-activos (120248207748350656, ABO) dividida: conjuntos calientes + nuevo lookalike `Megaloto_lkl-jugadores-90d` 120248503921080656. Flow Noviembre 2026 entregado como xlsx local."
     ]
    },
    {
     "fecha": "2026-10-27",
     "items": [
      "Regla de UTM homologada para promos."
     ]
    },
    {
     "fecha": "2026-10-13",
     "items": [
      "TRM TikTok 3.500 confirmada."
     ]
    }
   ],
   "chats": [
    {
     "id": "677b2efa-e193-4531-bf53-907accd28ff0",
     "tema": "materiales, flows, campañas Meta/TikTok y reportes (sesión principal)"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    }
   ],
   "markdown": "# Megaloto\n\n> Lotería (Paraguay) · USD (TikTok factura en COP → USD con TRM 3.500)\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | Megaloto 4 | act_2362027187633383 | USD, BM «Caproni 2». Página 215825578287504 · IG @megalotopy 17841464477857262 · Pixel LotoQr 2 = 1790896178792185 (de otro BM). El conector Meta de claude.ai no la ve: usar el token CLI |\n| Meta | Megaloto 3 | — | Restringida, sin acceso API. Gasto manual en `MANUAL_SPEND` de tools/collect_monthly_spend.py |\n| TikTok | ADCOM - Megaloto | 7671062540692111368 | COP, zona America/Bogota (API en UTC). Pixel 7673953426899845127 |\n| X / Programática | — | — | En USD, desde la hoja de datos |\n\n## Repositorios y scripts\n- Portal: `~/Documents/GitHub/megaloto` → [adcomgroupco/megaloto](https://github.com/adcomgroupco/megaloto) · https://adcomgroupco.github.io/megaloto/\n- Otros repos: [eros-wq/megaloto_creativo](https://github.com/eros-wq/megaloto_creativo), [eros-wq/reportemegaloto](https://github.com/eros-wq/reportemegaloto).\n- Scripts: [scripts/clients/megaloto/](../scripts/clients/megaloto/) — `build_megaloto_seguimiento.py` → `informes/seguimiento-<mes>-2026.html` (agregar presupuestos del mes en el dict `FLOW`).\n- Push vía GitHub Desktop.\n\n## Fuentes de datos y hojas\n- **Fuente de datos** «[Megaloto] Fuente de datos»: [1XLyfDF_NpSMau_gvgVSF9Fc6h3EuOHHdhkoTbRe7tms](https://docs.google.com/spreadsheets/d/1XLyfDF_NpSMau_gvgVSF9Fc6h3EuOHHdhkoTbRe7tms) — MEGALOTO-CRM, FB_MEGALOTO, X_MEGALOTO, TT_MEGALOTO, PROGRAMATICA, HOMOLOGACION, RESUMEN DIARIO. Se puede escribir con GOOGLE_SHEETS_REFRESH_TOKEN.\n- **Flow** (desde 2026-11-06): xlsx [1IhggoWp8gTJqJQD3k1-ubMKryHHIj4Mj](https://drive.google.com/file/d/1IhggoWp8gTJqJQD3k1-ubMKryHHIj4Mj) (gid 18973942). Anterior: «[MegaLoto] Flow de medios.xlsx» [1T0wNtjNMqsWipxcsmQ_sWm6P1_azkDpy](https://drive.google.com/file/d/1T0wNtjNMqsWipxcsmQ_sWm6P1_azkDpy).\n- **Seguimiento de presupuesto**: [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=993244039) gid 993244039 (bloques TikTok en COP duplican filas USD: descartar ≥ 100.000).\n- **Materiales** «MATERIALES - MEGA LOTO - TB»: [1RgxITpgQOsOUKxBUMFYGHdLq8SRHrvzoWWNShMq2p1o](https://docs.google.com/spreadsheets/d/1RgxITpgQOsOUKxBUMFYGHdLq8SRHrvzoWWNShMq2p1o) (dueño: cliente).\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Meta | US$4.153 | - | - |\n| TikTok | US$762 | - | - |\n| **Total** | **US$4.914** | - | - |\n\nSin presupuesto del mes en el flow: ver la hoja de seguimiento o «Presupuesto y flow».\n\nAl ritmo de los días completos cierra en US$16.382.\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| Meta | `adcom_megaloto_fb_conv_meta_one-activos` | US$1.348 |\n| Meta | `adcom_megaloto_fb_conv_meta_riesgo` | US$994 |\n| Meta | `adcom_megaloto_fb_conv_meta_nuevos` | US$490 |\n| Meta | `adcom_megaloto_fb_awa_meta_videoviews-awa` | US$459 |\n| TikTok | `adcom_megaloto_tt_conv_tiktok_cons-tiktok` | US$436 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- Octubre 2026: 20.000 USD todo Meta (M3 2.629 + M4), pestaña «Octubre 2 2026».\n- Desde noviembre 2026: Meta 13.000 USD + TikTok 4.200 USD/mes. Meta nov = 433,33 USD/día; one-activos 60/40 caliente/lookalike (63,70 / 42,47).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| Inversión Meta / mes | 13.000 USD | _(seguimiento)_ | Hoja de seguimiento |\n| Inversión TikTok / mes | 4.200 USD | _(seguimiento)_ | Hoja de seguimiento |\n| Jugadas atribuidas (CRM) | _(completar)_ | ~1.000 perdidas en oct por UTM | HOMOLOGACION |\n\n## Reglas y cosas a tener en cuenta\n- **UTM = homologación**: usar el `utm_campaign` que HOMOLOGACION asigna a la campaña. Base `https://lotoqr.megaloto.com.py/?utm_source=pago_online&utm_medium=meta&utm_campaign=<x>`. one-activos (pozo y promos 2x1/3x2) → `adcom_conv_activos`; cons-meta → `adcom_cons_compra`; nuevos → `adcom_conv_nuevos`; riesgo → `adcom_conv_riesgo`; trafico-awa → `adcom_traf`; videoviews → `adcom_awa`. Nunca `2X1` / `NUEVA_MATRIZ` (~1.000 jugadas perdidas en oct).\n- Meta: máximo 50 anuncios no archivados por conjunto. Cambio semanal de pozo también en el conjunto lookalike (`lkl_<pieza>`). Reglas semanales recurrentes: desactivarlas tras correr.\n- Tamaño de audiencias de píxel: usar /delivery_estimate, no approximate_count (muestra 20).\n- App Meta en tier development_access: error 17/2446079 en días pesados; agrupar llamadas.\n- TikTok: cons-tiktok tiene presupuesto LIFETIME (para extender = gasto acumulado + nuevo COP y mover fecha fin). Token sin permisos de píxel/audiencias. La línea del env tiene comillas + CRLF.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `677b2efa-e193-4531-bf53-907accd28ff0` — materiales, flows, campañas Meta/TikTok y reportes (sesión principal)\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n\n## Pendientes\n- Pegar los flows ideal Nov–Dic (xlsx local en Descargas) en el flow de Drive.\n- Investigar por qué el CRM nunca registra jugadas `PAGO_ONLINE-TIKTOK-*` (la landing.megaloto.com.py parece perder las UTMs antes de lotoqr).\n- Audiencias «Jugadores» en TikTok: hay que asignarlas a mano (sin permiso por API).\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-06\n- TikTok nov: VV AWA 1881117047068993 / grupo 1881117041647697 (116.700 COP/día) y Conversión 1881117051894977 / grupo 1881117065958882 (204.200 COP/día), 07/11–01/12. HOMOLOGACION filas 37–39.\n- Reporte mensual incluye TikTok y «Avance vs flow». Flow movido a nuevo xlsx.\n- Diagnóstico: audiencias de píxel tienen tamaño real (~5–28K); la brecha de CPA one-activos vs M3 no es por audiencias vacías.\n### 2026-11-04\n- Conjunto caliente lleno (50 anuncios) → duplicado `Megaloto_jugadores-one-activos_v2` 120248588167430656 (63,70/día).\n### 2026-11-02\n- Presupuestos Meta nov cargados. TikTok cons-tiktok reactivado (14.035.000 COP lifetime, fin 2026-12-01).\n### 2026-10-30\n- one-activos (120248207748350656, ABO) dividida: conjuntos calientes + nuevo lookalike `Megaloto_lkl-jugadores-90d` 120248503921080656. Flow Noviembre 2026 entregado como xlsx local.\n### 2026-10-27\n- Regla de UTM homologada para promos.\n### 2026-10-13\n- TRM TikTok 3.500 confirmada."
  },
  "raza": {
   "slug": "raza",
   "nombre": "Raza",
   "moneda": "USD",
   "portal": "",
   "repo": "",
   "seguimiento": "",
   "hoja_presupuesto": "",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/1VPr4WylgTaP823grmaT0zMEbZLQbzwNZ0TSFJb6mCDk/edit",
   "flow": "",
   "activo": "si",
   "titulo": "Raza (Raza.do)",
   "descripcion": "Apuestas (República Dominicana) · USD en Meta · cuenta temporal desde 2026-10-26",
   "actualizado": "2026-11-10",
   "pendientes": [
    "URL de casino y oferta de bienvenida por confirmar con Raza."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "Presupuesto diario Meta",
     "USD 125 (50+50+25)",
     "_(completar)_",
     "Meta"
    ],
    [
     "FTD (depósitos)",
     "_(completar)_",
     "_(completar)_",
     "Pixel FTD"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "Raza.do",
     "act_1583026012961560",
     "**Usar esta.** USD, BM Breeze. Pixel 1830739091607535 (Depósito optimiza a evento custom `FTD`). Página 1220897637784512 · IG 17841434685487580"
    ],
    [
     "Meta (no usar)",
     "ADCOM - RAZA",
     "1071719414114215",
     "COP, rechazos por apuestas"
    ],
    [
     "TikTok",
     "ADCOM - RAZA",
     "7691724662851289096",
     "COP, zona Santo Domingo. Registro 1880222703280450, Depósito 1880222719026417 (presupuesto por grupo)"
    ],
    [
     "Programática",
     "Prodigy",
     "—",
     "Datos en hoja de Prodigy (USD)"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11 (inicio)",
     "items": [
      "Línea casino separada: conjunto `Casino_AON` en cada campaña existente (Meta y TikTok). CDM casino v3."
     ]
    },
    {
     "fecha": "2026-10-31",
     "items": [
      "Pausados todos los anuncios SerieMundial en Meta."
     ]
    },
    {
     "fecha": "2026-10-26",
     "items": [
      "Inicio de la cuenta (una semana). Reporte gerencia octubre con programática + semáforo."
     ]
    }
   ],
   "chats": [
    {
     "id": "827e7296-dc24-49fb-9429-a34058077ac6",
     "tema": "estándares Raza, campañas, casino, Prodigy"
    }
   ],
   "markdown": "# Raza (Raza.do)\n\n> Apuestas (República Dominicana) · USD en Meta · cuenta temporal desde 2026-10-26\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | Raza.do | act_1583026012961560 | **Usar esta.** USD, BM Breeze. Pixel 1830739091607535 (Depósito optimiza a evento custom `FTD`). Página 1220897637784512 · IG 17841434685487580 |\n| Meta (no usar) | ADCOM - RAZA | 1071719414114215 | COP, rechazos por apuestas |\n| TikTok | ADCOM - RAZA | 7691724662851289096 | COP, zona Santo Domingo. Registro 1880222703280450, Depósito 1880222719026417 (presupuesto por grupo) |\n| Programática | Prodigy | — | Datos en hoja de Prodigy (USD) |\n\n## Repositorios y scripts\n- Sin repo. Guía de estándares: `/Users/macbookpro/Downloads/Estandares Raza.md`. Media Bridge de Raza vive en el Windows de otra persona.\n\n## Fuentes de datos y hojas\n- **Prodigy** «RAZA.RD | Fuente de Data Prodigy»: [1VPr4WylgTaP823grmaT0zMEbZLQbzwNZ0TSFJb6mCDk](https://docs.google.com/spreadsheets/d/1VPr4WylgTaP823grmaT0zMEbZLQbzwNZ0TSFJb6mCDk) (Hoja 1; col I = Push/Display/Rich Media/Spotify, col J = Streaming). Sin permiso de edición (dueña natalia.calderon@grupoprodigy.com).\n- **CDM casino** «[Raza] Cuadro de materiales · Casino AON v3»: [19TCj_8EYzz343NMizsWq3whUO3xmkNFTWRg6jPW_jM4](https://docs.google.com/spreadsheets/d/19TCj_8EYzz343NMizsWq3whUO3xmkNFTWRg6jPW_jM4) (carpeta RAZA - TB; v1 y v2 obsoletas).\n\n## Presupuesto y flow\n- Meta: Registros_AlwaysOn 120252548915070700 y Deposito_AlwaysOn 120252567640590700 (USD 50 c/u), Branding 120252567655300700 (USD 25). CBO.\n- Programática octubre: USD 18.600 (11.450 col I + 7.150 Streaming).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| Presupuesto diario Meta | USD 125 (50+50+25) | _(completar)_ | Meta |\n| FTD (depósitos) | _(completar)_ | _(completar)_ | Pixel FTD |\n\n## Reglas y cosas a tener en cuenta\n- Multianunciante y Advantage+ Creative SIEMPRE apagados (los subidos a mano llegan encendidos). Edad 18–65. Un anuncio 4:5 + 9:16 por campaña. Nombre `<Concepto> DD/MM`.\n- UTM `utm_campaign=registro|deposito|branding`; casino: además `utm_content=casino_<mensaje>`.\n- Confirmar el act_ID antes de cualquier escritura (COP vs USD).\n- raza.do está detrás de Cloudflare (curl da 403). El dashboard de Prodigy promedia CTRs: recalcular.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: esteban@adcom.group (editor de la hoja Prodigy).\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `827e7296-dc24-49fb-9429-a34058077ac6` — estándares Raza, campañas, casino, Prodigy\n\n## Pendientes\n- URL de casino y oferta de bienvenida por confirmar con Raza.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11 (inicio)\n- Línea casino separada: conjunto `Casino_AON` en cada campaña existente (Meta y TikTok). CDM casino v3.\n### 2026-10-31\n- Pausados todos los anuncios SerieMundial en Meta.\n### 2026-10-26\n- Inicio de la cuenta (una semana). Reporte gerencia octubre con programática + semáforo."
  },
  "ris": {
   "slug": "ris",
   "nombre": "RIS",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/ris/",
   "repo": "adcomgroupco/ris",
   "seguimiento": "seguimiento-ris.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=620196651",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/1hvj1kmT-OFo-Avje0dzdSQr-J1GkTdQT8QPHJs9CGf4/edit",
   "flow": "https://drive.google.com/file/d/1atzvAYoT_6e4FWw1_fNSAEqaRhUeUusp/view",
   "activo": "si",
   "titulo": "RIS (Crédito en RIS)",
   "descripcion": "Crédito digital · COP · objetivo = desembolsos",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Actualizar `ris_crm_audiences.py` para la audiencia «Verificación incompleta».",
    "Crear acciones de conversión en la cuenta Google nueva.",
    "Base de desembolsos oct/nov para el caso de éxito y para CAPI.",
    "Confirmar con el dev de RIS la definición de CupoAprobado (posible señal de optimización)."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "Costo por desembolso",
     "$28.000",
     "$31.561 sep · ≈$46.000 oct (proy.)",
     "Flow / BD Experian"
    ],
    [
     "Desembolsos (nov)",
     "750",
     "~277 oct (proy.)",
     "BD RIS"
    ],
    [
     "Inversión (nov)",
     "$21M",
     "_(seguimiento)_",
     "Hoja de seguimiento"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "ADCOM 2024 - RIS",
     "act_446594098491052",
     "COP. Pixel «Pixel RIS \\",
     "Adcom» 1029290139412278 (eventos Lead, Purchase = solicitud, CupoAprobado, CupoRechazado). Entra en «periodo de gracia» de facturación con frecuencia"
    ],
    [
     "Google Ads",
     "ADCOM - CREDITO EN RIS",
     "286-895-4991",
     "Desde 2026-11-09. Bajo MCC The Brand CG 726-576-1805 → `login_customer_id=\"7265761805\"`. Facturación aprobada (perfil 7094-9903-0701 CONSTRUCTORA DE MARCA S.A.S). Sin acciones de conversión aún"
    ],
    [
     "Google Ads (vieja)",
     "RIS",
     "296-108-2297",
     "Nunca sirvió (facturación pendiente). Campaña 24429941228 en pausa"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-10",
     "items": [
      "`collect_monthly_spend.py` elige login por cuenta (`GOOGLE_LOGIN_BY_ACCOUNT`) para la cuenta nueva."
     ]
    },
    {
     "fecha": "2026-11-09",
     "items": [
      "Google pasa a 286-895-4991 (MCC The Brand CG). Campaña nueva 24454543402 ACTIVA a 136k/día. Reporte `implementacion-google-search-2026-11-06.html` actualizado.",
      "Caso de éxito 2026 (`caso-exito-costo-desembolso-2026.html`): costo por desembolso ene $485.790 → sep $31.561."
     ]
    },
    {
     "fecha": "2026-11-06",
     "items": [
      "Landing corregida (plazo 90–180 días, TAE máx 145,5% E.A.); Search activada a 143k/día; 5 keywords de préstamos re-añadidas con exención."
     ]
    },
    {
     "fecha": "2026-11-04",
     "items": [
      "Flow nov = 21M; presupuestos ajustados. Search creada en pausa (24429941228). Planeada 3.ª audiencia RMK «Verificación incompleta». Se pidieron bases a Pablo."
     ]
    },
    {
     "fecha": "2026-11-03",
     "items": [
      "Todos los anuncios Meta aterrizan en https://ris.com.co/ (9 anuncios Cupo Fijo cambiados a creativos «- Home»)."
     ]
    },
    {
     "fecha": "2026-11-02",
     "items": [
      "Nov: Solicitud 300k, Inicio 145k, RMK 2×12,5k (frecuencia 11–13: base saturada)."
     ]
    },
    {
     "fecha": "2026-10-21",
     "items": [
      "Reparto oct 13M Meta + 1M Google. Subida de 656 desembolsados; LKL 1% creado. CAPI de desembolsos (39 de 656 enviados)."
     ]
    },
    {
     "fecha": "2026-10-18",
     "items": [
      "Audiencias CRM y campaña de remarketing creadas."
     ]
    },
    {
     "fecha": "2026-10-15",
     "items": [
      "Solicitud 500k → 260k/día; pausada campaña de Engagement; reactivado LKL BD Experian; edad sugerida 20–44 en conjunto mujeres."
     ]
    }
   ],
   "chats": [
    {
     "id": "fd6121d4-5fd7-4537-b563-b628caa5ce03",
     "tema": "diagnóstico Meta, CRM, Google, caso de éxito (sesión principal)"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    }
   ],
   "markdown": "# RIS (Crédito en RIS)\n\n> Crédito digital · COP · objetivo = desembolsos\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | ADCOM 2024 - RIS | act_446594098491052 | COP. Pixel «Pixel RIS \\| Adcom» 1029290139412278 (eventos Lead, Purchase = solicitud, CupoAprobado, CupoRechazado). Entra en «periodo de gracia» de facturación con frecuencia |\n| Google Ads | ADCOM - CREDITO EN RIS | 286-895-4991 | Desde 2026-11-09. Bajo MCC The Brand CG 726-576-1805 → `login_customer_id=\"7265761805\"`. Facturación aprobada (perfil 7094-9903-0701 CONSTRUCTORA DE MARCA S.A.S). Sin acciones de conversión aún |\n| Google Ads (vieja) | RIS | 296-108-2297 | Nunca sirvió (facturación pendiente). Campaña 24429941228 en pausa |\n\n## Repositorios y scripts\n- Portal: `~/Documents/GitHub/ris` → [adcomgroupco/ris](https://github.com/adcomgroupco/ris) · https://adcomgroupco.github.io/ris/ (plan de choque, caso de éxito, implementaciones). Copia en [reports/html/ris/](../reports/html/ris/).\n- Scripts: [scripts/clients/ris/](../scripts/clients/ris/) — `ris_crm_audiences.py`, `ris_capi_desembolsos.py`, `build_ris_simulador.py`, `build_ris_weekly.py`; [scripts/google/ris_crear_search_solicitud.py](../scripts/google/ris_crear_search_solicitud.py).\n- Push vía GitHub Desktop.\n\n## Fuentes de datos y hojas\n- **Flow de medios**: «[RIS] Flow_Medios_Meta_Desembolsos_para_Agencia.xlsm» [1atzvAYoT_6e4FWw1_fNSAEqaRhUeUusp](https://drive.google.com/file/d/1atzvAYoT_6e4FWw1_fNSAEqaRhUeUusp) — presupuesto = objetivo de desembolsos × $28K. Pestaña «Flow Noviembre 2026».\n- **Simulador** (copia Sheets): [1i_2l93Ur85rp_JuEpIkqH97oIM0FZjOWh0rpfv0VEPc](https://docs.google.com/spreadsheets/d/1i_2l93Ur85rp_JuEpIkqH97oIM0FZjOWh0rpfv0VEPc).\n- **Base de usuarios** «BD Usuarios ExperianCredito en RIS»: [1hvj1kmT-OFo-Avje0dzdSQr-J1GkTdQT8QPHJs9CGf4](https://docs.google.com/spreadsheets/d/1hvj1kmT-OFo-Avje0dzdSQr-J1GkTdQT8QPHJs9CGf4) (pestaña Base, Desembolso=APROBADO; llega al 30 sep 2026).\n- **Seguimiento de presupuesto**: [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=620196651) gid 620196651.\n- **CRM**: RIS envía «InfoSolCredi_*.xlsx» (PII) casi semanal → `ris_crm_audiences.py <xlsx> --upload`.\n- **Cuadro de materiales nov**: Drive 12LqTjVonGIko_9rOFmuTEViYB0j97Yph (9 piezas + 6 videos).\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Meta | $5.260.005 | $18.000.000 | 29 % |\n| Google | $215.810 | $3.000.000 | 7 % |\n| **Total** | **$5.475.815** | $21.000.000 | 26 % |\n\nPresupuesto: [RIS] Flow de medios | Propuestas · Julio, Agosto y General oct–jun. La fuente de verdad es la hoja de seguimiento.\n\nAl ritmo de los días completos cierra en $18.252.717 (87 % del presupuesto).\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| Meta | `4. Adcom - Campaña Conversiones  - Solicitud credito` | $3.642.853 |\n| Meta | `3. Adcom - Campaña Conversiones  - Inicio inscripción` | $1.378.678 |\n| Meta | `7. Adcom - Remarketing CRM - Solicitud credito` | $238.474 |\n| Google | `adcom_ris_gg_acq_search_solicitud-credito` | $215.810 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- Octubre 2026: 14M (Meta 13M + Google 1M). Meta cerró en 12,8M.\n- Noviembre 2026: 21M (Meta 18M + Google 3M desde 9/11). Diarios: Solicitud 452k, Inicio 147,5k, RMK pendiente 12,1k, RMK creada 12,2k; Google 136k/día.\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| Costo por desembolso | $28.000 | $31.561 sep · ≈$46.000 oct (proy.) | Flow / BD Experian |\n| Desembolsos (nov) | 750 | ~277 oct (proy.) | BD RIS |\n| Inversión (nov) | $21M | _(seguimiento)_ | Hoja de seguimiento |\n\n## Reglas y cosas a tener en cuenta\n- Campañas clave (CBO): «4. Solicitud credito» (purchase = solicitud) y «3. Inicio inscripción» (lead). RMK: «7. Adcom - Remarketing CRM» 120250296514630336 (ABO).\n- Audiencias CRM: Clientes desembolsados 120250296486510336 y Exclusión no aptas 120250296486680336 (excluidas en toda la prospección), RMK cuenta creada 120250296486820336, RMK cuenta pendiente 120250296486940336. LKL 1% desembolsados 120250354551320336.\n- CAPI solo acepta eventos de los últimos 7 días: RIS debe mandar desembolsos al menos cada ~5 días.\n- Audiencias web del píxel muestran ~20 personas: el retargeting por píxel no funciona hasta corregir reglas.\n- Requisitos RIS: edad 25–70, no reportados. Google: «Personal loans» exige divulgaciones en la landing (ya corregidas).\n- API Google: fijar `login_customer_id` ANTES de `get_service`.\n- Daniela Devia Diaz maneja presupuestos en Power Editor.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: Pablo (bases CRM, RIS) · Daniela Devia Diaz (Power Editor).\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `fd6121d4-5fd7-4537-b563-b628caa5ce03` — diagnóstico Meta, CRM, Google, caso de éxito (sesión principal)\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n\n## Pendientes\n- Actualizar `ris_crm_audiences.py` para la audiencia «Verificación incompleta».\n- Crear acciones de conversión en la cuenta Google nueva.\n- Base de desembolsos oct/nov para el caso de éxito y para CAPI.\n- Confirmar con el dev de RIS la definición de CupoAprobado (posible señal de optimización).\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-10\n- `collect_monthly_spend.py` elige login por cuenta (`GOOGLE_LOGIN_BY_ACCOUNT`) para la cuenta nueva.\n### 2026-11-09\n- Google pasa a 286-895-4991 (MCC The Brand CG). Campaña nueva 24454543402 ACTIVA a 136k/día. Reporte `implementacion-google-search-2026-11-06.html` actualizado.\n- Caso de éxito 2026 (`caso-exito-costo-desembolso-2026.html`): costo por desembolso ene $485.790 → sep $31.561.\n### 2026-11-06\n- Landing corregida (plazo 90–180 días, TAE máx 145,5% E.A.); Search activada a 143k/día; 5 keywords de préstamos re-añadidas con exención.\n### 2026-11-04\n- Flow nov = 21M; presupuestos ajustados. Search creada en pausa (24429941228). Planeada 3.ª audiencia RMK «Verificación incompleta». Se pidieron bases a Pablo.\n### 2026-11-03\n- Todos los anuncios Meta aterrizan en https://ris.com.co/ (9 anuncios Cupo Fijo cambiados a creativos «- Home»).\n### 2026-11-02\n- Nov: Solicitud 300k, Inicio 145k, RMK 2×12,5k (frecuencia 11–13: base saturada).\n### 2026-10-21\n- Reparto oct 13M Meta + 1M Google. Subida de 656 desembolsados; LKL 1% creado. CAPI de desembolsos (39 de 656 enviados).\n### 2026-10-18\n- Audiencias CRM y campaña de remarketing creadas.\n### 2026-10-15\n- Solicitud 500k → 260k/día; pausada campaña de Engagement; reactivado LKL BD Experian; edad sugerida 20–44 en conjunto mujeres."
  },
  "upb": {
   "slug": "upb",
   "nombre": "UPB",
   "moneda": "COP",
   "portal": "https://adcomgroupco.github.io/upb/",
   "repo": "adcomgroupco/upb",
   "seguimiento": "seguimiento-upb.html",
   "hoja_presupuesto": "https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=66960802",
   "fuente_datos": "https://docs.google.com/spreadsheets/d/1FotsmVZKnglJqYuM66jmOd9UaCpSPv3sgo5djiWJWWA/edit",
   "flow": "https://drive.google.com/file/d/1-6BIi6nlC7uXDqjYRQgTL41VcnYg7GGK/view",
   "activo": "si",
   "titulo": "UPB Virtual / Open (VOOK)",
   "descripcion": "Educación virtual · COP · periodo 2027-1 (sep 2026–feb 2027)",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Limpiar tráfico SENA en campañas de concordancia amplia (negativas / cambio de concordancia).",
    "Ubicar el flow de septiembre (no está en Drive)."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "Inversión Virtual (nov)",
     "$23.419.084 sin IVA",
     "_(seguimiento)_",
     "Flow nov"
    ],
    [
     "% leads SENA en Search amplia",
     "0 %",
     "96 % (1.44) · 97 % (1.13) oct",
     "Google Ads"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "UPB",
     "act_402450040363124",
     "Página UPBVirtual 1900729720154188. El system user NO tiene rol en la página → usar `META_USER_TOKEN_CORPAS` (Daniela Devia Diaz) para crear/duplicar anuncios. El conector Meta de claude.ai no tiene acceso"
    ],
    [
     "Google Ads",
     "UPB",
     "281-583-9788",
     "Bajo MCC 641-081-5435"
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-10",
     "items": [
      "Probado el token de usuario: deep copy del conjunto 2.1 (120253979745950332 → 120254619095100332 «Carrusel - Educación - reinicio», en pausa)."
     ]
    },
    {
     "fecha": "2026-11 (inicio)",
     "items": [
      "Meta 1.9.2 dividida en «1.9.9 Diseño_Carrusel_Meta_UPB Virtual» y «1.9.10 MarketingDigital_Carrusel_Meta_UPB Virtual» ($405.776/mes c/u)."
     ]
    },
    {
     "fecha": "2026-10-22",
     "items": [
      "Nuevos Search: 1.46 Lic. Lenguas Extranjeras, 1.47 Esp. Educación Profesionales Salud, 1.48 Maestría en Derecho."
     ]
    },
    {
     "fecha": "2026-10-19",
     "items": [
      "Seguimiento HTML y reporte de implementación Meta (anuncios «08-10» / «16-10»)."
     ]
    }
   ],
   "chats": [
    {
     "id": "19f17ba9-ce8b-4477-a0f4-4dd16538f311",
     "tema": "seguimiento UPB, flow 2027-1, Google Search (sesión principal)"
    },
    {
     "id": "c80431b0-b361-470b-90c5-54511ee914b1",
     "tema": "seguimiento mensual de presupuesto"
    }
   ],
   "markdown": "# UPB Virtual / Open (VOOK)\n\n> Educación virtual · COP · periodo 2027-1 (sep 2026–feb 2027)\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | UPB | act_402450040363124 | Página UPBVirtual 1900729720154188. El system user NO tiene rol en la página → usar `META_USER_TOKEN_CORPAS` (Daniela Devia Diaz) para crear/duplicar anuncios. El conector Meta de claude.ai no tiene acceso |\n| Google Ads | UPB | 281-583-9788 | Bajo MCC 641-081-5435 |\n\n## Repositorios y scripts\n- Portal: `~/Documents/GitHub/upb` → [adcomgroupco/upb](https://github.com/adcomgroupco/upb) · https://adcomgroupco.github.io/upb/ (index estilo Corpas + `seguimiento-mensual.html`). Copia en [reports/html/upb/](../reports/html/upb/).\n- Scripts: [scripts/clients/upb/](../scripts/clients/upb/) — `build_implementacion.py` (reporte de implementación Meta).\n- Push: `! git -C ~/Documents/GitHub/upb push origin main` (desde la terminal del usuario).\n\n## Fuentes de datos y hojas\n- **Fuente de datos** «[UPB] Fuente de datos»: [1FotsmVZKnglJqYuM66jmOd9UaCpSPv3sgo5djiWJWWA](https://docs.google.com/spreadsheets/d/1FotsmVZKnglJqYuM66jmOd9UaCpSPv3sgo5djiWJWWA) — gviz por nombre: RESUMEN GENERAL, GG_UPB, FB_UPB, Homologación. Escribible con GOOGLE_SHEETS_REFRESH_TOKEN. Los nombres de campaña deben coincidir exacto (incluye espacios dobles).\n- **Flow 2027-1**: «Presupuestos VOOK_ADCOM_UPB_1 2027_OCTUBRE_01102026» [1vLjfhwzd6AmKuyFCfr6eZw29KU_slL8c](https://drive.google.com/file/d/1vLjfhwzd6AmKuyFCfr6eZw29KU_slL8c). Flow nov: [1-6BIi6nlC7uXDqjYRQgTL41VcnYg7GGK](https://drive.google.com/file/d/1-6BIi6nlC7uXDqjYRQgTL41VcnYg7GGK). Descargar con `docs.google.com/spreadsheets/d/<id>/export?format=xlsx`.\n- **Seguimiento de presupuesto**: [hoja](https://docs.google.com/spreadsheets/d/1VhrT6JiqnJGDxiZ6Qsz4zR4ejXrSf2Ugq9Y8eTUcx94/edit#gid=66960802) gid 66960802 (meses cerrados repiten consumo: histórico desde APIs).\n\n## Inversión del mes\n<!-- inversion:auto -->\n_Automático (`tools/bitacora_inversion.py`, lo corre `tools/update_seguimientos.py`). Actualizado 2026-11-10 13:45, con datos hasta 2026-11-10 (el último día puede ir parcial). No editar a mano._\n\n**Noviembre 2026** (día 10 de 30, el mes va al 33 %)\n\n| Canal | Gastado | Presupuesto | % del presupuesto |\n|---|---|---|---|\n| Google | $6.174.197 | - | - |\n| Meta | $1.390.601 | - | - |\n| **Total** | **$7.564.798** | $18.900.000 | 40 % |\n\nPresupuesto: Acuerdo 20-abr-2026: $113,4M sin IVA por semestre (Virtual $97,2M + Open $16,2M), prorrateado a 6 meses. La fuente de verdad es la hoja de seguimiento.\n\nAl ritmo de los días completos cierra en $25.215.994 (133 % del presupuesto).\n\nCampañas con más gasto:\n\n| Canal | Campaña | Gastado |\n|---|---|---|\n| Google | `1.46 Licenciatura en Lenguas Extranjeras` | $343.695 |\n| Google | `1.48 Maestría en Derecho` | $321.566 |\n| Google | `1.47 Especialización en Educación para Profesionales de la Salud` | $309.565 |\n| Meta | `UPB VIRTUAL - EVENTO - Maestría en Diseño Nov 05` | $238.722 |\n| Meta | `1.3. Comunicación_Carrusel_Meta_UPB Virtual` | $178.371 |\n<!-- /inversion:auto -->\n\n## Presupuesto y flow\n- Noviembre 2026: Virtual $23.419.084 sin IVA (Google 17.042.601 / Meta 6.376.483); Open $0.\n- Filas Virtual sin IVA; filas Open con IVA (÷ 1,19).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| Inversión Virtual (nov) | $23.419.084 sin IVA | _(seguimiento)_ | Flow nov |\n| % leads SENA en Search amplia | 0 % | 96 % (1.44) · 97 % (1.13) oct | Google Ads |\n\n## Reglas y cosas a tener en cuenta\n- Google: una campaña Search por programa «1.XX Programa», 1 grupo, 1 RSA, Maximizar conversiones, concordancia amplia. Lista compartida «Negativas UPB Virtual 2027-1».\n- La concordancia amplia trae leads basura de SENA / Sofía Plus / Betowa (oct 2026: 1.44 = 96% y 1.13 = 97% de conversiones).\n- Clasificar Open por «OPEN» en el nombre, no por el prefijo «2.».\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `19f17ba9-ce8b-4477-a0f4-4dd16538f311` — seguimiento UPB, flow 2027-1, Google Search (sesión principal)\n- `c80431b0-b361-470b-90c5-54511ee914b1` — seguimiento mensual de presupuesto\n\n## Pendientes\n- Limpiar tráfico SENA en campañas de concordancia amplia (negativas / cambio de concordancia).\n- Ubicar el flow de septiembre (no está en Drive).\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-10\n- Probado el token de usuario: deep copy del conjunto 2.1 (120253979745950332 → 120254619095100332 «Carrusel - Educación - reinicio», en pausa).\n### 2026-11 (inicio)\n- Meta 1.9.2 dividida en «1.9.9 Diseño_Carrusel_Meta_UPB Virtual» y «1.9.10 MarketingDigital_Carrusel_Meta_UPB Virtual» ($405.776/mes c/u).\n### 2026-10-22\n- Nuevos Search: 1.46 Lic. Lenguas Extranjeras, 1.47 Esp. Educación Profesionales Salud, 1.48 Maestría en Derecho.\n### 2026-10-19\n- Seguimiento HTML y reporte de implementación Meta (anuncios «08-10» / «16-10»)."
  },
  "yajuego": {
   "slug": "yajuego",
   "nombre": "Yajuego",
   "moneda": "COP",
   "portal": "",
   "repo": "",
   "seguimiento": "",
   "hoja_presupuesto": "",
   "fuente_datos": "",
   "flow": "",
   "activo": "si",
   "titulo": "Yajuego",
   "descripcion": "Apuestas (Colombia) · COP",
   "actualizado": "2026-11-10",
   "pendientes": [
    "Confirmar qué campañas de Meta maneja ADCOM.",
    "Corregir `utm_source` en TikTok."
   ],
   "por_verificar": [],
   "restricciones": [],
   "kpis": [
    [
     "Inversión oct",
     "—",
     "$65,35M (Meta 59,2M · TikTok 6,1M)",
     "Plataformas"
    ]
   ],
   "cuentas": [
    [
     "Meta",
     "Yajuego Colombia",
     "act_470340077028096",
     "Sin prefijo ADCOM: puede que no todo el gasto sea de la agencia"
    ],
    [
     "TikTok",
     "ADCOM - Yajuego",
     "7634558409601302548",
     ""
    ]
   ],
   "historico": [
    {
     "fecha": "2026-11-04",
     "items": [
      "Verificado acceso TikTok. Campaña «Conversión | Registros TikTok | CO | Ago-Sep 2026» apagada (Smart+, 14.205 conversiones en oct). Gasto de octubre consultado."
     ]
    }
   ],
   "chats": [
    {
     "id": "4ff35485-871d-4100-8938-a6569cf00659",
     "tema": "acceso TikTok, URL de destino, gasto octubre"
    }
   ],
   "markdown": "# Yajuego\n\n> Apuestas (Colombia) · COP\n> Última actualización: 2026-11-10\n\n## Cuentas en plataformas\n| Plataforma | Cuenta | ID | Notas |\n|---|---|---|---|\n| Meta | Yajuego Colombia | act_470340077028096 | Sin prefijo ADCOM: puede que no todo el gasto sea de la agencia |\n| TikTok | ADCOM - Yajuego | 7634558409601302548 | |\n\n## Repositorios y scripts\n- Sin repo. Script: [scripts/clients/yajuego/diagnostico_yajuego.py](../scripts/clients/yajuego/diagnostico_yajuego.py) (no consulta TikTok).\n\n## Fuentes de datos y hojas\n- **Reales cumplidos**: el bloque de Yajuego lo llena otra persona ([hoja](https://docs.google.com/spreadsheets/d/1touG9kkUfrA3e7YnPiDLutP4w4hIwVsnqBb0Dlh6mCU)).\n- _(completar)_\n\n## Presupuesto y flow\n- Octubre 2026: $65.350.145 (Meta $59.216.964 en 21 campañas; TikTok $6.133.181).\n\n## KPIs\n| KPI | Objetivo | Último real | Fuente |\n|---|---|---|---|\n| Inversión oct | — | $65,35M (Meta 59,2M · TikTok 6,1M) | Plataformas |\n\n## Reglas y cosas a tener en cuenta\n- URL TikTok: `https://sports.yajuego.co/?utm_source=tiktok_thebrand&utm_medium=conversiones&utm_campaign=registros` — usa «thebrand» y no «adcom» en utm_source; revisar antes de reactivar.\n\n## Restricciones del cliente\nLo que el cliente pidió o aprobó y manda sobre cualquier plan o forecast. Revisar antes de mover presupuesto o pausar/activar.\n\n| Desde | Pedido | Cómo se aplica | Confirmado |\n|---|---|---|---|\n| _(sin restricciones registradas)_ | | | |\n\n## Por verificar\nCada punto con fecha AAAA-MM-DD y criterio de éxito. Al cumplirse se borra de aquí y el resultado queda en el «Histórico». El portal marca las vencidas.\n\n_(nada por verificar)_\n\n## Contactos y chats\n- Personas: _(completar)_\n- Sesiones de Claude (transcripts en `~/.claude/projects/-Users-macbookpro-Documents-Meta-Ads-CLI/<id>.jsonl`):\n- `4ff35485-871d-4100-8938-a6569cf00659` — acceso TikTok, URL de destino, gasto octubre\n\n## Pendientes\n- Confirmar qué campañas de Meta maneja ADCOM.\n- Corregir `utm_source` en TikTok.\n\n## Histórico\n<!-- Más reciente arriba. Formato: ### AAAA-MM-DD y viñetas con qué se hizo. En cambios de cuenta usar\n- **Lectura:** números que explican el cambio · - **Cambios:** qué, en qué cuenta, de cuánto a cuánto · - **Por verificar:** qué y cuándo (copiar a «Por verificar») -->\n### 2026-11-04\n- Verificado acceso TikTok. Campaña «Conversión | Registros TikTok | CO | Ago-Sep 2026» apagada (Smart+, 14.205 conversiones en oct). Gasto de octubre consultado."
  }
 }
};
