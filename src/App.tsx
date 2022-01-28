import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import light from './GlobalStyle/themes/light'
import dark from './GlobalStyle/themes/dark'

import GlobalStyle from './GlobalStyle/Global'
import { Header } from './components/header/index'



const App = () => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  )
}

export default App;