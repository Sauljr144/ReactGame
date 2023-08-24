import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark', // 'dark' | 'light'
    useSystemColorMode: false,
  }

const theme = extendTheme({
  config,
  colors: {
      gray: {
          50: '#F9F9F9',
          100: '#EDEDED',
          200: '#D3D3D3',
          300: '#A0A0A0',
          400: '#A0A0A0',
          500: '#898989',
          600: '#6C6C6C',
          700: '#202020',
          800: '#121212',
          900: '#111'
      }
  }
})

export default theme;
