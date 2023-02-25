import { sakuraConfig } from '../src'

const config = {
  mode: 'jit',
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  plugins: []
}

describe('run tests', () => {
  it('tests the sakuraCOnfig', () => {
    const c = sakuraConfig(config)
    console.log(c)
    expect(1 + 2).toBe(3)
  })
})
