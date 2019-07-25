module.exports = {
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: "module"
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    rules: {
        "no-console": "off"
    },
    env: {
        browser: true
    }
};
