import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

class CoinsScreen extends Component {
  handlePress = () => {
    console.log('go to detail', this.props);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Coins screen</Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnTex}>Go to detail</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "red",

  },
  titleText: {
      color: "#fff",
      textAlign: "center"
  },
  btn: {
      padding: 8,
      backgroundColor: "blue",
      borderRadius: 8,
      margin: 16
  },
  btnTex: {
    color: "#fff",
    textAlign: "center"
  }
});

export default CoinsScreen;
