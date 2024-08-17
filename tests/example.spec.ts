import { test, expect } from '@playwright/test';

let context;
let page;

test.beforeAll('Initial Setup',async ({ browser }) => {
  context = await browser.newContext()
  await context.tracing.start(
    {
      screenshots: true,
      snapshots: true

    })

  page = await context.newPage()

})



test('has title',{tag:'@Basic'}, async () => {

// tracing on test level
  // await context.tracing.start(
  //     {
  //       screenshots: true,
  //       snapshots: true

  //     }
  //   )
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // await context.tracing.stop({path: 'test1_trace.zip'})

});

test('get started link @smoke', async () => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();


});

test.afterEach('Status Check',async ({page}) => {
 
  console.log('Finished ${test.info().title} with status ${test.info().status}')
  if(test.info().status != test.info().expectedStatus){
    console.log('Did not run as expected ended up with ${test.info().error}')
  }
})

test.afterAll('Teardown', async () => {
  console.log("Done with all tests")
  await context.tracing.stop({ path: 'test1_trace.zip' })

})
