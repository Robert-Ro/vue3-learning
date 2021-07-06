import { Configuration } from "webpack";
import { resolve } from "path";
import {} from "fs";
import { VueLoaderPlugin } from "vue-loader";

const config: Configuration = {
  entry: resolve(__dirname, "src/main.ts"),
  output: {
    filename: "bundle.js",
    clean: true,
    path: resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.tsx$/,
        loader: "babel-loader",
        // use:['babel-loader', 'ts-loader'],
        // options: { appendTsxSuffixTo: [/TSX\.vue$/] },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".vue"],
  },
  plugins: [new VueLoaderPlugin()],
};

export default config;
