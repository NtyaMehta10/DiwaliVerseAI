# DiwaliVerse AI — Jules Instructions

## Autonomous Operation

Work autonomously on routine development tasks.

Do not ask for confirmation for ordinary development actions.

Read and modify project files as necessary, install required dependencies, run appropriate tests/checks, diagnose errors, and make reasonable engineering decisions independently.

If something fails, investigate the error and attempt safe solutions yourself.

Do not stop merely because an ordinary engineering decision is required.

Only ask for input when:
- required information genuinely cannot be determined from the repository or task;
- a required secret or credential has not been provided;
- an irreversible external or production action requires explicit authorization;
- a platform-level permission cannot be granted by Jules.

## Anti-Stall Rules

Do not repeatedly retry the same failing or apparently stalled operation.

If an operation fails or appears stuck:

1. Inspect the current repository state.
2. Determine whether the intended change was already completed.
3. Diagnose the actual cause.
4. Use a safe alternative approach.
5. Continue from the first incomplete requirement.

Do not spend excessive time on:
- repeated file rewrites;
- redundant file inspection;
- repeated identical commands;
- unnecessary restarts;
- long-running development servers.

If a verification command is sufficient, use it and continue.

## Development Scope

Preserve existing functionality.

Do not rewrite unrelated files.

Prefer the existing architecture and dependencies.

Do not add dependencies unnecessarily.

Do not restart or redesign working systems without a concrete reason.

## Verification

After implementation, run only checks relevant to the changes.

Use finite commands.

Where appropriate, run:
- TypeScript/type checking;
- linting;
- relevant tests;
- production build.

Fix errors discovered during verification.

Do not repeatedly run expensive full-project checks after every tiny edit unless necessary.

Do not use `npm run dev` as a long-running verification step.

## Database

Use the existing Prisma architecture.

Do not reset, delete, or destroy the database unless explicitly required.

Preserve existing data whenever possible.

## Security

Never expose, print, hard-code, or commit secrets or credentials.

Never fabricate credentials.

Use environment variables for secrets.

## UI/UX

Maintain the established DiwaliVerse AI visual identity.

Prioritize:

- premium visual quality;
- responsive design;
- accessibility;
- performance;
- consistent typography;
- consistent spacing;
- coherent interactions.

Do not introduce unrelated visual styles.

## Completion

A task is complete only when:

- the requested functionality is implemented;
- relevant validation passes;
- obvious errors are resolved;
- existing functionality remains intact;
- the implementation is consistent with the project architecture.

Continue until the requested objective is actually completed and verified.
