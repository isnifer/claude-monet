import 'react-native'
import React from 'react'
import Monet, { withTheme } from '../'
import renderer from 'react-test-renderer'
import Head from '../examples/Head'
import { LeftHand, RightHand } from '../examples/Hands'
import '../examples/themes/C3PO'

test('Renders <Head /> w/out modifiers', () => {
  const ThemedComponent = withTheme('Head')(Head)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Renders <Head /> with Green modifier', () => {
  const ThemedComponent = withTheme('Head', ['Green'])(Head)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
