# Changelog

## 0.9.0

### Minor Changes

- [#4](https://github.com/tyom/storybook-react-context/pull/4) [`ba8214c`](https://github.com/tyom/storybook-react-context/commit/ba8214ca36fb0d8d3ccc3f4094ecc6567b282590) Thanks [@tyom](https://github.com/tyom)! - Export TypeScript types and improve developer experience
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
    - Add Husky pre-commit hooks with lint-staged for automated code quality checks

All notable changes to this project will be documented in this file.

## 0.8.0

- Upgrade to support Storybook v9
- Add `@storybook/react` as a peer dependency
- Clean up dependencies and ensure proper workspace configuration

## 0.7.0

- Extract the package from the [monorepo](https://github.com/tyom/storybook-addons) to make it easier to iterate and maintain.
- Rewrite the decorator to support Storybook v8.
- Add support for multiple contexts.
- Expose `useArgs` hook from `@storybook/preview-api` to access and update the args in the story.
