module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': 'off'
    }
};
