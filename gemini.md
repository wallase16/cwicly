# PROJECT GOVERNANCE: Cwicly Reverse Engineering

This project follows a strict, iterative reconstruction process to ensure 100% functional and structural parity with the original Cwicly plugin. All AI agents MUST adhere to the following mandates.

## 1. Planning & Specification Mandate
- **Standardized Artifact Format**: All agents MUST use the established format for `implementation_plan.md` and `task.md`. This structure is required to prevent hallucination, re-work, and lazy implementation.
- **Reference-Driven Execution**: Use the latest plans and tasks in the brain directory as your primary technical specification. While you are not bound to follow them verbatim, they serve as the "ground truth" for project scope and design decisions. 
- **Agentic Judgment**: You are encouraged to optimize implementation details and deviate from the reference plan if a superior technical path is identified, provided it remains consistent with the overall project architecture.
- **Iterative Micro-Steps**: Continue to work in granular sub-tasks. Each significant logic change should be verified before proceeding to the next item on your checklist.

## 2. Post-Mortem Avoidance & Mitigation Strategy
To prevent regressions and project stalls, the following constraints are mandatory:
- **Attribute Auditing**: Before creating/modifying a block, cross-reference its `block.json` with the original in `sites/original/wp-content/plugins/cwicly/` to ensure schema compatibility.
- **PHP Syntax Guard**: Every new or modified PHP file MUST pass syntax verification (`php -l`).
- **Asset Bundle Control**: High-weight dependencies (Swiper, Leaflet, AOS) MUST be enqueued conditionally only when the block is detected.
- **Visual Parity Loop**: Use automated test scripts (like `create-parity-test.php`) to compare the rebuilt block's DOM and layout against the original reference.
- **ESM Strictness**: Since `package.json` uses `"type": "module"`, all JavaScript imports MUST include explicit file extensions (e.g., `import Edit from './edit.js'`). failure to do so will break the build.
- **Explicit Entry Points**: To prevent `wp-scripts` from skipping the main application bundle when `block.json` files are present, the `build` script in `package.json` MUST explicitly define `src/index.js` as an entry point.

## 3. Mandatory Browser Verification
- **Per-Phase Visual Audit**: At the completion of EVERY phase, you MUST use the browser subagent to:
    1.  Verify the component renders correctly on the frontend.
    2.  Test interactive behaviors (e.g., slider drag, accordion toggle).
    3.  Capture high-resolution screenshots/recordings for the [walkthrough.md](file:///home/gideon/.gemini/antigravity/brain/4c5bd7c6-0191-4b2a-adad-a2d156a9b5fb/walkthrough.md).

## 4. Infrastructure Compliance (Mandatory)
- **Unix Domain Sockets (UDS)**: All persistent services (PHP-FPM) MUST bind to `/run/user/1000/<service-name>.sock`.
- **API Gateway**: External access MUST use the Caddy Gateway at `localhost:8000` with the Prefix Convention: `http://localhost:8000/cwicly-rebuild/`.
- **Hybrid Exceptions**: Ports 8001-8999 are for ephemeral development/debugging ONLY and must NOT be used for production-intent configs.
