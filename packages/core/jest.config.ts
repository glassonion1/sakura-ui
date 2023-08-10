import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>']
}

export default config
