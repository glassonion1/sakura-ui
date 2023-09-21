import plugin from 'tailwindcss/plugin'

const sakuraPlugin = plugin(
  ({ addBase }) => {
    addBase({
      '@font-face': {
        fontFamily: 'Material Symbols Outlined',
        fontWeight: '300',
        fontStyle: 'normal'
      }
    })
  },
  {
    theme: {
      extend: {
        fontSize: {
          'h-xxl': [
            '57px',
            {
              lineHeight: '1.4',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-xl': [
            '45px',
            {
              lineHeight: '1.4',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          // h1
          'h-lg': [
            '36px',
            {
              lineHeight: '1.4',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-lg-m': [
            '32px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          // h2
          'h-med': [
            '32px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-med-m': [
            '28px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          // h3
          'h-sm': [
            '28px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-sm-m': [
            '24px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          // h4
          'h-xs': [
            '24px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-xs-m': [
            '20px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          // h5 h6
          'h-xxs': [
            '20px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          'h-xxs-m': [
            '16px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          base: [
            '16px',
            {
              lineHeight: '1.7',
              letterSpacing: '0.04em',
              fontWeight: '400'
            }
          ],
          'base-sm': [
            '14px',
            {
              lineHeight: '1.7',
              letterSpacing: '0.04em',
              fontWeight: '400'
            }
          ],
          sup: [
            '12px',
            {
              lineHeight: '1.7',
              letterSpacing: '0.02em',
              fontWeight: '400'
            }
          ],
          'sup-sm': [
            '10px',
            {
              lineHeight: '1.7',
              letterSpacing: '0.02em',
              fontWeight: '400'
            }
          ],
          button: [
            '16px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '700'
            }
          ],
          label: [
            '14px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '500'
            }
          ],
          'label-sm': [
            '12px',
            {
              lineHeight: '1.5',
              letterSpacing: '0.04em',
              fontWeight: '500'
            }
          ],
          code: [
            '16px',
            {
              lineHeight: '1.7',
              letterSpacing: '0.04em',
              fontWeight: '400'
            }
          ]
        },
        colors: {
          white: {
            1000: '#FFFFFF'
          },
          sea: {
            1200: '#00004F',
            1100: '#000060',
            1000: '#000071',
            900: '#000082',
            800: '#0017C1',
            700: '#0031D8',
            600: '#1A3EE8',
            500: '#264AF4',
            400: '#4979F5',
            300: '#7096F8',
            200: '#9DB7F9',
            100: '#C5D7FB',
            50: '#E8F1FE'
          },
          sumi: {
            1200: '#000000',
            1100: '#080808',
            1000: '#111111',
            900: '#1A1A1C',
            800: '#414143',
            700: '#626264',
            600: '#757578',
            500: '#949497',
            400: '#B4B4B7',
            300: '#D8D8DB',
            200: '#E8E8EB',
            100: '#F1F1F4',
            50: '#F8F8FB'
          },
          forest: {
            1200: '#032213',
            1100: '#08351F',
            1000: '#0C472A',
            900: '#115A36',
            800: '#197A4B',
            700: '#1D8B56',
            600: '#259D63',
            500: '#2CAC6E',
            400: '#51B883',
            300: '#71C598',
            200: '#9BD4B5',
            100: '#C2E5D1',
            50: '#E6F5EC'
          },
          wood: {
            1200: '#662E00',
            1100: '#833B00',
            1000: '#9C4600',
            900: '#B65200',
            800: '#C16800',
            700: '#C87504',
            600: '#CD820A',
            500: '#D18D0F',
            400: '#D69C2B',
            300: '#DCAC4D',
            200: '#E1C383',
            100: '#E7D8B9',
            50: '#F3EEE5'
          },
          sun: {
            1200: '#640101',
            1100: '#890101',
            1000: '#AF0000',
            900: '#D50000',
            800: '#EC0000',
            700: '#FA1606',
            600: '#FF220D',
            500: '#FF4B36',
            400: '#FF5838',
            300: '#FF7B5C',
            200: '#FFA28B',
            100: '#FFC8B8',
            50: '#FFE7E6'
          }
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
          code: ['Monaco', 'Menlo', 'Consolas', 'Courier New', 'monospace'],
          icon: ['Material Symbols Outlined']
        }
      }
    }
  }
)

export default sakuraPlugin
