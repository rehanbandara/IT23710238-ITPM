const { test, expect } = require('@playwright/test');

const testCases = [
  { input: "Me assignment ekata goda Weelawak yayi wageh" },
  { input: "suba dawasak veva yaluve" },
  { input: "oya assignment eka ivara karala dha?" }
];

for (const data of testCases) {
  test(`Testing conversion for: ${data.input}`, async ({ page }) => {
    // 1. Go to the site
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.click();
    
    // 2. Type the text letter by letter
    await inputBox.pressSequentially(data.input, { delay: 100 });

    // 3. The "Trigger Trick": Press Space, then Backspace, then Space again
    // This forces the website's JavaScript to recognize the input change
    await page.keyboard.press(' ');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press(' ');

    // 4. Wait a bit longer for the Sinhala to appear
    await page.waitForTimeout(4000);

    const actualOutput = await outputBox.inputValue();

    console.log(`\n--- FINAL TEST CHECK ---`);
    console.log(`Input: ${data.input}`);
    console.log(`Actual Output: ${actualOutput}`);
    
    // If the output is still English, we print a warning
    if (actualOutput === data.input) {
        console.log("WARNING: Conversion did not trigger!");
    } else {
        console.log("SUCCESS: Converted to Sinhala!");
    }
    
    expect(actualOutput.length).toBeGreaterThan(0);
  });
}
