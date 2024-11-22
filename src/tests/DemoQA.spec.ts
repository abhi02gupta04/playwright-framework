import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
] as const;

test.describe('Mark all as completed', () => {
  test.beforeEach(async ({ page }) => {
    // await createDefaultTodos(page);
    // await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test.afterEach(async ({ page }) => {
    // await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should allow me to mark all items as completed', async ({ page }) => {
    // Complete all todos.
    // await page.getByLabel('Mark all as complete').check();

    // // Ensure all todos have 'completed' class.
    // await expect(page.getByTestId('todo-item')).toHaveClass(['completed', 'completed', 'completed']);
    // await checkNumberOfCompletedTodosInLocalStorage(page, 3);
  });

});