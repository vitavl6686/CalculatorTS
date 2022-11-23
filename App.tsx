/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NumberView } from './NumberView';
import { Operator } from './Operator';
import { SpecialButton } from './SpecialButton';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [current, setCurrent] = useState<String | undefined>(undefined);  
  const [lastNumber, setLastNumber] = useState<String>("");  
  const [lastOperator, setLastOperator] = useState<String | undefined>(undefined);  

  const [shown, setShown] = useState<String>("0");


function onOperator(operator:String) {
    if(lastNumber == "" && lastOperator == undefined) {
      if(operator == "-") {
        setLastNumber("-");
        setShown("-");
        return;
      }
      else {
        return;
      }
    }
    if(lastNumber == '') {
      if(operator == "-") {
        setLastNumber("-");
        setShown("-");
        return;
      }
      else{
      setLastOperator(operator);
      setShown(current + " " + operator);
      return;
      }
    }
  
    if(lastOperator == undefined) {
      setCurrent(lastNumber);
      setLastOperator(operator);
      setShown(''+ shown + " " + operator);
      setLastNumber('');
    }
    else {
      let newNumber : String | undefined = undefined;
      if(lastOperator == "+"){
        newNumber = String(Number(current) + Number(lastNumber));
      }
      if(lastOperator == "*"){
        newNumber = String(Number(current) * Number(lastNumber));
      }
      if(lastOperator == "-"){
        newNumber = String(Number(current) - Number(lastNumber));
      }
      if(lastOperator == "/"){
        newNumber = String(Number(current) / Number(lastNumber));
      }
      setCurrent(newNumber);
      setLastOperator(operator);
      setShown(newNumber + " " + operator);
      setLastNumber('');
    }
}

function onNumber(number:String) {
  let newNumber = String(lastNumber)+String(number)
  setLastNumber(newNumber);
  setShown(newNumber);
}

function onClear() {
  setLastNumber("");
  setCurrent(undefined);
  setLastOperator(undefined);
  setShown("0");
}

function onEquality() {
  let newNumber : String = "";

  if (lastOperator == undefined) {
      newNumber = String(Number(lastNumber) * 2);
      setCurrent(newNumber);
      setShown(newNumber);
      setLastNumber(newNumber);
      return;
  }
  if (lastOperator == "+") {
    newNumber = String(Number(current) + Number(lastNumber));
  }
  if (lastOperator == "*") {
    newNumber = String(Number(current) * Number(lastNumber));
  }
  if (lastOperator == "-") {
    newNumber = String(Number(current) - Number(lastNumber));
  }
  if (lastOperator == "/") {
    newNumber = String(Number(current) / Number(lastNumber));
  }
  setCurrent(newNumber);
  setShown(newNumber);
  setLastNumber("");
}
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          
          <View>
            <View>
            <Text style={styles.displayStyle}> {shown} </Text>
            </View>
            <View style={styles.container}>
              <NumberView title = '1' onPress={onNumber}/>
              <NumberView title = '2' onPress={onNumber}/>
              <NumberView title = '3' onPress={onNumber}/>
              <Operator title = "+" onPress = {onOperator}/>
            </View>

            <View style={styles.container}>
            <NumberView title = '4' onPress={onNumber}/>
            <NumberView title = '5' onPress={onNumber}/>
            <NumberView title = '6' onPress={onNumber}/>
            <Operator title = "*" onPress = {onOperator}/>
            </View>

            <View style={styles.container}>
            <NumberView title = '7' onPress={onNumber}/>
            <NumberView title = '8' onPress={onNumber}/>
            <NumberView title = '9' onPress={onNumber}/>
            <Operator title = "-" onPress = {onOperator}/>
            </View>

            <View style={styles.container}>
              <SpecialButton title = "=" onPress = {onEquality}/>
              <NumberView title = '0' onPress={onNumber}></NumberView>
              <NumberView title = '.' onPress={onNumber}/>
              <Operator title = "/" onPress = {onOperator}/>
            </View>

            <View style={styles.container}>
              <SpecialButton title = "clear" onPress={onClear}/>
            </View>
        </View>
  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: "#FF0000"
  },
  buttonContainer: {
    flex: 1,
    padding:0,
    margin: 20,
    borderRightColor: "#000000",
    borderWidth: 2, 
},
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},

displayStyle: {
  fontSize: 24,
  color: "#000000",
  borderWidth: 2,
  borderColor: "#000000",
  marginLeft: 20,
  marginRight: 20,
  marginTop: 16,
}
});

export default App;
