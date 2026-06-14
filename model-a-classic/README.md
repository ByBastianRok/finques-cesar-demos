# Finques Cèsar — Demo de redisseny

Demo visual i estàtica del nou lloc web de **Finques Cèsar S.L.** (administració de
finques, lloguers, assessoria jurídica i agència immobiliària a Tarragona, des de 1995).

Aquesta carpeta és una **maqueta de presentació** construïda de zero per ensenyar com
podria ser el web renovat. **No és el producte final.**

---

## Com obrir-la

No cal instal·lar res ni cap servidor. Fes doble clic a **`index.html`** i s'obrirà al
navegador. Des d'allà pots navegar per totes les pàgines amb el menú de dalt.

> Les imatges i el mapa es carreguen d'internet, així que cal connexió per veure-les bé.

---

## Pàgines incloses

| Pàgina | Fitxer | Contingut |
|--------|--------|-----------|
| Inici | `index.html` | Hero, proposta de valor, serveis, immobles destacats, CTA |
| Serveis | `serveis.html` | Comunitats · Lloguers · Assessoria jurídica |
| Agència immobiliària | `agencia.html` | Graella d'immobles amb filtres visuals |
| Qui som | `qui-som.html` | Història des de 1995, valors, equip |
| Contacte | `contacte.html` | Dades reals, horari, mapa i formulari (maqueta) |

Estil compartit a `assets/css/styles.css` i interaccions a `assets/js/main.js`.

---

## Què SÍ que fa aquesta demo

- ✅ Disseny i maquetació 100% nous, moderns i responsius (mòbil, tauleta, escriptori).
- ✅ Navegació real entre totes les pàgines.
- ✅ **Dades de contacte reals** (adreça, telèfons, correu, horari).
- ✅ Microinteraccions sòbries: hover a les targetes, aparició escalonada en fer scroll, menú mòbil, FAQ desplegable.
- ✅ **Prova social**: secció de testimonis i barra de credencials (API, Administradors de Finques, 30 anys).
- ✅ **Fitxes d'immoble enriquides**: referència, certificat energètic, m²/habitacions/banys amb icones i botó "Consultar".
- ✅ **FAQ** que respon les objeccions habituals del propietari (canvi d'administrador, comptes, honoraris…).
- ✅ **Contacte ràpid**: botó de WhatsApp i validació bàsica del formulari (demo).
- ✅ Millores de SEO visibles respecte de l'original (vegeu més avall).

> **Nota sobre les dades il·lustratives:** per ensenyar el potencial, la demo inclou xifres
> (p. ex. "+250 comunitats"), testimonis i valoracions de Google **d'exemple**, sempre marcats
> amb una nota visible. A la versió final s'hi posaran les dades reals de Finques Cèsar.

## Què NO fa (queda per a la versió final)

> Important per evitar malentesos amb el client. Això és una demo de presentació.

- ❌ **Sense "Oficina Online" funcional** — el botó és visual i porta a la pàgina de contacte.
- ❌ **Sense backend ni base de dades** — els immobles són exemples; no hi ha cerca real ni fitxa per immoble.
- ❌ **El formulari de contacte no envia res** — valida i mostra un avís de demostració. Falta connectar
  l'enviament real + validació de servidor + anti-spam + protecció CSRF.
- ❌ **Dades d'immobles inventades** (preus, metres, ubicacions, referències, certificats energètics) — només per ensenyar el disseny.
- ❌ **Testimonis, xifres i valoracions de Google il·lustratives** — caldrà substituir-les per reals (amb permís dels clients).
- ❌ **Xarxes socials i WhatsApp** apunten a enllaços de mostra — falten els comptes reals.
- ❌ **SEO tècnic complet pendent**: sitemap.xml dinàmic, robots.txt, redireccions 301 de les
  URL antigues, i fotografia/textos definitius.

---

## Millores de SEO ja demostrades

L'anàlisi de la web original detectava: un sol `<title>` per a tot el lloc, capçalera
duplicada 3 vegades, cap dada estructurada i fitxes d'immoble sense disseny. Aquesta demo
corregeix de manera visible:

- **`<title>` i `<meta description>` únics** a cada pàgina, amb paraula clau local.
- **HTML semàntic**: un sol `<h1>` per pàgina i estructura `header` / `nav` / `main` / `footer` correcta.
- **Capçalera i peu únics** reutilitzats (s'acaba la triplicació de l'original).
- **Imatges amb `alt`** descriptiu.
- **Open Graph** per a previsualitzacions a WhatsApp i xarxes.
- **Dades estructurades (JSON-LD `RealEstateAgent`)** a la pàgina d'inici — un detalle que
  els competidors no tenen.
- **Accessibilitat base**: contrast correcte, focus visible per a teclat, `prefers-reduced-motion`.

---

## Tecnologia

HTML + CSS + JavaScript *vanilla*, sense dependències ni pas de compilació. S'escull per
màxima senzillesa: fitxers estàtics que es poden servir des de qualsevol allotjament i que
el client pot obrir sense eines. Tipografies via Google Fonts (Fraunces + Inter) i imatges
d'Unsplash (lliures de drets) com a marcador de posició.

---

*Demo preparada per a la presentació al client. Els passos següents (versió real) es poden
pressupostar a part: gestor d'immobles amb base de dades, oficina online, formulari
funcional segur i SEO tècnic complet.*
