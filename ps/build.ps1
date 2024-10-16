tsup src/assets/index.ts --format "esm,cjs" --dts --out-dir dist/assets
tsup src/components/index.ts --format "esm,cjs" --dts --out-dir dist/components
tsup src/helpers/index.ts --format "esm,cjs" --dts --out-dir dist/helpers
tsup src/hooks/index.ts --format "esm,cjs" --dts --out-dir dist/hooks
tsup src/types/index.ts --format "esm,cjs" --dts --out-dir dist/types
tsup src/index.ts --format "esm,cjs" --dts
