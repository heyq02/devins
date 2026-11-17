import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
  },
  lint: {
    env: {
      node: true,
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
