module.exports = () => {
  return {
    entryPoints: ["src/app.tsx"],
    bundle: true,
    minify: true,
    format: "cjs",
    sourcemap: true,
    external: ["react", "react-dom"],
    watch: {
      pattern: ["./functions/*.ts"],
      ignore: [".serverless/**/*", ".build"],
    },
  };
};
