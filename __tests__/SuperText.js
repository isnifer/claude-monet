import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SuperText extends Component {
  render() {
    return (
      <View style={this.props.monet.container}>
        <Text style={this.props.monet.text}>SuperText Component</Text>
      </View>
    )
  }
}
