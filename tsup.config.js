import { defineConfig } from "tsup"

export default defineConfig((options) => {

    return {
        entry: "index.ts",
        platform: "browser",
        minify: false,
        sourcemap: true,
        target: "es5",
    }
})
