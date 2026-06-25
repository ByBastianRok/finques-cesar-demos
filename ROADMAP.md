# 🗺️ ROADMAP — Web Finques Cèsar (hasta presentar la demo)

> Plan por fases hasta enseñar las 3 demos al cliente y que **elija una**.
> Cuando elija → **roadmap 2** (construir el modelo elegido completo + subirlo a internet).
> Relacionados: `CONTEXT-HANDOFF.md` (briefing), `GUION-PRESENTACION.md` (guion de la reunión).

**Estado:** casi listo para presentar. Falta **QA final** (sobre todo móvil) + ensayar.

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

## ⏳ FASE 2 — Pulido final
- [x] Arreglar lo que salga de la Fase 1 → **nada que arreglar** (0 bugs). ✅
- [x] (Fiabilidad) **Auto-alojadas las 6 fotos más usadas** (calle Part Alta · 3 propiedades de portada · catedral héroe B · anfiteatro héroe C). 12 HTML a rutas locales, verificado en vivo. **Nunca fallarán** en la reunión. ✅
  - Quedan en Unsplash las menos vistas (equipo, extras de agencia, fotos de servicios) — bajo riesgo; auto-alojar también si se quiere 100%.
- [ ] (Opcional) Algún detalle anti-slop extra si procede (skill `anti-slop-audit`).

## ⏳ FASE 3 — Preparar la presentación
- [ ] Repasar el `GUION-PRESENTACION.md` (qué decir, en qué orden).
- [ ] Probar el enlace en vivo en **móvil Y portátil**.
- [ ] Orden recomendado: empujar **Model A** (encaja con el brief "familiar / gente mayor"), enseñar B y C como alternativas más modernas.
- [ ] Tener claro **precio y plazo** antes de la reunión.

## ⏳ FASE 4 — Presentar al cliente
- [ ] Enseñar las 3 demos (con su madre, que trabaja para el cliente).
- [ ] Que el cliente **elija un modelo**.
- [ ] Apuntar el feedback del cliente.

---

## ⏭️ DESPUÉS — Roadmap 2 (cuando elija modelo)
Construir el modelo elegido **completo** y subirlo a internet con su dominio:
base de datos de inmuebles + buscador · formulario funcional · oficina online real ·
fotos reales (inmuebles, oficina, equipo) · SEO técnico. Backlog detallado en `CONTEXT-HANDOFF.md §5`.
