import plugin from 'tailwindcss/plugin'

const sakuraPlugin = plugin(
  ({ addBase }) => {
    addBase({
      '@font-face': {
        fontFamily: 'Material Symbols Outlined',
        fontWheight: '300',
        fontStyle: 'normal'
      }
    })
  },
  {
    theme: {
      extend: {
        fontSize: {
          h1: ['42px', '42px'],
          h2: ['32px', '32px'],
          h3: ['26px', '26px'],
          h4: ['22px', '22px'],
          h5: ['20px', '20px'],
          h6: ['18px', '18px'],
          base: ['16px', '28px'],
          code: ['16px', '24px'],
          sm: ['14px', '24px'],
          xs: ['12px', '20px']
        },
        colors: {
          white: {
            1000: '#FFFFFF'
          },
          sea: {
            900: '#0017B6',
            800: '#0024CE',
            700: '#0031D8',
            600: '#003EE5',
            500: '#0946F1',
            400: '#4979F5',
            300: '#7096F8',
            200: '#9DB7F9',
            100: '#C5D7FB',
            50: '#E8F1FE'
          },
          sumi: {
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
            900: '#115A36',
            800: '#197A4B',
            700: '#1D8B56',
            600: '#259D63',
            500: '#2CAC6E',
            400: '#51B883',
            300: '#71C598',
            200: '#9BD4B5',
            100: '#C2E5D1',
            50: '#E6F5Ec'
          },
          wood: {
            900: '#B65200',
            800: '#C16800',
            700: '#C87504',
            600: '#CD820A',
            500: '#D18D0F',
            400: '#D69C2B',
            300: '#DCAC4D',
            200: '#E5C47f',
            100: '#EFDBB1',
            50: '#F8F1E0'
          },
          sun: {
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
