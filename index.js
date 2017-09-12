import React from 'react'
import { StyleSheet } from 'react-native'
import mergeWith from 'lodash.mergewith'
import get from 'lodash.get'

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
    this.base = {}
    this.themes = {}
    this.modifiers = {}
  }

  create = (theme, styles) => {
    this.base[theme] = styles
    return StyleSheet.create(mergeWith(styles, this.themes[theme]))
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
      this.themes[theme] = styles
    }
  }
}

const monet = new Monet()

export const withTheme = (theme, modifiers = []) => WrappedComponent => props => (
  React.createElement(
    WrappedComponent, {
      ...props,
      monet: StyleSheet.create(
        mergeWith(
          {},
          monet.base[theme],
          monet.themes[theme],
          modifiers.reduce((memo, name) => {
            return mergeWith(memo, get(monet.modifiers, `${theme}.${name}`, {}))
          }, {}),
        )
      ),
    }
  )
)

export const baseTheme = styles => WrappedComponent => ownProps => (
  React.createElement(WrappedComponent, { ...ownProps, monet: ownProps.monet || styles })
)

export default monet
