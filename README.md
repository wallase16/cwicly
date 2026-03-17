# Cwicly Rebuild (v1.5.0)

A modern, declarative reconstruction of the Cwicly WordPress plugin.

## Project Overview
This project upgrades the original Cwicly plugin to use the modern WordPress build system (`@wordpress/scripts`), externals management, and a refactored component-based framework.

## Getting Started

### Development Environment
This project uses **Nix** for a declarative development environment. To ensure all system dependencies (like `libssl`) are available for build tools and language servers, work within the Nix shell:
```bash
nix develop
```

### Build Instructions
To build the plugin assets (always run within `nix develop`):
```bash
npm run build
```
Note: Building within `nix develop` ensures that the modern JSX transform dependencies are correctly mapped and system libraries are available.

### Testing
#### Backend (PHP)
Run the PHPUnit suite to verify block registration and server-side rendering:
```bash
./vendor/bin/phpunit
```

#### Frontend (Browser)
Launch a local WordPress Playground server for visual verification:
```bash
npm run playground:server -- --port=8001
```

## Key Architectural Changes
- **Cwicly Store**: Reconstructed as a standalone Redux store (`cwicly/base`).
- **Standardized Inspector**: All core blocks now use a unified tabbed interface (`Primary`, `Design`, `Advanced`).
- **Dynamic Data Binding**: Full integration for ACF, Post Meta, and Relationship fields with live resolution via the `useDynamicData` hook and `cwicly/v1/dynamics` API.
- **Scoped Scaling**: Responsive design and Tailwind integration extracted into shared framework components.
