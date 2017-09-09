import React from 'react'
import { Text } from 'react-native'
import test from 'tape'
import render from 'react-test-renderer'
import Monet, { withTheme } from '../'

test('foo', t => {
  t.pass('lol kek')

  Monet.create({ color: 'red' }, 'SuperText')

  let SuperText = (props) => {
    console.log(props)
    return (
      React.createElement(Text, { style: props.monet }, 'Claude Monet')
    )
  }

  SuperText = withTheme('SuperText')(SuperText)

  console.log(
    render.create(React.createElement(SuperText)).toJSON()
  )
})
