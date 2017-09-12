import React from 'react'
import { StyleSheet } from 'react-native'
import mergeWith from 'lodash.mergewith'

/*
  // Component

  import Monet, { baseTheme } from 'claude-monet'

  class SearchComponent extends Component {
    // ...
  }

  const styles = Monet.create('SearchComponent', {
    container: {
      flex: 1,
    },
  })

  export default connect(mapStateToProps, mapDispatchToProps)(
    baseTheme(styles)(SearchComponent)
  )
*/

/*
  // Elsewhere in the Application

  import SearchComponent from '../components/SearchComponent'
  import { withTheme } from 'claude-monet'

  const ThemedSearchComponent = withTheme('SearchComponent', ['Gold'])(SearchComponent)

  class SearchPage extends Component {
    render() {
      return(
        <View>
          <ThemedSearchComponent
            onSearchEnd={this.handleSearchEnd}
          />
        </View>
      )
    }
  }

  export default SearchPage
*/

class Monet {
  constructor({ delimiter = ':' } = {}) {
    this.delimiter = delimiter
    this.themes = {}
    this.modifiers = {}
  }

  create = (theme, styles) => {
    this.themes[theme] = styles
    return StyleSheet.create(styles)
  }

  theme = (name, styles) => {
    const [theme, modifier] = name.split(this.delimiter)

    if (modifier) {
      const themeWithModifiers = this.modifiers[theme] || {}
      this.modifiers[theme] = {
        ...themeWithModifiers,
        [modifier]: styles,
      }
    } else {
      this.themes[theme] = mergeWith({}, this.themes[theme], styles)
    }
  }
}

const monet = new Monet()

// Prevent merging arrays
const customizer = (objValue, srcValue) => (
  Array.isArray(objValue) ? srcValue : undefined
)

export const withTheme = (theme, modifiers = []) => WrappedComponent => props => {
  const styles = StyleSheet.create(
    mergeWith(
      {},
      monet.themes[theme],
      modifiers.reduce((memo, name) => mergeWith(memo, monet.modifiers[theme][name]), {}),
      customizer
    )
  )
  console.log({ WrappedComponent, props, styles })
  return React.createElement(
    WrappedComponent, {
      ...props,
      monet: styles,
    }
  )
}

export const baseTheme = styles => WrappedComponent => ownProps => {
  WrappedComponent.defaultProps = {
    ...WrappedComponent.defaultProps,
    monet: styles,
  }

  return React.createElement(WrappedComponent, ownProps)
}

export default monet
