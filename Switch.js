import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

const Switch = ({active, setActive}) => {
  let containerStyle = {};
  let activeStyle = {};

  if (active) {
    containerStyle = styles.activeContainer;
    activeStyle = styles.active;
  } else {
    containerStyle = styles.inactiveContainer;
    activeStyle = styles.inactive;
  }

  return (
    <TouchableOpacity onPress={() => setActive(!active)} style={containerStyle}>
      <View style={activeStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    borderRadius: 20,
    border: 'black',
    borderWidth: 1,
    height: 10,
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  active: {
    backgroundColor: 'blue',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  inactiveContainer: {
    borderRadius: 20,
    border: 'black',
    borderWidth: 1,
    height: 10,
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inactive: {
    backgroundColor: 'red',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
});

export default Switch;
