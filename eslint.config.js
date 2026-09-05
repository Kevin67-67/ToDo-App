const js = require('@eslint/js');

module.exports = [ 

    js.configs.recommended, { 
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'commonjs',
        globals: {
            require: 'readonly',
            module: 'writable',
            exports: 'writable',
            __dirname: 'readonly'
        }
    },

    rules: {
        'no-unused-vars': 'warn'
    }
    },

    {
        files: ['tests/**/*.js'],
        languageOptions:{
            globals:{
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                jest: 'readonly'
            }
        }
    },
    
    {
        ignores:['node_modules/', 'logs/']
    }

];