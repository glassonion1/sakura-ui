import sakuraPlugin from '../src'

describe('run tests', () => {
  it('tests the sakuraCOnfig', () => {
    const config = {
      mode: 'jit',
      content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
      plugins: [sakuraPlugin]
    }
    console.log(config)
    expect(1 + 2).toBe(3)
  })
})
