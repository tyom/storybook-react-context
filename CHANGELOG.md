# Changelog

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
