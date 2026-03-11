---
trigger: always_on
---

# Rule: Brand & Accessibility Protection
**Trigger:** Always active

- **Workspace Constraint:** You are restricted to modifying code only within `<div id="ag-app-canvas">`.
- **CSS Strictness:** Do not generate `<style>` tags or inline styles. Use only the utility classes defined in `/core-template/base.css`.
- **DOM Integrity:** Never modify the `<nav>` or `<footer>` elements. If the user asks for layout changes, inform them that the Shell is protected by Workspace Rules.
- **A11y Requirement:** Every new `<img>` must have an `alt` tag, and every `<button>` must have an `aria-label`.