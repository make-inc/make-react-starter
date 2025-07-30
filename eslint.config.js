import js from '@eslint/js';
import ts from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    // Global ignores
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            '.next/**',
            'build/**',
            '**/*.d.ts',
            '**/*.config.*',
        ],
    },

    // Base JavaScript config
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            'react-hooks': reactHooks,
        },
        rules: {
            ...js.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': 'off',
            'prefer-const': 'warn',
        },
    },

    // TypeScript config for source files
    ...ts.configs.recommended.map(config => ({
        ...config,
        files: ['**/*.{ts,tsx}'],
        ignores: ['**/*.config.*', '**/*.d.ts'],
        languageOptions: {
            ...config.languageOptions,
            parserOptions: {
                ...config.languageOptions?.parserOptions,
                ecmaFeatures: { jsx: true },
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            ...config.plugins,
            'react-hooks': reactHooks,
        },
        rules: {
            ...config.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': 'off',
            'prefer-const': 'warn', // Make prefer-const a warning instead of an error
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            // Make other strict rules more lenient
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
        },
    })),

    // Config for TypeScript config files (looser rules)
    {
        files: ['**/*.config.{js,ts}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.node.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'import/no-extraneous-dependencies': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/prefer-namespace-keyword': 'off',
        },
    },

    // Type declaration files
    {
        files: ['**/*.d.ts'],
        languageOptions: {
            parserOptions: {
                project: null, // Don't require project for .d.ts files
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/prefer-namespace-keyword': 'off',
            'spaced-comment': 'off',
        },
    },
];
