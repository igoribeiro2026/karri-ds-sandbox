# Karri DS Sandbox

Customized design system based on [design-system-base](https://github.com/igoribeiro2026/design-system-base), synced with the [Karri DS Sandbox Figma file](https://www.figma.com/design/exW1CSY9rGEY4qzthBOFVM/Karri-DS-Sandbox?node-id=1-1183).

Built with React 19, Tailwind CSS v4.1, TypeScript, and React Aria Components.

## Stack

- **React 19** with TypeScript
- **Tailwind CSS v4.1** for styling
- **React Aria Components** for accessibility and behavior
- **DM Sans** as the primary font family (via `next/font/google`)
- **Next.js** as the framework

## Figma

**Figma file:** https://www.figma.com/design/exW1CSY9rGEY4qzthBOFVM/Karri-DS-Sandbox?node-id=1-1183

Design tokens are stored in `tokens/figma-variables.json`. Currently this file is a structured placeholder — see the **Token Update** section below to regenerate from Figma.

## Token Update Instructions

To re-extract design tokens from the Figma file and regenerate the token config:

1. Open the Figma file in the **Figma desktop app** (not the browser):
   `https://www.figma.com/design/exW1CSY9rGEY4qzthBOFVM/Karri-DS-Sandbox?node-id=1-1183`

2. Select a layer or the variables frame in the file

3. In Claude Code, run the Figma MCP tool:
   ```
   mcp__figma__get_variable_defs
     fileKey: exW1CSY9rGEY4qzthBOFVM
     nodeId:  1:1183
   ```

4. Update `tokens/figma-variables.json` with the extracted values (replacing all `"TODO"` entries)

5. Apply the token changes to `src/styles/theme.css`:
   - Update `--color-brand-*` variables with the new brand palette
   - Update `--color-gray-*` if the gray scale differs
   - Update any semantic color overrides that reference the new primitives

6. Update `--font-body` / `--font-display` in `theme.css` if the font family changes

7. Run `npm run build` to verify no breaking changes

## Development

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm start       # Start production server
```

## Structure

```
src/
├── components/
│   ├── base/          # Core UI components (Button, Input, Select, etc.)
│   ├── application/   # Complex components (tables, modals, pagination)
│   ├── foundations/   # Design token foundations
│   └── marketing/     # Marketing sections
├── styles/
│   ├── globals.css    # Global styles + Tailwind imports
│   ├── theme.css      # CSS custom properties (colors, typography, spacing)
│   └── typography.css # Prose / typography utilities
├── app/
│   └── layout.tsx     # Root layout — font loading (DM Sans)
tokens/
└── figma-variables.json  # Extracted Figma design tokens (source of truth)
```
