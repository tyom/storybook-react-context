import page from './page-model';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

const getUrlPath = (path = '') => BASE_URL + path;

fixture('storybook-react-context').meta({ target: 'react' }).page(getUrlPath());

test('React context is set from useEffect', async (t) => {
  await page.selectSidebarItem('Change On Effect');
  // decrease timeout. Setting on mount is emulated with 2s timeout in component
  await page.assertTextInPreview('#loading-status', '⏳ Loading…', {
    timeout: 1500,
  });
  await page.assertTextInPreview('#auth-status', 'Unauthenticated', {
    timeout: 1500,
  });
  await t.wait(2000);
  await page.assertTextInPreview('#loading-status', '✅ Loaded');
  await page.assertTextInPreview('#auth-status', 'Authenticated', {
    timeout: 1500,
  });
});

test('React context is set on button click', async () => {
  await page.selectSidebarItem('Change On Interaction');

  await page.assertTextInPreview('#auth-status', 'Unauthenticated');

  await page.clickInPreview('#auth-toggle-button');
  await page.assertTextInPreview('#auth-status', 'Authenticated');
  await page.clickInPreview('#auth-toggle-button');
  await page.assertTextInPreview('#auth-status', 'Unauthenticated');

  await page.assertTextInPreview('#count-status', 'Count: 0');
  await page.clickInPreview('#count-button');
  await page.clickInPreview('#count-button');
  await page.clickInPreview('#count-button');
  await page.assertTextInPreview('#count-status', 'Count: 3');
});

test('React context is set statically in story parameters', async () => {
  await page.selectSidebarItem('Static Initial Context');

  await page.assertTextInPreview('#auth-status', 'Authenticated');
});

test('React context is updated with Storybook Controls', async (t) => {
  await page.selectSidebarItem('Update Context From Args');

  await page.assertTextInPreview('#auth-status', 'Unauthenticated');

  await page.selectPanel('Controls');

  await t.click(page.controlsPanel.find('label[for=control-authenticated]'));

  await page.assertTextInPreview('#auth-status', 'Authenticated');

  await t.click(page.controlsPanel.find('label[for=control-authenticated]'));
  await page.assertTextInPreview('#auth-status', 'Unauthenticated');

  await page.assertTextInPreview('#count-status', 'Count: 2');
  await t.typeText(page.controlsPanel.find('#control-count'), '10', { replace: true });
  await page.assertTextInPreview('#count-status', 'Count: 10');
});
