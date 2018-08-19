import React from 'react'

const saturation = {
  primary: '58%',
  secondary: '100%',
}

const brightness = {
  primary: '42%',
  primaryLight: '50%',
  secondary: '65%',
}

function createStyles(hue) {
  return {
    '--primary': `hsl(${hue}, ${saturation.primary}, ${brightness.primary})`,
    '--primary-light': `hsl(${hue}, ${saturation.primary}, ${
      brightness.primaryLight
    })`,
    '--secondary': `hsl(${hue}, ${saturation.secondary}, ${
      brightness.secondary
    })`,
  }
}

export default class Animator extends React.Component {
  state = {
    handle: null,
    hue: 258,
  }

  render() {
    const { children } = this.props
    const { hue } = this.state

    return (
      <div className="page" style={createStyles(hue)}>
        {children}
      </div>
    )
  }

  componentDidMount() {
    this.setState(
      ({ handle }) =>
        handle ? {} : { handle: setInterval(this.increaseHue, 500) }
    )
  }

  componentWillUnmount() {
    const { handle } = this.state
    if (handle) clearInterval(handle)
  }

  increaseHue = () => this.setState(({ hue }) => ({ hue: (hue + 1) % 360 }))
}
