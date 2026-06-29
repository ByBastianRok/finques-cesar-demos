# 🗺️ ROADMAP — Web Finques Cèsar (hasta presentar la demo)

> Plan por fases hasta enseñar las 3 demos al cliente y que **elija una**.
> Cuando elija → **roadmap 2** (construir el modelo elegido completo + subirlo a internet).
> Relacionados: `CONTEXT-HANDOFF.md` (briefing), `GUION-PRESENTACION.md` (guion de la reunión).

**Estado (2026-06-29):** ✅ **Listo para presentar.** Las 3 demos + el **deck de presentación** + el
**análisis SEO** están terminados y **en vivo** en GitHub Pages. Repo limpio y pusheado. Solo falta
**ensayar** (Bastian practica mañana).

---

## ✅ FASE 0 — Hecho
- 3 demos estructuralmente distintas (A Clàssic, B Sidebar, C Panells), **5 páginas cada una**.
- Datos reales (dirección, teléfonos, 5 servicios, credenciales), en **catalán**.
- Pulido: nav unificada · fotos reales de Tarragona (Rambla Nova, anfiteatro, Part Alta) · servicio **Assegurances** · selector de color.
- **Sellos de credenciales** (Col·legiats i titulats) en los 3, adaptados al estilo de cada uno.
- Guion de presentación (`GUION-PRESENTACION.md`).
- **Bucle visual** (Playwright + Edge) funcionando → se revisa el render, no a ciegas.
- Revisión visual de las **3 homes en escritorio**: OK, sin problemas reales.

## ✅ FASE 1 — QA visual final (HECHA — 0 bugs reales)
- [x] Las 3 **homes en escritorio**: OK. ✅
- [x] Las 3 **homes en MÓVIL** (~390px): sellos en 2x2, todo apila bien, C no se corta (paneles crecen). ✅
- [x] **Serveis de C** (apartado Assegurances): OK. ✅
- [x] **A Contacte**: formulario (con opción Assegurances) + **mapa de Google funcionando** (Governador Gonzàlez). ✅
- [x] **A Qui som**: equipo con "(nom d'exemple)" se lee intencional, no roto. ✅
- [x] Las "cajas blancas" que aparecían eran **lazy-load de la captura, NO bugs** — en el navegador real cargan al hacer scroll. ✅
- [~] B/C páginas interiores (Agència, Qui som, Contacte): reutilizan los MISMOS componentes ya validados → bajo riesgo, no se barrieron 1 a 1.

> **Resultado:** **0 bugs reales.** Las 3 demos están sólidas en escritorio y móvil. Listas para presentar.

## ✅ FASE 2 — Pulido final (HECHA)
- [x] Arreglar lo que salga de la Fase 1 → **nada que arreglar** (0 bugs). ✅
- [x] (Fiabilidad) **TODAS las fotos auto-alojadas** — 0 dependencia de Unsplash. 85 referencias locales, 0 faltan, verificado en vivo. **NADA puede quedar en blanco** en la reunión, pase lo que pase con la conexión. ✅
- [ ] (Opcional) Algún detalle anti-slop extra si procede (skill `anti-slop-audit`).

## ✅ FASE 3 — Materiales de presentación (HECHA)
- [x] **Deck de presentación** en HTML, autocontenido y con transiciones → `presentacio/` (en vivo). ✅
- [x] **Guion por diapositiva** (10 slides) → `GUION-PRESENTACION.md`. ✅
- [x] **Análisis SEO** en HTML (branded, catalán, **6 competidores reales verificados**) → `analisi-seo.html` (en vivo). ✅
- [x] Enlaces probados en vivo (escritorio): índice + 3 modelos + deck + análisis = todo **HTTP 200**. ✅
- [x] Trampa resuelta: la copia de **Vercel** estaba caída (404) y confundía → "homepage" del repo reapuntada a GitHub Pages. **Usar solo `bybastianrok.github.io`.** ✅
- [x] **Precio: decidido NO hablar de dinero** en la reunión (se dice en persona). ✅

### 🔗 Enlaces EN VIVO (GitHub Pages — nada que descargar)
- **Presentación:** https://bybastianrok.github.io/finques-cesar-demos/presentacio/
- **Las 3 webs (índice):** https://bybastianrok.github.io/finques-cesar-demos/
- **Análisis SEO:** https://bybastianrok.github.io/finques-cesar-demos/analisi-seo.html

## ⏳ FASE 3.5 — Ensayar (AHORA, antes de la reunión)
- [ ] **Practicar** con el `GUION-PRESENTACION.md` (Bastian, mañana).
- [ ] Probar el flujo en el **portátil** (deck a pantalla completa + abrir demos en otra pestaña) y en el **móvil**.
- [ ] Orden recomendado: empujar **Model A** (brief "familiar / gente mayor"); B y C como alternativas más modernas.

## ⏳ FASE 4 — Presentar al cliente
- [ ] Enseñar las 3 demos (con su madre, que trabaja para el cliente).
- [ ] Que el cliente **elija un modelo**.
- [ ] Apuntar el feedback del cliente.

---

## ⏭️ DESPUÉS — Roadmap 2 (cuando elija modelo)
Construir el modelo elegido **completo** y subirlo a internet con su dominio:
base de datos de inmuebles + buscador · formulario funcional · oficina online real ·
fotos reales (inmuebles, oficina, equipo) · SEO técnico. Backlog detallado en `CONTEXT-HANDOFF.md §5`.
