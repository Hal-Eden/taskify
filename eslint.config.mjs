import js from "@eslint/js";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";

export default [
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                Statamic: "readonly",
                Fieldtype: "readonly",
            },
        },
        plugins: { unicorn },
        rules: {
            "prettier/prettier":
                process.env.NODE_ENV === "production" ? "error" : "warn",
            "no-console":
                process.env.NODE_ENV === "production" ? "error" : "warn",
            "no-debugger":
                process.env.NODE_ENV === "production" ? "error" : "warn",

            "comma-dangle": ["error", "only-multiline"],
            complexity: [
                "error",
                {
                    max: 20,
                },
            ],
            eqeqeq: ["error", "smart"],
            "unicorn/no-abusive-eslint-disable": "error",
            "unicorn/better-regex": "warn",
            "no-nested-ternary": "warn",

            "space-before-function-paren": "off",
            camelcase: "off",
        },
    },
    {
        files: [
            "eslint.config.mjs",
            "postcss.config.js",
            "vite.config.mjs",
        ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        ignores: [
            // artifacts
            "node_modules/*",
            "public/*",
            "vendor/*",
            "storage/*",

            // IDE settings
            ".vscode/*",
            ".idea/*",

            // config
            "composer.json",
            "package.json",
            "package-lock.json",
        ],
    },
];
