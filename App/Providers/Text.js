import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function TextStyle({...props}) {
  return (
    <Text {...props} style={styles.text}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir Next",
    color: ((props) => props.color ?? '#ffffff')
    ((title, large, medium, small) => {
      switch (true) {
        case title:
          return `fontSize: 32`;
        case large:
          return `fontSize: 20`;
        case medium:
          return `fontSize: 16`;
        case small:
          return `fontSize: 13`;
        default:
          return `fontSize: 14`;
      }
    })
  }
})
