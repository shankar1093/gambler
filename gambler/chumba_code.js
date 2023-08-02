const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 790,
            height: 925
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('https://www.chumbacasino.com/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/LOGIN'
            ],
            [
                'a.css-1irezbs'
            ],
            [
                'xpath///*[@id="__next"]/header/div/div/a[2]'
            ],
            [
                'pierce/a.css-1irezbs'
            ],
            [
                'text/Login'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/LOGIN'
            ],
            [
                'a.css-1irezbs'
            ],
            [
                'xpath///*[@id="__next"]/header/div/div/a[2]'
            ],
            [
                'pierce/a.css-1irezbs'
            ],
            [
                'text/Login'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 67.6875,
            y: 12.7109375,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#login_email-input'
            ],
            [
                'xpath///*[@id="login_email-input"]'
            ],
            [
                'pierce/#login_email-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#login_email-input'
            ],
            [
                'xpath///*[@id="login_email-input"]'
            ],
            [
                'pierce/#login_email-input'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 222,
            y: 19.015625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#login_email-input'
            ],
            [
                'xpath///*[@id="login_email-input"]'
            ],
            [
                'pierce/#login_email-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#login_email-input'
            ],
            [
                'xpath///*[@id="login_email-input"]'
            ],
            [
                'pierce/#login_email-input'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'xagolo1019@naymedia.com')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'xagolo1019@naymedia.com');
        } else {
          await changeElementValue(element, 'xagolo1019@naymedia.com');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 77,
            y: 20.8203125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 155,
            y: 16.8203125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#login_password-input'
            ],
            [
                'xpath///*[@id="login_password-input"]'
            ],
            [
                'pierce/#login_password-input'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'M/qpKtV/4VxF_%j')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'M/qpKtV/4VxF_%j');
        } else {
          await changeElementValue(element, 'M/qpKtV/4VxF_%j');
        }
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/LOG IN'
            ],
            [
                '#login_submit-button'
            ],
            [
                'xpath///*[@id="login_submit-button"]'
            ],
            [
                'pierce/#login_submit-button'
            ],
            [
                'text/Log in'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/LOG IN'
            ],
            [
                '#login_submit-button'
            ],
            [
                'xpath///*[@id="login_submit-button"]'
            ],
            [
                'pierce/#login_submit-button'
            ],
            [
                'text/Log in'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 170,
            y: 19.8203125,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/CLOSE'
            ],
            [
                '#daily-bonus__close'
            ],
            [
                'xpath///*[@id="daily-bonus__close"]'
            ],
            [
                'pierce/#daily-bonus__close'
            ],
            [
                'text/CLOSE'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/CLOSE'
            ],
            [
                '#daily-bonus__close'
            ],
            [
                'xpath///*[@id="daily-bonus__close"]'
            ],
            [
                'pierce/#daily-bonus__close'
            ],
            [
                'text/CLOSE'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 80,
            y: 27.5,
          },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/Postal Request Code'
            ],
            [
                '#footer__postal-request-code'
            ],
            [
                'xpath///*[@id="footer__postal-request-code"]'
            ],
            [
                'pierce/#footer__postal-request-code'
            ],
            [
                'text/Postal Request'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Postal Request Code'
            ],
            [
                '#footer__postal-request-code'
            ],
            [
                'xpath///*[@id="footer__postal-request-code"]'
            ],
            [
                'pierce/#footer__postal-request-code'
            ],
            [
                'text/Postal Request'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 99.25,
            y: 3.0546875,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/Postal Request Codes',
                'aria/[role="paragraph"]'
            ],
            [
                'div.value2348 > div:nth-of-type(2) > div p'
            ],
            [
                'xpath///*[@id="get-postal-request-code"]/p'
            ],
            [
                'pierce/div.value2348 > div:nth-of-type(2) > div p'
            ],
            [
                'text/Postal Request Codes'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/Postal Request Codes',
                'aria/[role="paragraph"]'
            ],
            [
                'div.value2348 > div:nth-of-type(2) > div p'
            ],
            [
                'xpath///*[@id="get-postal-request-code"]/p'
            ],
            [
                'pierce/div.value2348 > div:nth-of-type(2) > div p'
            ],
            [
                'text/Postal Request Codes'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 237,
            y: 5,
          },
        });
    }
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: 'captcha_page.png', fullPage: true });
    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      }[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        let result = compFn(elements.length, count);
        const elementsHandle = await frame.evaluateHandle((...elements) => {
          return elements;
        }, ...elements);
        await Promise.all(elements.map((element) => element.dispose()));
        if (result && (properties || attributes)) {
          result = await elementsHandle.evaluate(
            (elements, properties, attributes) => {
              for (const element of elements) {
                if (attributes) {
                  for (const [name, value] of Object.entries(attributes)) {
                    if (element.getAttribute(name) !== value) {
                      return false;
                    }
                  }
                }
                if (properties) {
                  if (!isDeepMatch(properties, element)) {
                    return false;
                  }
                }
              }
              return true;

              function isDeepMatch(a, b) {
                if (a === b) {
                  return true;
                }
                if ((a && !b) || (!a && b)) {
                  return false;
                }
                if (!(a instanceof Object) || !(b instanceof Object)) {
                  return false;
                }
                for (const [key, value] of Object.entries(a)) {
                  if (!isDeepMatch(value, b[key])) {
                    return false;
                  }
                }
                return true;
              }
            },
            properties,
            attributes
          );
        }
        await elementsHandle.dispose();
        return result === visible;
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      const timeoutId = setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          clearTimeout(timeoutId);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
      await element.select(value);
      await element.evaluateHandle((e) => {
        e.blur();
        e.focus();
      });
    }

    async function changeElementValue(element, value) {
      await element.focus();
      await element.evaluate((input, value) => {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
