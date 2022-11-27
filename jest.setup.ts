// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/matchers'

import { mockServer } from './src/mocks/testing'

beforeAll(() => {
  mockServer.listen({
    onUnhandledRequest: 'error',
  })
})
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())
