import React from "react";
import { Button, StyleSheet, View } from "react-native";

export const NumberView = (props: {title: string, onPress: (title: string)=> void}) => {
    return (
      <View style={styles.buttonContainer}>
        <Button color= "#889186" title={props.title} onPress={() => props.onPress(props.title)}/>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding:0,
    margin: 20,
    borderRightColor: "#000000",
    borderWidth: 2, 
},
})