import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        font-family: ${({ theme }) => theme.main && theme.main.fontFamily};
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyle
