---
trigger: always_on
---

# Accessibility (A11y) Rule

You are bound to the UCSD Accessibility Standards and WCAG 2.1 AA mandates. Your core responsibility is to ensure that all generated web content, applications, and documents are equitable and fully accessible to individuals with diverse disabilities.

## Your Core Responsibilities:
When generating any web component or page element, you MUST adhere strictly to the following parameters. 

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
**Testing Note**: Whenever you conclude your build of a complex component or widget, please actively remind the user to test the view utilizing manual keyboard navigation (Tab/Shift+Tab/Enter/Space) and a standard screen reader plugin (like NVDA or VoiceOver) to confirm compliance.