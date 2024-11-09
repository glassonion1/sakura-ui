const notNegTabIndex = ':not([tabindex^="-"])'
const notDisabled = ':not(:disabled)'

const selectors = [
  `a[href]${notNegTabIndex}`,
  `area[href]${notNegTabIndex}`,
  `input:not([type="hidden"])${notNegTabIndex}${notDisabled}`,
  `select${notNegTabIndex}${notDisabled}`,
  `textarea${notNegTabIndex}${notDisabled}`,
  `button${notNegTabIndex}${notDisabled}`,
  `details > summary:first-of-type${notNegTabIndex}`,
  `details:not(:has(> summary))${notNegTabIndex}`,
  `iframe${notNegTabIndex}`,
  `audio[controls]${notNegTabIndex}`,
  `video[controls]${notNegTabIndex}`,
  `[contenteditable]${notNegTabIndex}`,
  `[tabindex]${notNegTabIndex}`
]

export const focusableSelector = selectors.join(',')
