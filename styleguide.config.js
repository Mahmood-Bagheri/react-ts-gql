const path = require("path");

module.exports = {
    require: [path.join(__dirname, "src/assets/styles/main.css")],
    components: "src/components/**/[A-Z]*.tsx",
    ignore: [
        "**/__tests__/**",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/*.spec.{js,jsx,ts,tsx}",
        "**/*.d.ts",
        "**/styles.{js,jsx,ts,tsx}",
        "**/index.{js,jsx,ts,tsx}",
    ],
};
