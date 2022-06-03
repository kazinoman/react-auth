// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import fs from "fs/promises";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     // hmr: {
//     //   overlay: true,
//     //   port: 1000,
//     // },
//   },
//   esbuild: {
//     loader: "jsx",
//     include: /src\/.*\.jsx?$/,
//     // loader: "tsx",
//     // include: /src\/.*\.[tj]sx?$/,
//     exclude: [],
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       plugins: [
//         {
//           name: "load-js-files-as-jsx",
//           setup(build) {
//             build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
//               loader: "jsx",
//               contents: await fs.readFile(args.path, "utf8"),
//             }));
//           },
//         },
//       ],
//     },
//   },
// });

import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import fs from "fs/promises";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200,
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  //
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              };
            });
          },
        },
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              // i modified the regex here
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
  // plugins: [reactRefresh()],
});
