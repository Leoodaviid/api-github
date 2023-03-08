import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.gray800};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
    padding: 0px;
    margin: 0px;
  }
  ::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: ${({ theme }) => theme.colors.gray800};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
}
  h1, h2, p{
    margin: 0;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`
