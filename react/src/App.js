/* Custom components. */
import Router from './Router'
import Theme from './themes/Theme'
/* Contexts. */
import { ThemeStore } from 'contexts/ThemeContext'

const App = () => {
  return(
    <ThemeStore>
      <Theme>
        <Router/>
      </Theme>
    </ThemeStore>
  )
}

export default App