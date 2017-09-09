import React from 'react'
import { StyleSheet } from 'react-native'
import mergeWith from 'lodash.mergewith'

/*
  export default connect(mapStateToProps, mapDispatchToProps)(
    withTheme('SearchComponent', {
      modifiers: ['gold'],
    })(SearchComponent)
  )
*/

class Monet {
  constructor({ delimiter = ':' } = {}) {
    this.delimiter = delimiter
    this.themes = {}
    this.modifiers = {}
  }

  create = (styles, name) => {
    const [theme, modifier] = name.split(this.delimiter)

    if (modifier) {
      const themeWithModifiers = this.modifiers[theme] || {}
      this.modifiers[theme] = {
        ...themeWithModifiers,
        [modifier]: styles,
      }
    } else {
      this.themes[theme] = styles
      this.modifiers[theme] = this.modifiers[theme] || {}
    }
  }
}

const monet = new Monet()

// Prevent merging arrays
const customizer = (objValue, srcValue) => (
  Array.isArray(objValue) ? srcValue : undefined
)

export const withTheme = (theme, modifiers = []) => WrappedComponent => props => (
  React.createElement(
    WrappedComponent,
    {
      ...props,
      monet: StyleSheet.create(
        mergeWith(
          monet.themes[theme],
          modifiers.reduce((memo, modifierName) => ({
            ...memo,
            ...monet.modifiers[theme][modifierName],
          }), {}),
          customizer
        )
      ),
    }
  )
)

export default monet
