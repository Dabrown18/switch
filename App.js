import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Switch from './Switch';

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <Switch active={active} setActive={setActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
