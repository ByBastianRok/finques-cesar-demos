# 📋 Context Handoff — Finques Cèsar web redesign

> **Purpose of this file:** a complete briefing so any assistant (Claude Code desktop, a new
> chat, etc.) — or the user — can pick up this project cold, help prepare the client
> presentation, and later build out the full website once a model is chosen.
> Last updated: 2026-06-23.

---

## 1. The project in one paragraph

The user ("ByBastianRok") is a **vibecoder who builds and sells
websites**. They are pitching a **redesign of the website of Finques Cèsar S.L.** — a 30-year
family-run property-management + real-estate firm in Tarragona (Catalonia, Spain). The goal was
to produce **three distinct demo homepages** to show the company's owner/CEO, who will pick one;
then the user will commission the **full build of the chosen model**. The user is **not very
technical** — explain things simply, avoid jargon, and confirm before risky actions.

## 2. What exists right now

A public GitHub repo with **three structurally different design directions** (not just recolors)
plus a "chooser" landing page.

- **Repo:** https://github.com/ByBastianRok/finques-cesar-demos (public)
- **Live link (send to CEO):** https://bybastianrok.github.io/finques-cesar-demos/
- **Local path:** *(local, varies by machine)*
- **Stack:** plain HTML + CSS + JS, no build step, no dependencies. Each model is self-contained.

### The three models
| Folder | Name | Layout concept | Look | Completeness |
|--------|------|----------------|------|--------------|
| `model-a-classic/` | Model A — Clàssic | Horizontal top nav, centered stacked sections | Warm, green/gold, serif-ish (fonts: Bricolage Grotesque + Public Sans) | **Full 5-page site** (Inici, Serveis, Agència, Qui som, Contacte) |
| `model-b-sidebar/` | Model B — Sidebar | **Fixed vertical left nav rail**, asymmetric magazine layout, services as a numbered list, 1 feature property + mini list | Light, lots of white, elegant serif (Fraunces + Public Sans) | **Full 5-page site** |
| `model-c-panels/` | Model C — Panells | **Full-screen scroll-snap panels** (each section fills the viewport), right-side nav dots | Dark, cinematic, gold accents (Manrope) | **Full 5-page site** |

`index.html` at the repo root = the **chooser page** (wireframe previews of each model).

> **Update 2026-06-23:** all three models are now built out to the same **5 pages** (Inici,
> Serveis, Agència immobiliària, Qui som, Contacte) and each has a **floating colour-palette
> switcher** (`assets/js/theme-switcher.js`). Earlier this doc said B & C were homepage-only —
> that is no longer true; the three are at parity for the pitch.
>
> **Polish pass 2026-06-23:** unified the nav label to "Agència immobiliària" across all models
> (B & C previously said "Immobles"); replaced "Nom Cognom" team placeholders with "(nom
> d'exemple)"; made the "(exemple)" markers more visible (bordered pill). A presentation script
> lives in `GUION-PRESENTACION.md`.

## 3. Real, verified company data (USE EXACTLY — do not invent)

Verified against the live finquescesar.cat on 2026-06-15.

- **Company:** Finques Cèsar S.L. — administració de finques / agència immobiliària, Tarragona.
- **Founded:** 1995. Family business, **second generation**. ~30 years / "three decades".
- **Tagline:** "Finques Cèsar: qüestió de confiança".
- **Real services (all 5 confirmed):** Gestió de comunitats · Gestió de lloguers · Assessoria
  jurídica · Agència immobiliària (compravenda) · Oficina online.
- **Credentials (all real):** Col·legiats API (Agents de la Propietat Immobiliària) ·
  Administradors de Finques · Diplomats en Ciències Empresarials · Graduat Social.
- **Address:** Governador Gonzàlez, 35, entl. 1a, 43001 Tarragona.
- **Phones:** 977 23 75 15 · 977 23 74 66 · (lloguers/vendes) 977 22 03 33.
- **Email:** finquescesar@finquescesar.cat
- **Hours:** Dilluns–Divendres 9:30–13:30; Dijous tarda 16:00–19:00.
- **Language:** Catalan (keep all content in Catalan).

## 4. What is REAL vs ILLUSTRATIVE in the demos

**Real & accurate:** all services, credentials, founding year, family/2nd-gen, address, phones,
email, hours, tagline.

**Illustrative ONLY (labeled "exemple / il·lustratiu" in the UI — must be replaced for the real site):**
- Volume stats: "+250 comunitats", "+900 immobles gestionats".
- Testimonials (Montse R., Jordi F., Carme D.) — invented but realistic.
- Google rating "4,9 / 5".
- Example properties (prices, "Ref. TGN-####", energy ratings, photos from Unsplash).
- Property/team photos are royalty-free Unsplash images.
- WhatsApp / Instagram / LinkedIn links are placeholders (`#` or wa.me sample).

## 5. What is intentionally NOT built (the "real version" backlog)

When a model is chosen and the user commissions the full site, these are still to do:
- Real **property database** + search + individual property pages (currently hardcoded examples).
- **Working contact form** (server submit + validation + anti-spam/CSRF). Currently demo-only.
- Functional **"Oficina Online"** (currently a visual link).
- Real **testimonials/reviews** (with client permission) + live Google reviews.
- Real **team photos & names** (Model A "Qui som" uses placeholders).
- Real **social/WhatsApp** accounts.
- **Technical SEO:** sitemap.xml, robots.txt, 301 redirects from old URLs.
- Build out **inner pages** for whichever of Model B / Model C wins (only Model A has them).

## 6. Design/quality decisions already made (so we stay consistent)

- The user explicitly disliked "generic AI look" — we deliberately avoided the overused
  serif+Inter combo and used characterful type per model. Keep designs feeling **authentic to a
  serious 30-year local firm**, not a startup/SaaS template.
- The real **logo** (green/gold "F·C" blocks + wordmark) is at `*/assets/img/logo.png` in each
  model. Brand colors were sampled from it: **green #008050, gold #F0D060**.
- Accessibility baseline matters: one `<h1>` per page, alt text, keyboard focus,
  `prefers-reduced-motion`. Encoding is UTF-8 (watch out for mojibake like Ã/Â — keep it clean).
- Motion should be **refined, not gimmicky** (animated stat counters, subtle reveals, etc.).

## 7. How to update the live site after changes

```bash
cd /c/Users/13gen/finques-cesar-demos
git add -A
git commit -m "describe the change"
git push
```
GitHub Pages redeploys in ~1 minute. (Repo is public; Pages serves from `main` branch, root.)

## 8. Next steps / what the user will likely ask for

1. **Presentation help** (immediate): the user wants to prepare a pitch to the CEO showing the 3
   models. Likely needs: a short script/talking points (in Catalan or Spanish), maybe a simple
   slide deck or a one-pager explaining the 3 directions and the live link, and how to demo it.
2. **After the CEO chooses** (later): build the chosen model into a **complete site** — replicate
   Model A's 5-page structure in the winning design, then start working through the "real version"
   backlog in §5.

## 9. Working-style notes for the assistant

- User is non-technical and sells these sites — explain simply, use analogies, confirm before
  destructive/outward actions. They appreciate honesty about what's real vs placeholder.
- They communicate casually and in a mix of English/Spanish; content stays in **Catalan**.
- Keep three safe copies in mind (local, GitHub, live) — reassure them work isn't lost.
- Don't touch this folder from unrelated chats unless asked.
