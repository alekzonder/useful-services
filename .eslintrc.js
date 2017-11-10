module.exports = {
    root: false,
    extends: ['@maf/eslint-config'],
    env: {
        browser: true,
        node: true
    },
    plugins: ['es5'],
    rules: {
        'require-jsdoc': [0]
    }
};
