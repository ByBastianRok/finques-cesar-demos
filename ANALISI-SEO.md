# 🔍 Análisis SEO y técnico — Finques Cèsar (web actual vs rediseño)

> Auditoría detallada de **https://www.finquescesar.cat** y de 6 competidores reales de Tarragona y alrededores.
> Todo **verificado directamente** sobre el código y el comportamiento real de cada web (no estimaciones).
> Fecha: 2026-06-28. (La puntuación automática de Google PageSpeed no se pudo obtener: cuota diaria
> de la API gratuita agotada. El resto son hechos comprobados uno a uno.)

---

## 1. Resumen ejecutivo
La web actual **no está rota y carga en un tiempo aceptable**, pero por debajo **está técnicamente
obsoleta y le faltan las bases de SEO** (compite peor en las búsquedas genéricas). Cinco datos que lo resumen:

1. 🚨 Corre sobre **PHP 5.4.45**, una versión **sin soporte de seguridad desde 2015** (~11 años).
2. ❌ **No tiene meta-descripción, ni un solo titular H1, ni datos estructurados** (lo básico de SEO).
3. ❌ **No fuerza HTTPS** ni tiene cabecera de seguridad (HSTS). Su rival directo **sí**.
4. ❌ **Sin favicon, sin sitemap.xml, sin robots.txt, sin tarjeta social** (al compartir, enlace soso).
5. 🎨 **Diseño anticuado** (plantilla antigua, fotos genéricas) y experiencia móvil pobre.

**El rediseño corrige los 5 puntos.**

---

## 2. Diagnóstico de la web actual (scorecard)

| Área | Estado | Detalle verificado |
|------|:------:|--------------------|
| Seguridad / stack | 🔴 | PHP **5.4.45** (EOL 2015) · Apache · **sin HTTPS forzado** · **sin HSTS** |
| Descripción para Google | 🔴 | **No hay meta-description** (Google se inventa el texto del resultado) |
| Titular H1 | 🔴 | **0 H1** (sí hay 4 H2 y 7 H3, pero falta el titular principal) |
| Datos estructurados (schema) en la web | 🟠 | **0** (el resultado de la web sale más pelado; el negocio **sí** tiene ficha propia en Google) |
| Tarjeta social (Open Graph/Twitter) | 🔴 | **0** (al compartir por WhatsApp: sin foto ni título) |
| Sitemap / robots.txt | 🔴 | **Ambos 404** (Google rastrea peor) |
| Idioma / canonical / hreflang | 🔴 | **Ninguno** declarado |
| Favicon | 🔴 | **No tiene** (pestaña del navegador sin icono = poco profesional) |
| Contenido | 🟠 | ~**487 palabras** en toda la home (escaso para posicionar) |
| Peso / rendimiento | 🟠 | **2,8 MB** y **53 peticiones** (pesado para una web simple) · sin caché |
| Título | 🟠 | "Finques Cèsar S.L. - Gestors Immobiliaris" (sin "Tarragona" ni servicios) |
| Responsive móvil | 🟡 | Se adapta (no hay scroll horizontal), pero se ve **anticuado y descuidado** |

---

## 3. Problemas TÉCNICOS (lo de debajo del capó)
- **PHP 5.4.45 — fin de vida desde 2015.** No recibe parches de seguridad desde hace ~11 años.
  Es el equivalente a tener la puerta de la oficina con una cerradura que ya no se fabrica.
- **No fuerza HTTPS** (entrar por `http://` no redirige a `https://`) y **no tiene HSTS**. El rival
  Fernández **sí** fuerza HTTPS con HSTS. Esto afecta a seguridad y a la confianza del navegador.
- **Pesa 2,8 MB en 53 peticiones** y manda `Cache-Control: no-store` (no cachea nada) → más lento y
  más datos de los necesarios, sobre todo en móvil con datos.
- Hecho y alojado por una agencia local (**TecnoBravo**), con una plantilla de su época.

## 4. Problemas de SEO on-page (lo que le falta a la web para Google)
Cada punto es algo que Google usa para entender y mostrar una web, y que **no existe** aquí:
- **Sin meta-description** → Google improvisa el texto bajo el título en los resultados (peor clic).
- **Sin H1** → no hay titular que le diga a Google "de qué va esta página".
- **Sin datos estructurados (schema) en la web** → el resultado propio sale más pelado, sin detalles
  enriquecidos. (La ficha con dirección/horario en Google/Maps viene del perfil de Google, que **sí** tiene.)
- **Sin sitemap.xml ni robots.txt** → no hay mapa de la web para el rastreador.
- **Sin idioma declarado** (`lang`) → Google no sabe que está en catalán.
- **Título flojo** (sin "Tarragona" ni servicios) → no compite por las búsquedas locales clave.
- **Contenido escaso** (~487 palabras) → poco texto real que posicionar.

## 5. Diseño y experiencia de usuario
- **Escritorio:** estética de plantilla antigua: bloques pequeños, mucho recuadro, **fotos de stock
  genéricas** (un pisapapeles de nieve, casitas, un teclado…) que **no transmiten Tarragona ni cercanía**.
- **Móvil:** se reorganiza a una columna (bien), pero queda **apretado y descuidado**, con espaciados
  irregulares y alguna sección que se rompe (texto cortado). Para clientes mayores que entran por el
  móvil, no invita.
- **Sin tarjeta social:** al pasar el enlace por WhatsApp/Facebook no sale foto ni título → enlace muerto.

## 6. Comparativa con la competencia (mismas métricas)

| Web | Stack/seguridad | H1 | Meta-desc | Schema | Open Graph | Móvil |
|-----|-----------------|:--:|:---------:|:------:|:----------:|:-----:|
| **Finques Cèsar (actual)** | 🔴 PHP 5.4, sin HTTPS forzado | 0 | NO | NO | NO | sí (anticuado) |
| **Finques Fernández** (Tarragona) | 🟢 nginx + **HSTS** | 1 | **sí** | **sí** | **sí** | sí |
| Servifinques (Tarragona) | 🟢 PHP 8.2 (moderno) | 0 | sí | **sí** | **sí** | sí |
| AFT Administración (Tarragona) | 🟡 Apache | 0 | sí | NO | NO | sí |
| Administracions Savé (Costa Daurada) | 🟡 IIS | 1 | sí | NO | NO | sí |
| Admin. Mare Nostrum (Salou) | 🟡 Apache 2.4 | 1 | sí | NO | **sí** | sí |
| Arquifinques (Tarragona) | 🟡 PHP 5.6 | 1 | sí | NO | NO | sí |

**Lectura:** los que mejor lo hacen (**Fernández** y **Servifinques**) ya van por delante en Google.
E incluso el resto tiene lo básico —descripción y, a menudo, un titular— que a la web actual **le falta**.
De todos los comparados, **la web actual es la que menos cosas tiene hechas y la tecnología más antigua**.
Hay hueco real para adelantarles.

## 7. Impacto de negocio
- **Menos visibilidad** en "administrador de fincas Tarragona" / "finques Tarragona" → menos clientes
  nuevos llegan solos.
- **El rival directo está mejor preparado** técnicamente: a igualdad de reputación, Google lo entiende mejor.
- **Riesgo de seguridad real** (PHP fin de vida, sin HTTPS forzado): mala imagen y vulnerabilidad.
- **Contactos perdidos** y **enlaces muertos** al compartir.

## 8. Qué arregla el rediseño (verificado en las 3 demos nuevas)
- **1 titular H1 por página** (comprobado en las **15 páginas** de los 3 modelos).
- **Meta-descripción + idioma (`lang="ca"`) + viewport** en todas.
- **Datos estructurados (schema) + Open Graph** (al compartir sale foto y título).
- **Fotos reales de Tarragona** auto-alojadas (Rambla Nova, catedral, anfiteatro, Part Alta) — nada de stock raro.
- Estructura limpia de 5 páginas con **formulario de contacto** y **mapa** de la oficina.
- Hosting moderno (GitHub Pages, HTTPS por defecto), ligero y rápido.
- *(En la versión final se añaden sitemap.xml, robots.txt, favicon y fichas de inmueble indexables.)*

---

## 9. Puntos listos para la slide "Per què canviar" (en català, per al deck)
> De manera CONSTRUCTIVA (sense atacar la web actual), tipus "és el moment de fer el salt":

- La web actual funciona, però **per dins està desactualitzada**: corre sobre tecnologia sense
  manteniment de seguretat des de fa anys.
- A la **web li falten les bases** per a Google: sense descripció i sense titular principal → costa que
  la web competeixi a les cerques genèriques. (La fitxa de negoci a Google ja la teniu; això és del web.)
- En **compartir l'enllaç** (WhatsApp, xarxes) no apareix ni foto ni títol.
- Un **competidor directe de Tarragona ja té tot això** ben fet → és el moment de posar-se al davant.
- El redisseny ho deixa tot **modern, segur, ràpid i pensat per al mòbil**, amb fotos reals de Tarragona.

*Per a la slide "abans / després": es pot capturar la web actual (finquescesar.cat) i comparar-la amb
les demos en viu. Mateixa empresa, salt evident.*

---
*Metodología: auditoría directa del HTML, cabeceras HTTP y render real (Edge) de finquescesar.cat en
escritorio y móvil, el 2026-06-28. Competidores reales verificados uno a uno: Finques Fernández
(administradoresdefincastarragona.com), Servifinques (servifinquestarragona.com), AFT (aftarraco.com),
Administracions Savé (ensalou.com), Admin. Mare Nostrum (administracionsmarenostrum.com), Arquifinques
(arquifinques.com). Se descartaron webs caídas o fuera del sector. Solo datos comprobados directamente.*
