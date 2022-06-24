import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import reactDom from 'react-dom';
import Slider from '@react-native-community/slider';
import color from '../misc/color';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AudioContext } from '../content/audiofiles';
import { useContext } from 'react';

const { width } = Dimensions.get('window')
const Player = () => {
  //}
  //export default function Player() {
  const context = useContext(AudioContext);
  return (
    <>
      <View style={styles.alcontainer}>
        <View style={styles.counter}>
          <Text>1/{context.totalsongs}</Text>
        </View>
      </View>
      <View style={styles.container}>

        <View style={styles.icon}>
          <View style={styles.theicon}>
            <Ionicons name="musical-notes-sharp" size={136} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.thewhole}>
        <View style={styles.tsli}>
          <Text numberOfLines={1} style={styles.songname}>SONG NAME</Text>
          <Text></Text>
          <View style={styles.sliderbar}>
            <Slider
              style={{ width: width, height: 20 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor='#00D1FF'
              maximumTrackTintColor='#000000'>
            </Slider>
          </View>
          <View style={styles.buttons}>
            <Ionicons name="play-back" size={46} color="black" />
            <Ionicons name="play" size={46} color="black" />
            <Ionicons name="play-forward" size={46} color="black" />


          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    //backgroundColor: '#FF0000',
    backgroundColor: color.MODAL_BG,
    borderRadius: 150,
    width: width / 1.5,
    height: width / 1.5,
  },
  theicon: {
    padding: 65,
  },
  sliderbar: {
    //backgroundColor: 'green',
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  tsli: {
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  songname: {
    //backgroundColor: 'purple',
    backgroundColor: '#fff',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  thewhole: {
    backgroundColor: '#fff',
  },
  counter: {
    //marginLeft: width - 60,
    alignItems: 'flex-end',
    paddingRight: 10,
    //backgroundColor: 'yellow',
    fontSize: 45,
  },
  alcontainer: {
    //flex: 1,
    backgroundColor: '#fff',
    width: width,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  buttons: {
    //backgroundColor: 'green',
    marginLeft: 19,
    marginRight: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //paddingRight: 35,
  },
  backbutt: {
    alignItems: 'flex-start',
    paddingLeft: 10,
    backgroundColor: 'blue',
  },
  playbutt: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'yellow',
  },
  forbutt: {
    alignItems: 'flex-end',
    paddingRight: 10,
    backgroundColor: 'red',
  },
});
export default Player;