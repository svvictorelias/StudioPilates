import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --background: #6065a2;
    --text-purple: #41456e;
    --color-primary: #e5e0f0;
    --color-green-light: #9CDD6E;
    --color-yellow-light: #FFF66B;
    --color-red: #F66A69;
    --color-mustard: #F59E1D;
    --color-blue-ciel: #9cdbe7;
    --color-blue-light: #3EBCD3;
    --color-brown: #C87C53;
    --color-black: #020000;
    --color-gray: #858585;
    --color-white: #FFF;
  }

  button{
    border-radius: 10px;
    color: var(--background);
    border: 2px solid var(--background);
    cursor: pointer;
    width: 40%;
    height: 2rem;
    font-weight: 600;
    :hover{
      background-color: var(--background);
      color: white;
    }
  }
  input {
    color: var(--text-purple);
    font-weight: 600;
    height: 2rem;
    outline-style: none;
    width: 100%;
  }
  a{
    text-decoration: none;
  }

  .SpanLink{
    color: var(--text-purple);
    text-decoration: underline;
    cursor: pointer;
  }
`

export const LabelError = styled.label`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`
