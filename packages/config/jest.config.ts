import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  testEnvironment: 'node',
  collectCoverage: true
}

export default config
