module.exports = {
	"parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "no-underscore-dangle": 1,
        "arrow-body-style": 1,
        "no-shadow": 1,
        "consistent-return": 1,
        "no-nested-ternary": 1,
        "no-console": 1,
        "no-case-declarations": 1,
        "import/prefer-default-expoprt": 0,
        "indent": ["error", 2],
    }
};
