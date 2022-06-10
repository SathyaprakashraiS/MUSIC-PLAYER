import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AudioContext } from '../content/audiofiles';
import { LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { Dimensions, LayoutAnimation } from 'react-native-web';
import * as MediaLibrary from 'expo-media-library';

export class Songs extends Component {
  static contextType = AudioContext;
  layoutProvider = new LayoutProvider(i => MediaLibrary.MediaType.audio, (type, dim) => {
    switch (type) {
      case MediaLibrary.MediaType.audio:
        dim.width = Dimensions.get('window').width;
        dim.height = 70;
      default:
        dim.width = 0;
        dim.height = 0;
    }
  });
  rowRenderer = (type, item) => {
    //console.log(item)
    console.log(item.filename)
    return <Text>{item.filename}</Text>
  };
  render() {
    /*
    return (<AudioContext.Consumer>
      {({ dataProvider }) => {
        return (
          <View style={{ flex: 1 }}>
            <RecyclerListView dataProvider={dataProvider} layoutProvider={this.layoutProvider} rowRenderer={this.rowRenderer} />
          </View>
        );
      }}
    </AudioContext.Consumer>
    );
    */

    return (
      <ScrollView>
        {this.context.audioFiles.map(item => <Text key={item.id}>{item.filename}</Text>)}
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Songs