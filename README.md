# tsup-sourcemaps-demo

This repository is intended to demo an existing issue in [tsup](https://github.com/egoist/tsup)
related to sourcemap generation.

If the target sourcemap (`dist/index.js.map`) exists, `tsup` will _not_ generate
correct sourcemaps when building/bundling code. It will instead use the `sourcesContent`
from the existing file.

To workaround this issue, you need to use `clean` option in `tsup`.

## Steps to Reproduce

1. Run `npm run build` to build an initial `dist/index.js` and `dist/index.js.map`
2. Make some changes in `index.ts`
3. Run `npm run build` again.
4. Note that `dist/index.js` has the updated changes, but `dist/index.js.map` does NOT have
the correct `sourcesContent`.

The same can be observed with running `npm run watch`.
