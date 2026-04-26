import { describe, expect, it } from 'vitest'
import { checks, workflowSteps } from './templateData'

describe('template metadata', () => {
  it('documents the default verification commands covered by CI', () => {
    expect(checks).toEqual([
      'ESLint for static code quality',
      'TypeScript project references for type safety',
      'Vitest for fast unit coverage',
      'Playwright smoke tests for browser confidence',
    ])
  })

  it('keeps the contribution flow focused on reviewable PRs', () => {
    expect(workflowSteps).toContain('Open a PR with test evidence and risks')
    expect(workflowSteps.at(-1)).toBe(
      'Merge the default branch to update the production Pages site',
    )
  })
})
