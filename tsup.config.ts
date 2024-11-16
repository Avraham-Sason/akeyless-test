import { defineConfig } from "tsup";
import { dependencies } from "./package.json";

export default defineConfig({
    entry: {
        "assets/index": "src/assets/index.tsx",
        "components/index": "src/components/index.tsx",
        "helpers/index": "src/helpers/index.ts",
        "hooks/index": "src/hooks/index.ts",
        "types/index": "src/types/index.ts",
    },
    outDir: "dist",
    format: ["esm"],
    dts: false,
    sourcemap: true,
    splitting: false,
    clean: true,
    external: [...Object.keys(dependencies || {})],
});
