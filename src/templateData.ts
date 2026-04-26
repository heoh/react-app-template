export const checks = [
  'ESLint for static code quality',
  'TypeScript project references for type safety',
  'Vitest for fast unit coverage',
  'Playwright smoke tests for browser confidence',
] as const

export const workflowSteps = [
  'Open an issue to capture intent and scope',
  'Push a branch to publish a Pages preview',
  'Open a PR with test evidence and risks',
  'Merge the default branch to update the production Pages site',
] as const
