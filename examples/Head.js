import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Monet, { withTheme } from '../'

class Head extends Component {
  static propTypes = {
    monet: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={this.props.monet.container}>
        <Text style={this.props.monet.text}>Head Component</Text>
      </View>
    )
  }
}

Monet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'purple',
  },
}, 'Head')

export default withTheme('Head')(Head)
