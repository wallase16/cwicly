# Cwicly Rebuild (v1.5.0)

A modern, declarative reconstruction of the Cwicly WordPress plugin.

## Project Overview
This project upgrades the original Cwicly plugin to use the modern WordPress build system (`@wordpress/scripts`), externals management, and a refactored component-based framework.

## Getting Started

### 1. Development Environment
This project uses **Nix** and **devenv** for a declarative, isolated development environment.

```bash
# Enter the nix development shell
nix develop

# Start the environment (Caddy, PHP-FPM, MySQL)
devenv up
```

### 2. Accessing the Site
Once the environment is up, the site is accessible via the Caddy Gateway:
- **URL**: `http://cwicly-rebuild.localhost:8000/index.php`
- **Admin**: `http://cwicly-rebuild.localhost:8000/wp-admin/`
- **Prefix Convention**: All services route through the gateway on port `8000`.

### 3. Build Instructions
To build plugin assets (always run within `nix develop`):
```bash
npm run build
```
Note: The build is optimized for ESM and uses explicit entry points defined in `package.json`.

## Standard Operating Procedure (SOP)

### Making Changes
All development follows the **Iterative Reconstruction Mandate** defined in [gemini.md](file:///home/gideon/.gemini/antigravity/scratch/cwicly-rebuild/cwicly/gemini.md):
1.  **Iterative Planning**: Create an `implementation_plan.md` and `task.md` before starting any phase.
2.  **ESM Compliance**: All JavaScript imports MUST include `.js` extensions due to `"type": "module"` in `package.json`.
3.  **Asset Bundling**: High-weight dependencies (Swiper, Leaflet) must be enqueued conditionally in PHP.
4.  **Infrastructure**: Services must use Unix Domain Sockets (UDS) for persistence.

### Verification
- **PHP Syntax**: Validate changes via `php -l`.
- **Visual Audit**: Every phase requires a browser-based visual verification (captured in `walkthrough.md`).
- **Parity Tests**: Compare rebuilt block DOM against the original plugin in `sites/original/`.

## Key Architectural Changes
- **Cwicly Store**: Reconstructed as a standalone Redux store (`cwicly/base`).
- **Standardized Inspector**: Unified tabbed interface (`Primary`, `Design`, `Advanced`).
- **Dynamic Data Binding**: Live resolution via `useDynamicData` hook and Cwicly REST API.
- **Modern Slider Engine**: High-performance Swiper.js integration for `cwicly/slider`.

## Project History & Verification
For a detailed history of the rebuild phases and visual verification proofs, see the [walkthrough.md](file:///home/gideon/.gemini/antigravity/brain/4c5bd7c6-0191-4b2a-adad-a2d156a9b5fb/walkthrough.md).
