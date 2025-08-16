# Contributing

## Development Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the library: `pnpm build:lib`
4. Run tests: `pnpm test`

## Making Changes

1. Create a new branch from `main`
2. Make your changes
3. Run linting: `pnpm lint` (or `pnpm lint:fix` to auto-fix)
4. Run type checking: `pnpm typecheck`
5. Run tests: `pnpm test`
6. Add a changeset: `pnpm changeset`

## Adding a Changeset

When you make changes that should be included in the changelog:

1. Run `pnpm changeset`
2. Select the packages to release (usually just `storybook-react-context`)
3. Select the type of change:
   - `patch` - Bug fixes and minor updates
   - `minor` - New features that are backward compatible
   - `major` - Breaking changes
4. Write a summary of your changes (this will appear in the changelog)
5. Commit the generated changeset file in `.changeset/`

## Release Process

### Automated Releases (Recommended)

Releases are fully automated via GitHub Actions:

#### Stable Releases (from `main` branch)

1. Create a PR with your changes and changeset files
2. When merged to `main`, a "Release PR" is automatically created/updated
3. The Release PR contains version bumps and changelog updates
4. Merge the Release PR to publish to npm with the `latest` tag

#### Pre-releases (from `beta`, `alpha`, or `next` branches)

1. Create your branch from `main` (e.g., `beta`)
2. Add changesets as normal
3. Push to the pre-release branch
4. A Release PR is created for that branch
5. Merge to automatically publish with the appropriate tag (`beta`, `alpha`, or `next`)

### Manual Pre-release Process (Local Development)

For testing pre-releases locally:

1. Enter pre-release mode: `pnpm prerelease beta` (or `alpha`, `next`)
2. Add changesets: `pnpm changeset`
3. Version: `pnpm version` (creates versions like `0.8.1-beta.0`)
4. Publish: `pnpm release` (publishes with appropriate npm tag)
5. Exit pre-release mode: `pnpm prerelease:exit` (return to stable versioning)

### Manual Release Process (Emergency Only)

If you need to release manually:

1. Ensure you're on the correct branch (`main` for stable)
2. Run `pnpm version` to update version and changelog
3. Commit the changes: `git commit -m "chore: release"`
4. Run `pnpm release` to build and publish to npm
5. Push the changes and tags: `git push --follow-tags`

## Branch Strategy

- `main` - Stable releases (0.8.0, 0.9.0, 1.0.0)
- `beta` - Beta pre-releases (0.8.1-beta.0)
- `alpha` - Alpha pre-releases (0.8.1-alpha.0)
- `next` - Next version pre-releases (0.9.0-next.0)

## Scripts Reference

- `pnpm lint` - Run Biome linting
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Biome
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Build and run tests
- `pnpm changeset` - Add a changeset for your changes
- `pnpm version` - Update versions based on changesets
- `pnpm release` - Build and publish to npm
- `pnpm prerelease <tag>` - Enter pre-release mode
- `pnpm prerelease:exit` - Exit pre-release mode
