import 'react-native'
import React from 'react'
import Monet, { withTheme } from '../'
import renderer from 'react-test-renderer'
import Head from '../examples/Head'
import '../examples/themes/C3PO'

test('Renders <Head /> w/out withTheme', () => {
  const tree = renderer.create(
    <Head />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Renders <Head /> with Head theme', () => {
  const ThemedComponent = withTheme('Head')(Head)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})

test('Renders <Head /> with Head:Green modifier', () => {
  const ThemedComponent = withTheme('Head', ['Green'])(Head)
  const tree = renderer.create(
    <ThemedComponent />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
