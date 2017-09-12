import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export class LeftHand extends Component {
  static propTypes = {
    monet: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={this.props.monet.container}>
        <Text style={this.props.monet.text}>LeftHand Component</Text>
      </View>
    )
  }
}

export class RightHand extends Component {
  static propTypes = {
    monet: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={this.props.monet.container}>
        <Text style={this.props.monet.text}>RightHand Component</Text>
      </View>
    )
  }
}
