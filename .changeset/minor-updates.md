---
"storybook-react-context": minor
---

Export TypeScript types and improve developer experience

- **New Features:**
  - Export `ContextOptions` and `DecoratorOptions` types for better TypeScript support
  - Add automated changelog generation with changesets
  - Add GitHub Actions workflows for CI/CD and automated releases

- **Improvements:**
  - Fix inconsistent error messages in context hooks
  - Remove unnecessary React Fragment wrapper in decorator
  - Enable `noUnusedLocals` TypeScript option for better code hygiene
  - Improve code formatting with updated Prettier and ESLint configurations
  - Update all dependencies to latest versions

- **Developer Experience:**
  - Add comprehensive CONTRIBUTING.md documentation
  - Set up automated release process with pre-release support
  - Add support for alpha, beta, and next pre-release channels