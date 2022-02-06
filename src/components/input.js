import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function Input(props) {
  return (
    <>
      <TextInput {...props} placeholder={props.title} style={style.inp} />
    </>
  );
}

const style = StyleSheet.create({
  inp: {
    backgroundColor: '#FFFF',
    borderRadius: 8,
  },
});
