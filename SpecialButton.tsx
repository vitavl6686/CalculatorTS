import { Button, StyleSheet, View } from "react-native"

export const SpecialButton = (props: {title: string, onPress: () => void}) => {
    return(
        <View style = {styles.buttonContainer} >
            <Button color = "#889186" title={props.title} onPress = {() => props.onPress()}/>
        </View>
    )
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