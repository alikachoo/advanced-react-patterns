import * as React from 'react'
import {Switch} from '../switch'

export function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <div>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {on, toggle}),
      )}
    </div>
  )
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => {
  return on && children
}

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => {
  return !on && children
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle} />
}

Toggle.ToggleOn = ToggleOn
Toggle.ToggleOff = ToggleOff
Toggle.ToggleButton = ToggleButton
