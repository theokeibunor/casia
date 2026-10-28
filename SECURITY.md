# Security

**Node floor:** ≥ 22.23.4 (see `.nvmrc`) for local CSS builds.

**Patch SLA:** critical ≤ 24h · high ≤ 7d (devDependencies that affect the build).

**Automation:** Dependabot + CI `npm audit` + Tailwind build.

Static GitHub Pages site — no Railway secrets. Rotate deploy tokens if compromised.
