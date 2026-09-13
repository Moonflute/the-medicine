import {omitSourceOnlyModels} from './source-only-models.mjs';
import {writeAssetRevisions} from './write-asset-revisions.mjs';
writeAssetRevisions();
import {defineConfig} from 'vite';
export default defineConfig({plugins:[omitSourceOnlyModels()],base:'./',publicDir:'static',build:{outDir:'../../apps/medicine-web/public/organ-atlas',emptyOutDir:true,rollupOptions:{input:{atlas:'index.html',preview:'preview.html'},output:{manualChunks:{three:['three']}}}}});
