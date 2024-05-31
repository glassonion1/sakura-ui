import plugin from 'tailwindcss/plugin'
import tokens from '@digital-go-jp/design-tokens'

const booleans = [
  'atomic',
  'busy',
  'checked',
  'current',
  'disabled',
  'expanded',
  'grabbed',
  'haspopup',
  'hidden',
  'invalid',
  'live',
  'modal',
  'multiline',
  'multiselectable',
  'pressed',
  'readonly',
  'required',
  'selected'
]

const enumerables = {
  autocomplete: ['both', 'inline', 'list', 'none'],
  current: ['date', 'location', 'page', 'step', 'time'],
  dropeffect: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
  haspopup: ['dialog', 'grid', 'listbox', 'menu', 'tree'],
  orientation: ['horizontal', 'undefined', 'vertial'],
  relevant: ['additions', 'all', 'removals', 'text'],
  sort: ['ascending', 'descending', 'none', 'other']
}

const sakuraPlugin = plugin(
  ({ addBase, addVariant }) => {
    addBase({
      '@font-face': {
        fontFamily: 'Material Symbols Outlined',
        fontWeight: '300',
        fontStyle: 'normal'
      }
    })
    const addAriaVariant = (name: string, value: string) => {
      addVariant(name, `[${name}="${value}"]&`)
      addVariant(`peer-${name}`, `:merge(.peer)[${name}="${value}"] ~ &`)
      addVariant(`group-${name}`, `:merge(.group)[${name}="${value}"] &`)
    }
    const addAriaEnumVariant = (name: string, value: string) => {
      addVariant(`${name}-${value}`, `[${name}="${value}"]&`)
      addVariant(
        `peer-${name}-${value}`,
        `:merge(.peer)[${name}="${value}"] ~ &`
      )
      addVariant(
        `group-${name}-${value}`,
        `:merge(.group)[${name}="${value}"] &`
      )
    }

    for (const attribute of booleans) {
      addAriaVariant(`aria-${attribute}`, 'true')
    }

    for (const [attribute, values] of Object.entries(enumerables)) {
      for (const value of values) {
        addAriaEnumVariant(`aria-${attribute}`, value)
      }
    }
  },
  {
    theme: {
      extend: {
        fontSize: {
          'h-xl': [
            tokens.FontSize[45].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_4'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h1
          'h-lg': [
            tokens.FontSize[36].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_4'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h1 Mobile
          'h-lg-m': [
            tokens.FontSize[32].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h2
          'h-med': [
            tokens.FontSize[32].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h2 Mobile
          'h-med-m': [
            tokens.FontSize[28].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h3
          'h-sm': [
            tokens.FontSize[28].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h3 Mobile
          'h-sm-m': [
            tokens.FontSize[24].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h4
          'h-xs': [
            tokens.FontSize[24].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h4 Mobile
          'h-xs-m': [
            tokens.FontSize[22].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h5 h6
          'h-xxs': [
            tokens.FontSize[20].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_5'].value,
              letterSpacing: '0.02em'
            }
          ],
          // h5 h6 Mobile
          'h-xxs-m': [
            tokens.FontSize[18].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_6'].value,
              letterSpacing: '0.02em'
            }
          ],
          base: [
            tokens.FontSize[16].value,
            {
              fontWeight: tokens.FontWeight[400].value,
              lineHeight: tokens.LineHeight['1_7'].value,
              letterSpacing: '0.02em'
            }
          ],
          'base-sm': [
            tokens.FontSize[14].value,
            {
              fontWeight: tokens.FontWeight[400].value,
              lineHeight: tokens.LineHeight['1_3'].value
            }
          ],
          'tb-header': [
            tokens.FontSize[16].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_2'].value
            }
          ],
          'tb-data': [
            tokens.FontSize[16].value,
            {
              fontWeight: tokens.FontWeight[400].value,
              lineHeight: tokens.LineHeight['1_2'].value
            }
          ],
          ui: [
            tokens.FontSize[16].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_0'].value,
              letterSpacing: '0.02em'
            }
          ],
          'ui-sm': [
            tokens.FontSize[14].value,
            {
              fontWeight: tokens.FontWeight[700].value,
              lineHeight: tokens.LineHeight['1_0'].value,
              letterSpacing: '0.02em'
            }
          ],
          code: [
            tokens.FontSize[16].value,
            {
              fontWeight: tokens.FontWeight[400].value,
              lineHeight: tokens.LineHeight['1_5'].value
            }
          ]
        },
        colors: {
          white: tokens.Color.Neutral.White.value,
          black: tokens.Color.Neutral.Black.value,
          sea: {
            50: tokens.Color.Primitive.Sea[50].value,
            100: tokens.Color.Primitive.Sea[100].value,
            200: tokens.Color.Primitive.Sea[200].value,
            300: tokens.Color.Primitive.Sea[300].value,
            400: tokens.Color.Primitive.Sea[400].value,
            500: tokens.Color.Primitive.Sea[500].value,
            600: tokens.Color.Primitive.Sea[600].value,
            700: tokens.Color.Primitive.Sea[700].value,
            800: tokens.Color.Primitive.Sea[800].value,
            900: tokens.Color.Primitive.Sea[900].value,
            1000: tokens.Color.Primitive.Sea[1000].value,
            1100: tokens.Color.Primitive.Sea[1100].value,
            1200: tokens.Color.Primitive.Sea[1200].value
          },
          sumi: {
            50: tokens.Color.Primitive.Sumi[50].value,
            100: tokens.Color.Primitive.Sumi[100].value,
            200: tokens.Color.Primitive.Sumi[200].value,
            300: tokens.Color.Primitive.Sumi[300].value,
            400: tokens.Color.Primitive.Sumi[400].value,
            500: tokens.Color.Primitive.Sumi[500].value,
            600: tokens.Color.Primitive.Sumi[600].value,
            700: tokens.Color.Primitive.Sumi[700].value,
            800: tokens.Color.Primitive.Sumi[800].value,
            900: tokens.Color.Primitive.Sumi[900].value,
            1000: tokens.Color.Primitive.Sumi[1000].value,
            1100: tokens.Color.Primitive.Sumi[1100].value,
            1200: tokens.Color.Primitive.Sumi[1200].value
          },
          forest: {
            50: tokens.Color.Primitive.Forest[50].value,
            100: tokens.Color.Primitive.Forest[100].value,
            200: tokens.Color.Primitive.Forest[200].value,
            300: tokens.Color.Primitive.Forest[300].value,
            400: tokens.Color.Primitive.Forest[400].value,
            500: tokens.Color.Primitive.Forest[500].value,
            600: tokens.Color.Primitive.Forest[600].value,
            700: tokens.Color.Primitive.Forest[700].value,
            800: tokens.Color.Primitive.Forest[800].value,
            900: tokens.Color.Primitive.Forest[900].value,
            1000: tokens.Color.Primitive.Forest[1000].value,
            1100: tokens.Color.Primitive.Forest[1100].value,
            1200: tokens.Color.Primitive.Forest[1200].value
          },
          wood: {
            50: tokens.Color.Primitive.Wood[50].value,
            100: tokens.Color.Primitive.Wood[100].value,
            200: tokens.Color.Primitive.Wood[200].value,
            300: tokens.Color.Primitive.Wood[300].value,
            400: tokens.Color.Primitive.Wood[400].value,
            500: tokens.Color.Primitive.Wood[500].value,
            600: tokens.Color.Primitive.Wood[600].value,
            700: tokens.Color.Primitive.Wood[700].value,
            800: tokens.Color.Primitive.Wood[800].value,
            900: tokens.Color.Primitive.Wood[900].value,
            1000: tokens.Color.Primitive.Wood[1000].value,
            1100: tokens.Color.Primitive.Wood[1100].value,
            1200: tokens.Color.Primitive.Wood[1200].value
          },
          sun: {
            50: tokens.Color.Primitive.Sun[50].value,
            100: tokens.Color.Primitive.Sun[100].value,
            200: tokens.Color.Primitive.Sun[200].value,
            300: tokens.Color.Primitive.Sun[300].value,
            400: tokens.Color.Primitive.Sun[400].value,
            500: tokens.Color.Primitive.Sun[500].value,
            600: tokens.Color.Primitive.Sun[600].value,
            700: tokens.Color.Primitive.Sun[700].value,
            800: tokens.Color.Primitive.Sun[800].value,
            900: tokens.Color.Primitive.Sun[900].value,
            1000: tokens.Color.Primitive.Sun[1000].value,
            1100: tokens.Color.Primitive.Sun[1100].value,
            1200: tokens.Color.Primitive.Sun[1200].value
          },
          blue: {
            50: tokens.Color.Primitive.Blue[50].value,
            100: tokens.Color.Primitive.Blue[100].value,
            200: tokens.Color.Primitive.Blue[200].value,
            300: tokens.Color.Primitive.Blue[300].value,
            400: tokens.Color.Primitive.Blue[400].value,
            500: tokens.Color.Primitive.Blue[500].value,
            600: tokens.Color.Primitive.Blue[600].value,
            700: tokens.Color.Primitive.Blue[700].value,
            800: tokens.Color.Primitive.Blue[800].value,
            900: tokens.Color.Primitive.Blue[900].value,
            1000: tokens.Color.Primitive.Blue[1000].value,
            1100: tokens.Color.Primitive.Blue[1100].value,
            1200: tokens.Color.Primitive.Blue[1200].value
          },
          'light-blue': {
            50: tokens.Color.Primitive.LightBlue[50].value,
            100: tokens.Color.Primitive.LightBlue[100].value,
            200: tokens.Color.Primitive.LightBlue[200].value,
            300: tokens.Color.Primitive.LightBlue[300].value,
            400: tokens.Color.Primitive.LightBlue[400].value,
            500: tokens.Color.Primitive.LightBlue[500].value,
            600: tokens.Color.Primitive.LightBlue[600].value,
            700: tokens.Color.Primitive.LightBlue[700].value,
            800: tokens.Color.Primitive.LightBlue[800].value,
            900: tokens.Color.Primitive.LightBlue[900].value,
            1000: tokens.Color.Primitive.LightBlue[1000].value,
            1100: tokens.Color.Primitive.LightBlue[1100].value,
            1200: tokens.Color.Primitive.LightBlue[1200].value
          },
          cyan: {
            50: tokens.Color.Primitive.Cyan[50].value,
            100: tokens.Color.Primitive.Cyan[100].value,
            200: tokens.Color.Primitive.Cyan[200].value,
            300: tokens.Color.Primitive.Cyan[300].value,
            400: tokens.Color.Primitive.Cyan[400].value,
            500: tokens.Color.Primitive.Cyan[500].value,
            600: tokens.Color.Primitive.Cyan[600].value,
            700: tokens.Color.Primitive.Cyan[700].value,
            800: tokens.Color.Primitive.Cyan[800].value,
            900: tokens.Color.Primitive.Cyan[900].value,
            1000: tokens.Color.Primitive.Cyan[1000].value,
            1100: tokens.Color.Primitive.Cyan[1100].value,
            1200: tokens.Color.Primitive.Cyan[1200].value
          },
          green: {
            50: tokens.Color.Primitive.Green[50].value,
            100: tokens.Color.Primitive.Green[100].value,
            200: tokens.Color.Primitive.Green[200].value,
            300: tokens.Color.Primitive.Green[300].value,
            400: tokens.Color.Primitive.Green[400].value,
            500: tokens.Color.Primitive.Green[500].value,
            600: tokens.Color.Primitive.Green[600].value,
            700: tokens.Color.Primitive.Green[700].value,
            800: tokens.Color.Primitive.Green[800].value,
            900: tokens.Color.Primitive.Green[900].value,
            1000: tokens.Color.Primitive.Green[1000].value,
            1100: tokens.Color.Primitive.Green[1100].value,
            1200: tokens.Color.Primitive.Green[1200].value
          },
          lime: {
            50: tokens.Color.Primitive.Lime[50].value,
            100: tokens.Color.Primitive.Lime[100].value,
            200: tokens.Color.Primitive.Lime[200].value,
            300: tokens.Color.Primitive.Lime[300].value,
            400: tokens.Color.Primitive.Lime[400].value,
            500: tokens.Color.Primitive.Lime[500].value,
            600: tokens.Color.Primitive.Lime[600].value,
            700: tokens.Color.Primitive.Lime[700].value,
            800: tokens.Color.Primitive.Lime[800].value,
            900: tokens.Color.Primitive.Lime[900].value,
            1000: tokens.Color.Primitive.Lime[1000].value,
            1100: tokens.Color.Primitive.Lime[1100].value,
            1200: tokens.Color.Primitive.Lime[1200].value
          },
          yellow: {
            50: tokens.Color.Primitive.Yellow[50].value,
            100: tokens.Color.Primitive.Yellow[100].value,
            200: tokens.Color.Primitive.Yellow[200].value,
            300: tokens.Color.Primitive.Yellow[300].value,
            400: tokens.Color.Primitive.Yellow[400].value,
            500: tokens.Color.Primitive.Yellow[500].value,
            600: tokens.Color.Primitive.Yellow[600].value,
            700: tokens.Color.Primitive.Yellow[700].value,
            800: tokens.Color.Primitive.Yellow[800].value,
            900: tokens.Color.Primitive.Yellow[900].value,
            1000: tokens.Color.Primitive.Yellow[1000].value,
            1100: tokens.Color.Primitive.Yellow[1100].value,
            1200: tokens.Color.Primitive.Yellow[1200].value
          },
          orange: {
            50: tokens.Color.Primitive.Orange[50].value,
            100: tokens.Color.Primitive.Orange[100].value,
            200: tokens.Color.Primitive.Orange[200].value,
            300: tokens.Color.Primitive.Orange[300].value,
            400: tokens.Color.Primitive.Orange[400].value,
            500: tokens.Color.Primitive.Orange[500].value,
            600: tokens.Color.Primitive.Orange[600].value,
            700: tokens.Color.Primitive.Orange[700].value,
            800: tokens.Color.Primitive.Orange[800].value,
            900: tokens.Color.Primitive.Orange[900].value,
            1000: tokens.Color.Primitive.Orange[1000].value,
            1100: tokens.Color.Primitive.Orange[1100].value,
            1200: tokens.Color.Primitive.Orange[1200].value
          },
          red: {
            50: tokens.Color.Primitive.Red[50].value,
            100: tokens.Color.Primitive.Red[100].value,
            200: tokens.Color.Primitive.Red[200].value,
            300: tokens.Color.Primitive.Red[300].value,
            400: tokens.Color.Primitive.Red[400].value,
            500: tokens.Color.Primitive.Red[500].value,
            600: tokens.Color.Primitive.Red[600].value,
            700: tokens.Color.Primitive.Red[700].value,
            800: tokens.Color.Primitive.Red[800].value,
            900: tokens.Color.Primitive.Red[900].value,
            1000: tokens.Color.Primitive.Red[1000].value,
            1100: tokens.Color.Primitive.Red[1100].value,
            1200: tokens.Color.Primitive.Red[1200].value
          },
          magenta: {
            50: tokens.Color.Primitive.Magenta[50].value,
            100: tokens.Color.Primitive.Magenta[100].value,
            200: tokens.Color.Primitive.Magenta[200].value,
            300: tokens.Color.Primitive.Magenta[300].value,
            400: tokens.Color.Primitive.Magenta[400].value,
            500: tokens.Color.Primitive.Magenta[500].value,
            600: tokens.Color.Primitive.Magenta[600].value,
            700: tokens.Color.Primitive.Magenta[700].value,
            800: tokens.Color.Primitive.Magenta[800].value,
            900: tokens.Color.Primitive.Magenta[900].value,
            1000: tokens.Color.Primitive.Magenta[1000].value,
            1100: tokens.Color.Primitive.Magenta[1100].value,
            1200: tokens.Color.Primitive.Magenta[1200].value
          },
          purple: {
            50: tokens.Color.Primitive.Purple[50].value,
            100: tokens.Color.Primitive.Purple[100].value,
            200: tokens.Color.Primitive.Purple[200].value,
            300: tokens.Color.Primitive.Purple[300].value,
            400: tokens.Color.Primitive.Purple[400].value,
            500: tokens.Color.Primitive.Purple[500].value,
            600: tokens.Color.Primitive.Purple[600].value,
            700: tokens.Color.Primitive.Purple[700].value,
            800: tokens.Color.Primitive.Purple[800].value,
            900: tokens.Color.Primitive.Purple[900].value,
            1000: tokens.Color.Primitive.Purple[1000].value,
            1100: tokens.Color.Primitive.Purple[1100].value,
            1200: tokens.Color.Primitive.Purple[1200].value
          },
          'solid-grey': {
            50: tokens.Color.Neutral.SolidGrey[50].value,
            100: tokens.Color.Neutral.SolidGrey[100].value,
            200: tokens.Color.Neutral.SolidGrey[200].value,
            300: tokens.Color.Neutral.SolidGrey[300].value,
            400: tokens.Color.Neutral.SolidGrey[400].value,
            420: tokens.Color.Neutral.SolidGrey[420].value,
            500: tokens.Color.Neutral.SolidGrey[500].value,
            536: tokens.Color.Neutral.SolidGrey[536].value,
            600: tokens.Color.Neutral.SolidGrey[600].value,
            700: tokens.Color.Neutral.SolidGrey[700].value,
            800: tokens.Color.Neutral.SolidGrey[800].value,
            900: tokens.Color.Neutral.SolidGrey[900].value
          },
          'success-1': tokens.Color.Success[1].value,
          'success-2': tokens.Color.Success[2].value,
          'error-1': tokens.Color.Error[1].value,
          'error-2': tokens.Color.Error[2].value,
          'warning-yellow-1': tokens.Color.Warning.Yellow[1].value,
          'warning-yellow-2': tokens.Color.Warning.Yellow[2].value,
          'warning-orange-1': tokens.Color.Warning.Orange[1].value,
          'warning-orange-2': tokens.Color.Warning.Orange[2].value,
          'focus-yellow': tokens.Color.Primitive.Yellow[700].value,
          'focus-blue': tokens.Color.Primitive.LightBlue[700].value
        },
        lineHeight: {
          '1-0': tokens.LineHeight['1_0'].value,
          '1-2': tokens.LineHeight['1_2'].value,
          '1-3': tokens.LineHeight['1_3'].value,
          '1-4': tokens.LineHeight['1_4'].value,
          '1-5': tokens.LineHeight['1_5'].value,
          '1-6': tokens.LineHeight['1_6'].value,
          '1-7': tokens.LineHeight['1_7'].value
        },
        listStyleType: {
          'lower-latin': 'lower-latin',
          circle: 'circle',
          square: 'square'
        },
        fontFamily: {
          sans: [
            'Noto Sans JP',
            '-apple-system',
            'blinkmacsystemfont',
            'Segoe UI',
            'Hiragino Kaku Gothic ProN',
            'BIZ UDPGothic',
            'meiryo',
            'sans-serif'
          ],
          code: [
            'Noto Sans Mono',
            'Monaco',
            'Menlo',
            'Consolas',
            'Courier New',
            'monospace'
          ],
          icon: ['Material Symbols Outlined']
        }
      }
    }
  }
)

export default sakuraPlugin
