# 🚀 Anti-Gravity: UCSD Living Shell Starter Kit

Welcome to the official developer starter kit for UCSD brand-compliant application development. By combining the power of the **Google Anti-Gravity** agent with a strict "Living Shell" architecture, developers can rapidly build applications without compromising the UCSD brand identity, compliance, and web accessibility (A11y) standards.

For full details on UCSD branding, refer to the [UCSD Brand Guidelines](https://brand.ucsd.edu/).

---

## 🏗️ Project Architecture

To keep the brand intact, we utilize a "Core vs. Active" directory structure, acting as a protected sandbox for AI generation:

* **`/core-template/`**: **(READ-ONLY)** Provides the master layout and brand DNA. Includes references for structural templates, UI components (`kitchen-sink`), widgets, and base CSS styling. **NEVER** create, modify, or store working files here.
* **`.agents/rules/code-style-guide.md`**: The source of truth for the Agent guardrails. By instructing the AI how and where to write code, we safeguard the master layout.
* **`index.html`** (and generated template files): The active space for app construction. Anti-Gravity injects logic and components into these files.
* **`/js/`** and **`/css/`**: The designated working directories for custom application logic and styling.

---

## 🚦 Workspace Rules & Constraints

When using Anti-Gravity within this workspace, the agent operates under the following strict constraints:

1. **The Sandbox (Primary Injection Point)**: All new application logic, UI components, and markup *must* be strictly generated inside the `<div id="ag-app-canvas">` element within your target HTML file.
2. **DOM Integrity**: The `<header>`, `<nav>`, and `<footer>` elements are fundamental layout elements of our protected Living Shell. The agent is explicitly forbidden from modifying them.
3. **No Inline Styles or Custom CSS**: The agent is prohibited from creating new `<style>` blocks or using inline `style="..."` attributes. It must rely exclusively on the utility classes defined in `core-template/css/base.css`.
4. **JS Guidelines**: All custom initialization logic or bespoke JavaScript must be routed to new script files inside the root-level `/js/` directory.

---

## ♿ Accessibility (A11y)

UCSD applications must be inclusive. The agent code generation is wired to meet WCAG 2.1 accessibility standards by default. For more information, visit [accessibility.ucsd.edu](https://accessibility.ucsd.edu/) or use the TGPT Accessibility Assistant chatbot for questions about accessibility:
* **Interactive Elements:** Every new `<button>` or interactive link requires a descriptive `aria-label`.
* **Images:** Every new `<img>` tag requires a descriptive `alt` attribute.
* **Navigation:** All generated components maintain full keyboard-navigability.

---

## 🤖 Agent Workflows: Building with Antigravity

This is how you command the Antigravity agent to build inside the Living Shell.

### 1. Starting a New Page
Before asking the agent to build a new view or component, you must designate a layout template. If you forget, the agent will prompt you to choose one:
- **`core-template/templates/blank-slate.html`**: Wide open workspace beneath the navigation.
- **`core-template/templates/two-column.html`**: Includes a left column side-container and a larger main sandbox area.
- **`core-template/templates/three-column.html`**: A 3-column layout featuring a left menu, wide middle canvas, and a right-hand info column.

*Workflow*: Tell the agent, "Use the two-column template to build a dashboard." The agent will copy `two-column.html` to the root of the project and begin injecting code into its `#ag-app-canvas`.

### 2. Injecting UI Components (UI Kit Agent)
Instead of relying on the AI to hallucinate markup, you can trigger the specialized **UI Kit Agent** defined in `.agents/rules/kitchen-sink.md`. This agent acts as the master gallery manager for all approved styled components.

*Workflow*: Tell the agent, "Add a primary warning alert from the kitchen-sink" or "Add a standard login form from the UI kit." 
The UI Kit Agent will automatically:
1. Match your request to the correct category in the `core-template/kitchen-sink/` directory (e.g., `alerts.html`, `forms.html`).
2. Search within the `bs-example` wrappers to find the precise component block.
3. Extract and securely inject only that specific markup into your active file's canvas.
4. Correct any relative asset paths and ensure `aria-label` or accessibility attributes remain intact.

**Available Components (Kitchen Sink):**
For live examples of all components, visit the full documentation page: [developers.ucsd.edu/decorator/kitchen-sink](https://developers.ucsd.edu/decorator/kitchen-sink).
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

### 3. Implementing Complex Widgets
Widgets (like DataTables or FullCalendar) require heavier lifting. Our `core-template/widgets/` directory houses complex references.

*Workflow*: Instruct the agent to build a specific widget from the references. The agent will:
1. Extract the main component markup into the `#ag-app-canvas`.
2. Inspect the reference file's `<head>` and bottom `<body>` to import necessary widget-specific CSS (`<link>`) and JS (`<script>`) dependencies.
3. Resolve correct relative paths from the root directory.
4. Extract the inline initialization scripts from the template into a clean, new javascript file within `/js/`.

---

## 🛠️ Getting Started

To launch your next project:

1. **Clone the Repository**
   Pull down this starter kit layout.
   ```bash
   git clone https://github.com/chorta/antigravity-code-kit/tree/main 
   cd antigravity-code-kit
   ```

2. **Open your IDE with Google Antigravity enabled.**
3. **Draft your initial Instruction:**
   *Example: "Create a new page using the 'three-column.html' template. In the middle canvas, construct a new user registration form utilizing standard fields from our kitchen sink. Place the form validation logic into 'js/registration.js'."*