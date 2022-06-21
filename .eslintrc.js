module.exports = {
    env: {
        browser: true,
        node: true
    },
    // 기본적 코드 규칙
    extends: [
        // vue 코드 규칙
        //'plugin: vue/vue3-esstential', // lv1
        'plugin:vue/vue3-strongly-recommended',    // lv2
        //'plugin: vue/vue3-recommended', // lv3

        // js 코드 규칙
        'eslint:recommended'
    ],

    parserOptions: {
        // 구문 분석기 옵션
        parser: 'babel-eslint'
    },

    // * extends의 기본 제공사항을 사용하면 공란으로 두어도 된다.
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
    }
}