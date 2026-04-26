import { expect, test } from '@playwright/test'

test('loads the React template shell', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text())
    }
  })

  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Production-ready React app starter' }),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Vite Docs' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'React Docs' })).toBeVisible()

  await expect(page.getByRole('heading', { name: 'Verification' })).toBeVisible()
  await expect(page.getByText('Playwright smoke tests for browser confidence')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Delivery Flow' })).toBeVisible()
  expect(consoleErrors).toEqual([])
})
