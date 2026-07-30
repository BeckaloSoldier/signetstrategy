## Signet Strategy — brand site rebuild

Convert the existing portfolio template into a black / white / brushed-gold consulting site for Signet Strategy, with a bold home page and three placeholder-content tabs.

### Brand system
- **Colors** (semantic tokens in `index.css` + `tailwind.config.ts`):
  - Background: near-black `#0A0A0A`, surface `#141312`
  - Foreground: warm white `#F5F2EC`
  - Accent "brushed gold": base `#C9A24C`, light `#E8CE8F`, deep `#8C6D2F`
  - A `--gradient-gold` (light → base → deep) for hairlines, rules, and text accents to read as brushed metal rather than flat yellow.
- **Type**: Cormorant Garamond (Google Fonts) for display/headings. Amoresa is not on Google Fonts — the site will use a refined script fallback for the logotype-style accents until you upload the Amoresa font file, then I swap it in as a self-hosted `@font-face`. Body/UI text: a quiet sans for legibility.
- **Logo**: your uploaded Signet Strategy mark registered as a project asset and used in the header, footer, and home hero.

### Home page (bold + striking)
- Full-viewport hero on black: the gold signet mark, "SIGNET STRATEGY" in large letterspaced Cormorant, a one-line positioning statement ("Luxury product branding and showroom positioning"), and a gold-outline CTA to Contact.
- Thin gold rule dividers; subtle fade-up entrance motion; no card clutter.
- Second section: a three-item capabilities row (Brand Positioning / Product Storytelling / Showroom Experience) with gold numerals.
- Third section: **headshot feature band** — a large portrait placeholder in a gold hairline frame, offset against a short "meet the strategist" blurb, with a smaller secondary portrait placeholder overlapping for depth. Placeholders are labeled image slots you swap by dropping in files.
- Footer with mark, email placeholder, and copyright.

### Navigation
Header with logo left and four links: Home, Portfolio, About Me, Contact Us. Gold underline on the active/hovered link. Mobile: full-screen gold-on-black menu.

### The three pages (placeholder content, styled)
- **Portfolio** — page title + gold rule, then a grid of 6 case-study placeholder cards (image slot, client name, discipline tag, one-line result). Structure ready for real work.
- **About Me** — large headshot placeholder in a gold frame beside a placeholder bio, then placeholder sections for experience timeline and expertise tags.
- **Contact Us** — split layout: placeholder contact details (email, phone, location, LinkedIn) on gold-ruled rows, plus a styled inquiry form (name, company, project type, message) that is visual-only for now.

### Technical notes
- Removes the current Jordan Studio content, demo project data, and unused art assets.
- All colors go through semantic tokens — no hardcoded color classes — so the gold stays consistent everywhere.
- Head metadata updated: title, description, OG/Twitter tags for Signet Strategy.
- Placeholder images are neutral gold-hairline frames with a clear label, sized at the correct aspect ratios so your headshots drop in without layout shift.

### Follow-ups after this build
Upload the Amoresa font file and your headshots, and give me the real portfolio, bio, and contact copy.
