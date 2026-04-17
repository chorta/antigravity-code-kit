---
trigger: always_on
---

# Rule: Automatic Navigation Synchronization
**Trigger:** Whenever a new HTML page, directory, or section is created or modified in the project root or outside of the `core-template` directory.

## Navigation Structure Awareness
All layout templates in this project contain built-in navigation structures that must be maintained. When adding new pages or directories to the project (excluding the `core-template` folder), you must automatically update the navigation to reflect the new structure.

There are three primary navigation blocks to be aware of:
1. **Mobile Offcanvas Nav:** Located under `<!-- mobile offcanvas nav -->` with the class `.navmenu.offcanvas`.
2. **Desktop Navbar:** Located under `<!-- navbar -->` with the class `.navbar-default.navbar-static-top`.
3. **Side Nav:** Located within `<article class="main-content-nav">`. Note: This is present in `two-column.html` and `three-column.html`, but is not present in `blank-slate.html`.

## Synchronization Rules
- **Keep Navs in Sync:** Whenever a new file or directory is introduced, you must automatically update both the **mobile offcanvas menu** and the **desktop nav** to include links to the new content. This ensures the primary navigation remains current.
- **Relative Pathing:** Ensure that the `href` attributes in the newly added navigation items correctly point to the new files, carefully taking into account relative pathing if the files are placed inside a subdirectory.
- **Side Nav Context:** If modifying or creating a file based on a template that includes a side nav (e.g., `two-column.html`), update the `.navbar-list` to reflect sub-pages or related sections appropriate for the new page's context.
- **Scope Restriction:** Do NOT modify the navigation structures inside the `core-template/` directory. This rule applies exclusively to active project files at the root level or in custom subdirectories outside of the read-only core environment.

## Execution Protocol
When performing tasks that result in new pages or altered site structure, you must proactively parse the affected HTML files in the workspace, locate the designated navigation wrappers, and inject the necessary `<li>` and `<a>` tags to seamlessly integrate the new pages into the global navigation across both desktop and mobile menus.