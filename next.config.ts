import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    // Exclude files from deployment build
    experimental: {
        outputFileTracingExcludes: {
            '*': [
                // Development files
                '.vscode/**/*',
                '.idea/**/*',
                '*.log',
                '*.log.*',
                // Test files
                '**/__tests__/**/*',
                '**/*.test.*',
                '**/*.spec.*',
                '**/coverage/**/*',
                // Documentation
                'README.md',
                'CHANGELOG.md',
                'LICENSE',
                '*.md',
                // Git files
                '.git/**/*',
                '.gitignore',
                '.gitattributes',
                // Config files (development)
                '.prettierrc.*',
                '.eslintrc.*',
                '.eslintignore',
                'eslint.config.*',
                'jest.config.*',
                'vitest.config.*',
                // Lint files and cache
                '.eslintcache',
                '**/.eslintcache',
                '**/node_modules/.cache/**/*',
                // TypeScript config files
                'tsconfig.json',
                'tsconfig.*.json',
                'tsconfig.*.ts',
                // TypeScript build info and declarations
                '*.tsbuildinfo',
                'tsconfig.tsbuildinfo',
                '**/*.d.ts.map',
                'next-env.d.ts',
                // Lock files (optional - keep if needed)
                'pnpm-lock.yaml',
                'yarn.lock',
                // IDE files
                '.DS_Store',
                'Thumbs.db',
                '*.swp',
                '*.swo',
                '*~',
            ],
        },
    },
};

export default nextConfig;
