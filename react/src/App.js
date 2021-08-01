/* Custom components. */
import Router from './Router'
import Theme from './Theme'
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