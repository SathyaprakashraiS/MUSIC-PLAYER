import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { AudioContext } from '../content/audiofiles';
import { LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { Dimensions, FlatList, LayoutAnimation } from 'react-native-web';
import * as MediaLibrary from 'expo-media-library';
import Songitem from '../components/songitem';
import Screen from '../components/screen';
import OptionCard from '../components/optioncard';
import color from '../misc/color';

export class Songs extends Component {
  static contextType = AudioContext;
  constructor(props) {
    super(props);
    this.state = {
      optioncardvisibility: false
    }
    this.song = {}
  }

  layoutProvider = new LayoutProvider(i => MediaLibrary.MediaType.audio, (type, dim) => {
    switch (type) {
      case (MediaLibrary.MediaType.audio):
        dim.width = Dimensions.get('window').width;
        dim.height = 70;
        break;
      default:
        dim.width = 0;
        dim.height = 0;
    }
  });
  rowRenderer = (type, item) => {
    return <Songitem title={item.filename} duration={item.duration} onOptionpress={() => {
      console.log('pressed options')
      this.setState({ optioncardvisibility: true })
    }} />;
  };
  render() {
    /*
    return (
      <AudioContext.Consumer>
        {({ dataProvider }) => {
          if (dataProvider.getSize() > 0) {
            return (
              <View style={{ flex: 1 }}>
                <Text>qwer</Text>
                <RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer} />
                <OptionCard visible={this.state.optioncardvisibility}
                  onCLose={() => this.setState({ ...this.state, optioncardvisibility: false })}
                  onPlaypress={() => console.log('play pressed')}
                  onAddtopress={() => console.log('add to playlist pressed')} />
              </View>
            );
          }
          return (
            <View style={{ flex: 1 }}>
              <Text>content illa</Text>
            </View>
          );
        }}
      </AudioContext.Consumer>
    );
*/


    return (
      <ScrollView>
        {this.context.audioFiles.map(item =>
          //<Text key={item.id}>{item.filename}</Text>
          <Songitem title={item.filename} duration={item.duration}
            onOptionpress={() => {
              console.log('option pressed')
              this.setState({ optioncardvisibility: true });
            }} />
        )}
        <Modal animationType="slide" transparent={true} visible={this.state.optioncardvisibility} onRequestClose={() => { Alert.alert('closing card...'); this.setState({ optioncardvisibility: false }); }}>
          <View style={styles.card}>
            <Text style={styles.trackname} numberOfLines={1}>test</Text>
            <View style={styles.optioncard}>
              <Text style={styles.choice}>play</Text>
              <Text style={styles.choice}>add to playlist</Text>
            </View>
          </View>
        </Modal >
      </ScrollView >
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },

  card: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: color.APP_BG,
    zIndex: 1000,
  },
  optioncard: {
    padding: 20,
  },
  trackname: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    color: color.FONT_MEDIUM,
  },
  choice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.FONT,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  cardcolor: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: '0',
    backgroundColor: color.MODAL_BG,
  },
});

export default Songs;