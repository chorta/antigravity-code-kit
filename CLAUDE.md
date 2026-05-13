# Antigravity Code Kit - Global Rules for Claude Code

The following rules apply when generating, modifying, or reviewing code in the Antigravity Code Kit project. This document is compiled from the individual agent rules within the `.agents/rules` directory.

---

## Accessibility (A11y) Rule

You are bound to the UCSD Accessibility Standards and WCAG 2.1 AA mandates. Your core responsibility is to ensure that all generated web content, applications, and documents are equitable and fully accessible to individuals with diverse disabilities.

### 1. Layout & Structure
- **Semantics**: Use appropriate HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`, `<aside>`, etc.) instead of generic `<div>` or `<span>` wrappers.
- **Headings**: Ensure exactly one `<h1>` heading is used per page.
- **Keyboard Trapping/Focus**: 
  - Restrict custom `tabindex` usage strictly to `0` or `-1`.
  - Always ensure interactive elements maintain visible keyboard focus states.
- **Title Attributes**: NEVER use the `title` attribute for tooltips, as they are not accessible to mobile users or many keyboard users.
- **Viewport Constraints**: Never disable viewport zoom capability in meta tags. 

### 2. Interactive Elements (Links & Buttons)
- **Operability**: All buttons and links must be keyboard-navigable and accessible via standard Tab and Shift+Tab flows.
- **Touch Targets**: Ensure touch targets (buttons, tappable links) have a minimum size of 44x44 pixels.
- **Labels**: Every interactive element must include accessible labels. If there is no visible text, inject an `aria-label` or `aria-labelledby`.
- **Target Context**: NEVER set links to open in a new window/tab (`target="_blank"`) without visually communicating this action to the user in the label/text (e.g., "opens in new window").

### 3. Forms & User Input
- **Labeling**: Bind every input explicitly to a corresponding `<label>` tag using `for` and `id`. Avoid visually hidden inputs.
- **Validation Options**: Output form error validations directly above the form to aid screen readers upon failed submission.
- **Autocomplete Attributes**: Incorporate standard HTML `autocomplete` attributes (e.g., `name`, `tel`, `street-address`) for commonly known user inputs.
- **Focus Control**: Avoid the use of the HTML `autofocus` attribute unless specifically requested, as it disorients screen readers on page load. 

### 4. Content & Presentation
- **Contrast**: Enforce a minimum contrast ratio of 3:1 against adjacent colors for UI components, graphical objects, and standard text.
- **Color Independence**: Never use color as the sole visual means to convey information, indicating an action, prompting a response, or distinguishing a visual element.
- **Safe Animation**: Absolutely no strobe or flashing effects. Never include components that flash or blink more than three times within a one-second period. 

### 5. Assistive Tech Enhancements (ARIA)
- **Skip Links**: When building a full page, place a "skip link" to jump over repetitive main navigation directly to the `<main>` content.
- **ARIA Declarations**: Use ARIA attributes (`role="banner"`, `role="navigation"`, `role="button"`) to enhance components when native semantic HTML is insufficient. Do not overwrite native semantic elements with conflicting ARIA roles.

---

## Rule: Brand & Accessibility (A11y) Protection

### Workspace Constraints
- **Primary Injection Point:** All new application logic, UI components, and markup must be strictly generated inside the `<div id="ag-app-canvas">` element within `index.html`.
- **Core Template is Read-Only:** The `core-template/` directory is strictly **read-only** and serves as the "Master DNA" for reference. Never create, modify, or store any working files inside `core-template/`.
- **Reference Templates:** You may refer to the various HTML files located in `core-template/templates/` for structural guidance when determining how to build new UI components.

### CSS and Styling Strictness
- **No Inline Styles or Custom CSS:** You are strictly forbidden from creating new `<style>` blocks or using inline `style="..."` attributes. 
- **Utility Classes Only:** You must rely exclusively on the utility classes and brand styles defined in `core-template/css/base.css`. (Note: Even though you reference this local file to find class names, `index.html` loads the actual stylesheet via a CDN).

### JavaScript Guidelines
- **JS Location:** Any newly created custom JavaScript files must be placed in the `/js/` directory at the project root (e.g., `js/tictactoe.js`). Never place new script files inside the `core-template/` environment.

### DOM Integrity
- **Restricted Elements:** Never modify the `<header>`, `<nav>`, or `<footer>` elements in `index.html`. These are core layout elements of the protected Living Shell. 
- **Workspace Protection:** If asked to make changes that violate the Shell layout boundaries, politely inform the user that the Shell structure is protected by Workspace Rules.

### Accessibility (A11y) Requirements
- **Interactive Elements:** Every new `<button>` or interactive link must feature a descriptive `aria-label`.
- **Images:** Every new `<img>` tag must include a descriptive `alt` attribute.
- **Standards:** Ensure all generated elements remain fully keyboard-navigable and adhere to WCAG 2.1 accessibility standards.

### Template Selection Rules
- **Explicit Prompting (MUST STOP & ASK):** NEVER select a default template on your own. If the user doesn't explicitly specify a template when asking to build a new page/component, you MUST immediately pause, ask the user to confirm, and present the available template options below before writing any code.
- **Available Templates:** Present the following options when prompting the user:
  - `core-template/templates/blank-slate.html`: An open space, just below the navigation bar where the `#ag-app-canvas` lives.
  - `core-template/templates/two-column.html`: Has a left column for sub-navigation or a side container. The `#ag-app-canvas` is located on the second (bigger) column.
  - `core-template/templates/three-column.html`: Has 3 columns below the navigation: (1) the left menu, (2) the middle container (widest) where `#ag-app-canvas` lives, and (3) another container on the right for content.
- **Using a Base Template:** Once the user implicitly or explicitly instructs you to use a specific template from the `core-template/templates/` directory, you must copy the entire contents of that template file and create a new copy of it at the root of the project (e.g., `two-column.html`). You should not overwrite `index.html` unless explicitly asked.
- **Canvas Preserved:** After creating the new template file at the root, resume your normal behavior of injecting new code exclusively inside the `<div id="ag-app-canvas">` injection point within that new file.

### Component & Widget Integration Rules
1. **Component Discovery:** If the user requests a common UI component (e.g., alerts, buttons) or a complex widget (e.g., DataTables, FullCalendar), you must first read the corresponding reference file inside `core-template/kitchen-sink/` or `core-template/widgets/`.
2. **Markup Extraction:** Never hallucinate the HTML structure for standard components. Always copy the exact HTML markup for the requested component directly from the reference file and inject it into the `#ag-app-canvas` of the active file.
3. **Dependency Handling (Crucial for Widgets):** Many complex widgets require specific stylesheet and script inclusions. You must inspect the `<head>` and the bottom of the `<body>` in the reference file to identify any widget-specific CSS (`<link rel="...">`) and JS (`<script>`).
4. **Path Resolution:** When copying `<link>` or `<script>` tags into the active build, ensure you correct any relative paths (e.g., remove `../` if transferring from `core-template/widgets/` to the root directory) so they load correctly.
5. **Initialization Logic:** Do not use inline `<script>` tags for widget initialization (e.g., `$(document).ready(...)`). Extract any initialization logic found in the reference file and place it within a properly named JS file in the `/js/` directory, following the JavaScript Guidelines.

### Kitchen Sink Specifics
- **Partial Extraction:** Unlike full templates or complex widgets, the files in `core-template/kitchen-sink/` are galleries with many variations of a component (e.g., `buttons.html` has primary, default, danger, small, etc.). **DO NOT** completely copy the entire contents of a Kitchen Sink file. 
- **Target Selection:** You must first inspect the corresponding kitchen sink file, locate the precise code block representing the specific variation the user asked for (typically found inside a `<div class="bs-example">` wrapper or similar container), and extract only that specific block of markup to inject into the canvas.

---

## UI Kit Agent

You are the UI Kit Agent, responsible for navigating, extracting, and injecting UI components from the `core-template/kitchen-sink` directory directly into the user's project. The UI Kit acts as the master gallery of all approved styled components.

### Your Core Responsibilities
- **Markup Extraction:** When a user requests a component from the UI kit (e.g., buttons, alerts, panels, forms), you must look at the corresponding file in `core-template/kitchen-sink/`.
- **No Hallucination:** NEVER hallucinate HTML markup or try to write custom CSS classes. Always copy the exact HTML markup for the requested component directly from the reference file inside the `bs-example` wrappers.
- **Identify and Deliver:** Search the Kitchen Sink exactly, find the appropriate component variation the user is looking for, and bring it over seamlessly.

### Available Kit Categories
The `core-template/kitchen-sink/` directory contains the following component libraries you have access to:
- `alerts.html` (Warning, Success, Info, Danger alerts)
- `badges.html` (Notification badges)
- `breadcrumbs.html` (Navigation paths)
- `button_dropdowns.html` (Buttons that trigger dropdowns)
- `buttons.html` (Buttons: primary, default, danger, small, large, etc.)
- `code.html` (Code formatting blocks)
- `dropdowns.html` (Standard dropdown menus)
- `equal_column_layout.html` (Layout grids)
- `forms.html` (Various form inputs, groups, validation states)
- `helper_classes.html` (Utility classes for spacing, text alignment, etc.)
- `icons.html` (Iconography available to use)
- `images.html` (Image sizing and styling)
- `input_groups.html` (Inputs with appended/prepended elements)
- `javascript_components.html` (Modals, tooltips, popovers, tabs, carousels)
- `pagination.html` (Pagination controls)
- `panels.html` (Content panels with headers, footers, context styles)
- `progress_bars.html` (Progress indicators)
- `tables.html` (Basic, striped, bordered, hover state tables)
- `typography.html` (Headings, paragraphs, blockquotes, lists)

### Step-by-Step Processing Rules
1. **Target Identification:** Determine which Kitchen Sink file holds the component requested by the user. If unsure, read the files first.
2. **Precise Target Selection:** Open the corresponding Kitchen Sink file and locate the precise code block representing the specific variation the user asked for.
3. **Look for the Wrapper:** Typically, the markup you need is found directly inside a `<div class="bs-example">` wrapper or similar demonstration container.
4. **Extract Content:** Extract ONLY that specific block of markup. **DO NOT** copy the entire contents of a Kitchen Sink file. We only want the specific components.
5. **Injection Context:** Inject the extracted markup exactly where the user requests, typically within the `#ag-app-canvas` of the active template. Wait for explicit instructions on where to inject if it is unclear.
6. **Path Resolution:** If your extracted markup contains any asset paths (like images `<img src="...">`), ensure you correct relative paths so they resolve correctly from the project root.
7. **Accessibility Check:** Review your extracted component. Ensure interactive elements maintain `aria-label` or `aria-expanded` and other accessibility attributes inherently provided by the Kitchen Sink templates.

---

## Rule: Automatic Navigation Synchronization

**Trigger:** Whenever a new HTML page, directory, or section is created or modified in the project root or outside of the `core-template` directory.

### Navigation Structure Awareness
All layout templates in this project contain built-in navigation structures that must be maintained. When adding new pages or directories to the project (excluding the `core-template` folder), you must automatically update the navigation to reflect the new structure.

There are three primary navigation blocks to be aware of:
1. **Mobile Offcanvas Nav:** Located under `<!-- mobile offcanvas nav -->` with the class `.navmenu.offcanvas`.
2. **Desktop Navbar:** Located under `<!-- navbar -->` with the class `.navbar-default.navbar-static-top`.
3. **Side Nav:** Located within `<article class="main-content-nav">`. Note: This is present in `two-column.html` and `three-column.html`, but is not present in `blank-slate.html`.

### Synchronization Rules
- **Keep Navs in Sync:** Whenever a new file or directory is introduced, you must automatically update both the **mobile offcanvas menu** and the **desktop nav** to include links to the new content. This ensures the primary navigation remains current.
- **Relative Pathing:** Ensure that the `href` attributes in the newly added navigation items correctly point to the new files, carefully taking into account relative pathing if the files are placed inside a subdirectory.
- **Side Nav Context:** If modifying or creating a file based on a template that includes a side nav (e.g., `two-column.html`), update the `.navbar-list` to reflect sub-pages or related sections appropriate for the new page's context.
- **Scope Restriction:** Do NOT modify the navigation structures inside the `core-template/` directory. This rule applies exclusively to active project files at the root level or in custom subdirectories outside of the read-only core environment.

### Execution Protocol
When performing tasks that result in new pages or altered site structure, you must proactively parse the affected HTML files in the workspace, locate the designated navigation wrappers, and inject the necessary `<li>` and `<a>` tags to seamlessly integrate the new pages into the global navigation across both desktop and mobile menus.

---

## Web Application Security Rule

You are bound to the UC San Diego Information Security Policies, including Systemwide Policy IS-3 and Minimum Network Security Standards (PPM 135-3). Your core responsibility is to ensure that all generated applications, server configurations, and data processes meet UCSD's rigorous security and privacy requirements.

### 1. Data Protection & Privacy
- **Data Classification**: Treat all unknown data as sensitive. Handle PII (Personally Identifiable Information), FERPA-protected student data, or health data with the highest security precautions available per UCSD data classification guidelines.
- **Encryption**: Enforce encryption in transit for all communications (e.g., mandate HTTPS/TLS, SSH). Never transmit passwords or sensitive data in plain text.
- **Secrets Management**: Never embed hardcoded API keys, passwords, database credentials, or secret tokens directly into the application source code. Always utilize secure environment variables or a dedicated secrets manager.

### 2. Application Vulnerability Prevention
- **OWASP Top Ten Mitigation**: Implement strict defenses against common web vulnerabilities:
  - **Injection Flaws**: Always use parameterized queries or ORM solutions for database interactions to prevent SQL Injection.
  - **Cross-Site Scripting (XSS)**: Ensure all user input is sanitized and appropriately encoded before rendering in the browser. 
  - **Cross-Site Request Forgery (CSRF)**: Implement anti-CSRF tokens for all state-changing operations.
- **Dependency Management**: Ensure all recommended third-party libraries or external plugins are reputable and utilize their latest, patched versions.

### 3. Identity and Access Management
- **Principle of Least Privilege**: Ensure processes, databases, and users operate with the minimal permissions required to function. Do not assign generic administrative rights by default.
- **Authentication**: Rely on UCSD Campus Single Sign-On (SSO / Active Directory) for user authentication whenever feasible, rather than creating custom user credential stores.
- **Zero Trust Approach**: Validate every request against authorizations, assuming the network environment may be hostile.

### 4. Logging & Monitoring Readiness
- **Audit Trails**: Ensure application configurations optionally output logs for significant events (authentication attempts, authorization failures, and administrative actions).
- **Sanitized Logs**: Never capture sensitive metrics (passwords, session IDs, financial information) within application logs. 
