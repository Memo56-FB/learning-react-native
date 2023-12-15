import { Text, Button, StyleSheet } from 'react-native'
import { Component } from 'react'

export default class Counter extends Component {
  
  render() {
    const {counter, setCounter} = this.props
    return (
      <>
        <Button title='+' onPress={() => setCounter(counter + 1)} style={styles.button} />
        <Text>{counter}</Text>
        <Button title='-' onPress={() => setCounter(counter - 1)} style={styles.button} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    backgroundColor: '#1e514b',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: 10,
    textAlign: 'center'
  },
})