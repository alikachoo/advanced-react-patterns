// Compound Components
// http://localhost:3000/isolated/exercise/02.js
import {Toggle} from './02-toggle'

function App() {
  return (
    <div>
      <Toggle
        items={[
          <Toggle.ToggleOn>The button is on</Toggle.ToggleOn>,
          <Toggle.ToggleOff>The button is off</Toggle.ToggleOff>,
          <Toggle.ToggleButton />,
        ]}
      />
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
