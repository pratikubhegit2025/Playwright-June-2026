import path from 'node:path';
import type { Page, TestInfo } from '@playwright/test';

const sanitize = (value: string): string => value.replace(/[^a-zA-Z0-9-_]/g, '-');

export class ScreenshotHelper {
  static async capture(page: Page, testInfo: TestInfo, step: string): Promise<string> {
    const fileName = `${sanitize(testInfo.title)}-${sanitize(step)}-${Date.now()}.png`;
    const outputPath = path.join(testInfo.outputDir, fileName);

    await page.screenshot({
      path: outputPath,
      fullPage: true,
    });

    await testInfo.attach(fileName, {
      path: outputPath,
      contentType: 'image/png',
    });

    return outputPath;
  }
}
