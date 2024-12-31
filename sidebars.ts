import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [
        { type: 'doc', id: 'introduction', label: '1. Introduction' },
        { type: 'doc', id: 'benchmarking', label: '2. Benchmarking' },
        { type: 'doc', id: 'build-configuration', label: '3. Build Configuration' },
        { type: 'doc', id: 'linting', label: '4. Linting' },
        { type: 'doc', id: 'profiling', label: '5. Profiling' },
        { type: 'doc', id: 'inlining', label: '6. Inlining' },
        { type: 'doc', id: 'hashing', label: '7. Hashing' },
        { type: 'doc', id: 'heap-allocations', label: '8. Heap Allocations' },
        { type: 'doc', id: 'type-sizes', label: '9. Type Sizes' },
        { type: 'doc', id: 'standard-library-types', label: '10. Standard Library Types' },
        { type: 'doc', id: 'iterators', label: '11. Iterators' },
        { type: 'doc', id: 'bounds-checks', label: '12. Bounds Checks' },
        { type: 'doc', id: 'io', label: '13. I/O' },
        { type: 'doc', id: 'logging-and-debugging', label: '14. Logging and Debugging' },
        { type: 'doc', id: 'wrapper-types', label: '15. Wrapper Types' },
        { type: 'doc', id: 'machine-code', label: '16. Machine Code' },
        { type: 'doc', id: 'parallelism', label: '17. Parallelism' },
        { type: 'doc', id: 'general-tips', label: '18. General Tips' },
        { type: 'doc', id: 'compile-times', label: '19. Compile Times' },
    ],
};

export default sidebars;
