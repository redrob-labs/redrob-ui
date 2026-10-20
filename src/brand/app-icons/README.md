# App icons

The Redrob app icons, 2026 ("Doorway light"): the group icon, the launch seven and the four creative
apps. Each folder holds the delivery's five `master/` SVGs, copied byte for byte. They are never
redrawn, re-exported or optimized here: a change comes as a new delivery.

| Folder | Product | Approved |
|---|---|---|
| `redrob/` | Redrob (the group icon) | yes |
| `redrob-chat/` | Redrob Chat | yes |
| `redrob-cowork/` | Redrob Cowork | yes |
| `redrob-browser/` | Redrob Browser | yes |
| `redrob-console/` | Redrob Console | yes |
| `redrob-office/` | Redrob Office | yes |
| `redrob-design/` | Redrob Design | yes |
| `redrob-code/` | Redrob Code | yes |
| `redrob-film/` | Redrob Film | not yet |
| `redrob-shape/` | Redrob Shape | not yet |
| `redrob-cad/` | Redrob CAD | not yet |
| `redrob-canvas/` | Redrob Canvas | not yet |

"Not yet" is the delivery's own status: the creative four are not yet approved in the design system.
Their apps can use them; keep them off a shared, cross-product surface until they are approved.

## Files

Named `redrob-<product>-<variant>.svg`, all on a 1024 canvas.

| Variant | Use |
|---|---|
| `-icon` | Square tile, unmasked. A platform applies its own mask. |
| `-icon-dark` | The same, for a dark appearance. |
| `-icon-web` | Masked to the superellipse, transparent corners. Web, marketing and product UI. |
| `-icon-web-dark` | The same, dark. |
| `-symbol` | The white symbol alone on transparent, for a mono layer. |

Tile: radial gradient #2E7EFF > #2B52FF (Redrob Blue) > #2746EE, lit from the top left. Dark: #222A38
> #191C21 > #14161A tile, symbol #87BAFF > #507FFF. Theme color #2B52FF. The tile is the same for every
product; it does not follow the per-product colour ramps in `tokens.css`.

Use them through `<img>` or CSS, not pasted inline: every file defines the same internal ids (`mc`,
`t`), so two inlined in one document draw the second with the first one's mask.

## Not here

The platform packaging from the same delivery - `apple/` (appiconset, icns, Icon Composer layers),
`android/` (adaptive mipmaps, Play Store), `windows/` (ico, MSIX) and `web/` (favicons, manifest
PNGs) - is about 38 MB of binaries per delivery. It belongs in the repository of the app being
packaged, taken from that product's folder in the delivery.

## Updating

1. Copy the new `master/*.svg` over the folder's files, keeping the names.
2. `yarn app-icons` regenerates `src/brand/appIcons.ts` and `manifest.json`.
3. `yarn app-icons:check` must pass. It refuses a missing or extra file, an SVG that is not a
   self-contained 1024 drawing, and a table that does not match the files.

A new product also needs an entry in `PRODUCTS` in `tools/generate/app-icons.js`: an unknown folder
is an error, so nothing joins the set by accident.
