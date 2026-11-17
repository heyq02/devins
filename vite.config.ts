import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: [".agents"],
    sortImports: true,
    sortPackageJson: true,
    sortTailwindcss: true,
  },
  lint: {
    ignorePatterns: [".agents"],
    env: {
      node: true,
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  run: {
    tasks: {
      build: "nest build",
      deploy: "nest deploy",
      start: "nest start",
      "start:dev": "nest start --watch",
      "start:debug": "nest start --debug --watch",
      "start:prod": "node dist/main",
      test: "vitest run",
      "test:watch": "vitest",
      "test:cov": "vitest run --coverage",
      "test:debug": "vitest --inspect-brk --no-file-parallelism",
      "test:e2e": "vitest run --config ./vitest.config.e2e.ts",
    },
  },
});
