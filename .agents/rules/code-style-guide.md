---
trigger: always_on
---

# Rule: Brand & Accessibility (A11y) Protection
**Trigger:** Always active

## Workspace Constraints
- **Primary Injection Point:** All new application logic, UI components, and markup must be strictly generated inside the `<div id="ag-app-canvas">` element within `index.html`.
- **Core Template is Read-Only:** The `core-template/` directory is strictly **read-only** and serves as the "Master DNA" for reference. Never create, modify, or store any working files inside `core-template/`.
- **Reference Templates:** You may refer to the various HTML files located in `core-template/templates/` for structural guidance when determining how to build new UI components.

## CSS and Styling Strictness
- **No Inline Styles or Custom CSS:** You are strictly forbidden from creating new `<style>` blocks or using inline `style="..."` attributes. 
- **Utility Classes Only:** You must rely exclusively on the utility classes and brand styles defined in `core-template/css/base.css`. (Note: Even though you reference this local file to find class names, `index.html` loads the actual stylesheet via a CDN).

## JavaScript Guidelines
- **JS Location:** Any newly created custom JavaScript files must be placed in the `/js/` directory at the project root (e.g., `js/tictactoe.js`). Never place new script files inside the `core-template/` environment.

## DOM Integrity
- **Restricted Elements:** Never modify the `<header>`, `<nav>`, or `<footer>` elements in `index.html`. These are core layout elements of the protected Living Shell. 
- **Workspace Protection:** If asked to make changes that violate the Shell layout boundaries, politely inform the user that the Shell structure is protected by Workspace Rules.

## Accessibility (A11y) Requirements
- **Interactive Elements:** Every new `<button>` or interactive link must feature a descriptive `aria-label`.
- **Images:** Every new `<img>` tag must include a descriptive `alt` attribute.
- **Standards:** Ensure all generated elements remain fully keyboard-navigable and adhere to WCAG 2.1 accessibility standards.

## Template Selection Rules
- **Using a Base Template:** When the user instructs you to use a specific template from the `core-template/templates/` directory (e.g., `core-template/templates/two-column.html`), you must copy the entire contents of that template file and create a new copy of it at the root of the project (e.g., `two-column.html`). You should not overwrite `index.html` unless explicitly asked.
- **Canvas Preserved:** After creating the new template file at the root, resume your normal behavior of injecting new code exclusively inside the `<div id="ag-app-canvas">` injection point within that new file.

## Component & Widget Integration Rules
1. **Component Discovery:** If the user requests a common UI component (e.g., alerts, buttons) or a complex widget (e.g., DataTables, FullCalendar), you must first read the corresponding reference file inside `core-template/kitchen-sink/` or `core-template/widgets/`.
2. **Markup Extraction:** Never hallucinate the HTML structure for standard components. Always copy the exact HTML markup for the requested component directly from the reference file and inject it into the `#ag-app-canvas` of the active file.
3. **Dependency Handling (Crucial for Widgets):** Many complex widgets require specific stylesheet and script inclusions. You must inspect the `<head>` and the bottom of the `<body>` in the reference file to identify any widget-specific CSS (`<link rel="...">`) and JS (`<script>`).
4. **Path Resolution:** When copying `<link>` or `<script>` tags into the active build, ensure you correct any relative paths (e.g., remove `../` if transferring from `core-template/widgets/` to the root directory) so they load correctly.
5. **Initialization Logic:** Do not use inline `<script>` tags for widget initialization (e.g., `$(document).ready(...)`). Extract any initialization logic found in the reference file and place it within a properly named JS file in the `/js/` directory, following the JavaScript Guidelines.