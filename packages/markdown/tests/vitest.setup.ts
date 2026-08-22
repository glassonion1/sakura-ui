/// <reference types="vitest" />
// The /vitest entry, not the bare one: that one carries types written against
// jest's globals, which are not here and which stop the tests typechecking.
import '@testing-library/jest-dom/vitest'
