import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
     
     
      
    </View>
    <View style={{
      borderTopColor: '#393E46',
      borderTopWidth: 1,
      width: width,
      alignItems: 'center',
      paddingVertical: 15
       }}>

        <View style={{
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          width: '80%'}}>
            <TouchableOpacity onPress = {() => {}}>
             <Ionicons name='heart-outline' size={30} color= '#777777'/>
            </TouchableOpacity>
         
            <TouchableOpacity onPress = {() => {}}>
             <Ionicons name='repeat' size={30} color= '#777777'/>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {}}>
             <Ionicons name='share-outline' size={30} color= '#777777'/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => {}}>
             <Ionicons name='ellipsis-horizontal' size={30} color= '#777777'/>
            </TouchableOpacity>
        </View>
      
    </View>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },

  mainContainer : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
