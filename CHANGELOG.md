# Changelog

All notable changes to Karri DS Sandbox are documented here.

## [0.1.0] - 2026-04-20

### Added
- Forked from [igoribeiro2026/design-system-base](https://github.com/igoribeiro2026/design-system-base)
- Created new GitHub repository `karri-ds-sandbox` under `igoribeiro2026`
- Added `tokens/figma-variables.json` — structured token schema synced with [Karri DS Sandbox Figma file](https://www.figma.com/design/exW1CSY9rGEY4qzthBOFVM/Karri-DS-Sandbox?node-id=1-1183)
- Added `CHANGELOG.md`

### Changed
- **Font family**: Replaced Inter with **DM Sans** across `layout.tsx` and `theme.css`
  - `--font-body` and `--font-display` now use `var(--font-dm-sans, "DM Sans")`
  - Font loaded via `next/font/google` (`DM_Sans`) with optical sizing axis
- **Metadata**: Updated page title to "Karri DS Sandbox" and description to reflect the new project
- **README.md**: Rewritten to describe Karri DS Sandbox, link to Figma, and document the token update workflow

### Pending
- Color palette (`--color-brand-*`) needs to be updated with exact values from Figma once Figma MCP variable extraction is available (see `tokens/figma-variables.json` TODO entries)
