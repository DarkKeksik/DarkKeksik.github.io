import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        font-family: 'Poppins', sans-serif;
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyle
