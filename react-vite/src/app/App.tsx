import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from './themes/themes'
import GlobalStyle from './styles/global.styled'

/** @TODO Should make BuildProviderTree */
const App: FC = () => (
  <ThemeProvider theme={themes}>
    <GlobalStyle />
    <div>Test app | vite</div>
  </ThemeProvider>
)

export default App
