const indentSpaces = 4

module.exports = {
    root: true,
    env: {
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:import/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module',
    },
    plugins: [ 'promise' ],
    rules: {
        // === Off ===
        'consistent-return': 'off',
        'no-case-declarations': 'off',
        'no-console': 'off',
        'no-nested-ternary': 'off',
        // 'no-undef': 'off',

        // === Javascript ===
        'array-bracket-spacing': [ 'warn', 'always' ],
        'arrow-parens': [ 'warn', 'always' ],
        'arrow-spacing': 'warn',
        'brace-style': [ 'warn', 'stroustrup' ],
        camelcase: [ 'warn', { properties: 'never' } ],
        'comma-dangle': [ 'warn', 'always-multiline' ],
        'comma-spacing': [ 'warn', { before: false, after: true } ],
        'comma-style': 'warn',
        'computed-property-spacing': [ 'warn', 'always' ],
        'constructor-super': 'error',
        curly: [ 'warn', 'all' ],
        'dot-notation': 'error',
        'eol-last': 'warn',
        eqeqeq: [ 'error', 'smart' ],
        'func-call-spacing': [ 'warn', 'never' ],
        indent: [
            'warn',
            indentSpaces,
            {
                SwitchCase: 1,
            },
        ],
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'warn',
            {
                before: true,
                after: true,
            },
        ],
        'linebreak-style': [ 'error', 'unix' ],
        'lines-around-comment': 'off',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-const-assign': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-extra-semi': 'error',
        'no-fallthrough': 'warn',
        'no-lonely-if': 'warn',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multi-spaces': [ 'warn', {
            ignoreEOLComments: true,
        } ],
        'no-multi-str': 'off',
        'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
        'no-redeclare': 'error',
        'no-shadow': 'error',
        'no-trailing-spaces': 'warn',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unreachable': 'warn',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'warn',
        'no-unused-vars': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-return': 'warn',
        'no-var': 'error',
        'no-whitespace-before-property': 'warn',
        'object-curly-spacing': [ 'warn', 'always' ],
        'padded-blocks': [ 'warn', 'never' ],
        'prefer-const': 'warn',
        'prefer-template': 'warn',
        'quote-props': [ 'warn', 'as-needed' ],
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        semi: [
            'warn',
            'never',
            {
                beforeStatementContinuationChars: 'always',
            },
        ],
        'semi-spacing': [ 'warn', {
            before: false,
            after: true,
        } ],
        'space-before-blocks': 'warn',
        'space-before-function-paren': [ 'warn', 'never' ],

        'space-in-parens': [ 'warn', 'always' ],
        'space-infix-ops': [ 'warn' ],
        'space-unary-ops': [
            'warn',
            {
                words: true,
                nonwords: false,
                overrides: {
                    '!': true,
                    '!!': true,
                },
            },
        ],
        'spaced-comment': [ 'warn', 'always' ],
        'switch-colon-spacing': [ 'warn' ],
        // 'template-curly-spacing': [ 'warn', 'always' ],
        'template-tag-spacing': [ 'warn', 'always' ],
        'valid-typeof': 'warn',
        yoda: 'off',
    },
}
