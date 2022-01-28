import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    transition: all .3s linear;
    outline: none;
    border: 0;
    text-decoration: none;
    text-transform: capitalize;
}
html {  
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    font-size: 1.8rem;
    font-family: sans-serif;
}

`;