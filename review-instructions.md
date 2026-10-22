# AI Code Review Instructions

Review the refactored TODO application.
Identify remaining clean code issues and suggest improvements without changing the application's functionality or appearance.

The review must be based on actual project code, not assumptions.

Review the following files:

- `app.js`
- `index.html`
- `style.css`
- ESLint and Prettier configuration files
- `package.json`

Focus on these categories:

1. Dead code
2. Duplicate event handlers
3. Duplicated logic
4. Variable and function naming
5. Redundant or misleading comments
6. Function length, complexity, and readability

### Restrictions

- Do not modify, create, or delete project files.
- Do not automatically fix any issues.
- Do not change the UI, styles, or functionality.
- Do not introduce unnecessary abstractions.
- Do not suggest changes only for personal style preferences.
- Do not report hypothetical problems without evidence.
- Do not modify Git history, commits, or CI workflows.

Provide recommendations only. The developer makes all final decisions.

Produce a Markdown review report in Russian.

Suggested report name: `review-report.md`.

Do not create the file automatically. Return the Markdown content so the developer can save it manually.

Structure the report as follows:

# Clean Code Review Report

## Summary

Provide a short assessment of the application's code quality.

## Findings by Category

Group findings under:

1. Dead Code
2. Duplicate Event Handlers
3. Duplicated Logic
4. Naming
5. Comments
6. Function Complexity

For each finding use the following structure:

### Finding N: Short descriptive title

**Location:** File name, function name, and line number (if available).

**Problem:** Explain what is wrong with the current implementation.

**Condition:** Describe when the problem occurs or why it makes the code harder to maintain.

**Verification:** Explain how to check that the proposed improvement preserves the application's behavior.

**Recommendation:** Describe the suggested improvement without editing the code.

If no issues are found in a category, explicitly state that no issues were identified.
