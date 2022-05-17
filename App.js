import { View, Text } from 'react-native'
import React from 'react'
import { Layout } from './src/components'
import { HomeScreen } from './src/screens'

export default function App() {
  return (
    <Layout
      title={'Dashboard'}
    >
      <HomeScreen />
    </Layout>
  )
}