import 'react-native'
import React from 'react'
import Monet, { withTheme } from '../'
import renderer from 'react-test-renderer'
import SuperText from './SuperText'

test('Renders <SuperText /> w/out modifiers', () => {
  Monet.create({
    container: { flex: 1 },
    text: { color: 'red' }
  }, 'SuperText')

  const ThemedComponent = withTheme('SuperText')(SuperText)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Renders <SuperText /> with Green modifier', () => {
  Monet.create({
    text: { color: 'green' }
  }, 'SuperText:Green')

  const ThemedComponent = withTheme('SuperText', ['Green'])(SuperText)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
