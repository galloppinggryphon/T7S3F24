const indentSpaces = 4

module.exports = {
    root: false,
    env: {},
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    plugins: [ 'react-refresh' ],
    settings: {
        react: { version: '18.3' },
        'import/resolver': {
            'eslint-import-resolver-custom-alias': {
                extensions: [ '.js', '.jsx' ],
            },
        },
    },
    rules: {
        // === React ===
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],

        // Disallow unnecessary JSX expressions when literals alone are sufficient
        'react/jsx-curly-brace-presence': [
            'warn',
            {
                props: 'ignore',
                children: 'never',
            },
        ],
        'react/jsx-curly-spacing': [
            'warn',
            {
                when: 'always',
                children: true,
                objectLiterals: 'never',
            },
        ],
        'react/jsx-indent': [
            'warn',
            indentSpaces,
            {
                indentLogicalExpressions: true,
            },
        ],
        'react/jsx-indent-props': [
            'warn',
            {
                indentMode: indentSpaces,
                first: true,
            },
        ],
        'react/prop-types': 'off',
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-tag-spacing': [
            'warn',
            {
                beforeSelfClosing: 'always',
            },
        ],
    },
}
