import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Dimensions, Image, Text, FlatList, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
const { width, height } = Dimensions.get('window');
import songs from './model/data';

export default function App() {

  const scrollX = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width)
      setSongIndex(index);
    })

    return () => {
      scrollX.removeAllListeners();
    }
  }, []);

  const skipToNext = () => {
    songSlider.current?.scrollToOffset({
      offset: (songIndex + 1) * width
    })

  }


  const skipToPrevious = () => {
    songSlider.current?.scrollToOffset({
      offset: (songIndex - 1) * width
    })
  }



  const renderSongs = ({ index, item }: any) => {
    return (
      <Animated.View style={{ width: width, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImg} />
        </View>
      </Animated.View>
    )
  }


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: width }}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: { x: scrollX }
                }
              }],
              { useNativeDriver: true }
            )}
          />

        </View>

        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>

        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor='#FFD369'
            maximumTrackTintColor='#fff'
            onSlidingComplete={() => { }}
          />
          <View style={styles.progressContainerLabel}>
            <Text style={styles.ProgressLabelTxt}>0:00</Text>
            <Text style={styles.ProgressLabelTxt}>3:55</Text>
          </View>
        </View>

        <View style={styles.musicControls}>
          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons name='play-skip-back-outline' size={35} color='#FFD369' style={{ marginTop: 25 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='ios-pause-circle' size={75} color='#FFD369' />
          </TouchableOpacity>

          <TouchableOpacity onPress={skipToNext}>
            <Ionicons name='play-skip-forward-outline' size={35} color='#FFD369' style={{ marginTop: 25 }} />
          </TouchableOpacity>
        </View>

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
          width: '80%'
        }}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='heart-outline' size={30} color='#777777' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='repeat' size={30} color='#777777' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='share-outline' size={30} color='#777777' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='ellipsis-horizontal' size={30} color='#777777' />
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

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicControls: {
    marginTop: 15,
    width: '70%',
    justifyContent: 'space-between',
    flexDirection: 'row'

  },

  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },

    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE'
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE'

  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row'
  },
  progressContainerLabel: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  ProgressLabelTxt: {
    color: '#fff'
  }


});
