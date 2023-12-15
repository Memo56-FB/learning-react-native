import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>React nativee 🐸🪄</Text>
      </View>
       <Counter setCounter={setCounter} counter={counter}/>
      <View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#49b8a4',

  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#1e514b'
  }
});
