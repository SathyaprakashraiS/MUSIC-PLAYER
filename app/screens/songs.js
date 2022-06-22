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
import { Audio } from 'expo-av';

export class Songs extends Component {

  static contextType = AudioContext;
  constructor(props) {
    super(props);
    this.state = {
      optioncardvisibility: false,
      songname: null,
      songduration: 0,
      playbackobj: null,
      soundobj: null,
      currentsong: {},
      songplaying: true,
      comments: [],
      wait: false,
      paused: false,
    }
    /*const comments = [
      { reply: 'Reply 1' },
    ];
    state = {
      comments: ["Corn", "Potato"],
    };*/
    //this.song = {}
  }


  addSongtolist(status) {
    //console.log('delay started')
    /*
    for(var i=0;i<1000;i++)
    {
      
    }
    this.setState({ ...this.state, wait: false })
    */
    setTimeout(fuction = () => {
      this.setState({ ...this.state, wait: false })
    }, 4000);
    //console.log('delay ended')

    /*
        const infuncplaybackobj = new Audio.Sound();
        let { comments } = this.state;
        comments.push(status);
        for (var i = 0; i < (comments.length - 1); i++) {
          console.log(comments[i].uri, comments[i].shouldPlay)
          if (comments[i].shouldPlay) {
            infuncplaybackobj.loadAsync({ uri: comments[i].uri }, { shouldPlay: false });
            infuncplaybackobj.stopAsync();
            infuncplaybackobj.unloadAsync();
          }*/
    //const status = await infuncplaybackobj.loadAsync({ uri: audio.uri }, { shouldPlay: true });
    //infuncplaybackobj.loadAsync({ uri: comments[i].uri }, { shouldPlay: false });
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
  testfunc = (item, sname) => {
    if (this.state.wait) {
      //console.log('test wait')
    }
    else {
      this.setState({ songname: sname })
      this.setState({ paused: true })
      this.Songpress(item)
    }
  }
  Songpress = async audio => {
    /*
    console.log('songplay was pressed', audio)
    const playbackobj = new Audio.Sound();
    playbackobj.loadAsync({ uri: audio.uri }, { shouldPlay: true });
    */
    const playbackobj = new Audio.Sound();
    if (this.state.soundobj === null && !this.state.wait) {
      console.log('1')
      //console.log('songplay was pressed', audio)
      //const playbackobj = new Audio.Sound();
      this.setState({ paused: false })
      const status = await playbackobj.loadAsync({ uri: audio.uri }, { shouldPlay: true });
      this.setState({ ...this.state, wait: true })
      this.addSongtolist(status)
      console.log('timer @')
      //setTimeout(this.setState({ ...this.state, wait: false }), 4000);
      console.log(status)
      return this.setState({ ...this.state, playbackobj: playbackobj, soundobj: status, currentsong: audio, songplaying: true })
    }
    if (this.state.soundobj.isLoaded && this.state.soundobj.isPlaying && this.state.currentsong.id === audio.id) {
      console.log('2')
      //console.log('already loaded adn playing')
      //const status = await this.state.playbackobj.setStatusAsync({ shouldPlay: false });
      this.setState({ paused: false })
      const status = await this.state.playbackobj.pauseAsync();
      return this.setState({ ...this.state, soundobj: status, songplaying: false });
    }
    if (this.state.soundobj.isLoaded && !this.state.soundobj.isPlaying && this.state.currentsong.id === audio.id) {
      console.log('3')
      //console.log('trying to resume', this.state.soundobj)
      this.setState({ paused: true })
      const status = await this.state.playbackobj.playAsync();
      this.setState({ ...this.state, wait: true })
      this.addSongtolist(status)
      console.log('timer @')
      //setTimeout(this.setState({ ...this.state, wait: false }), 4000);
      //this.addSongtolist(audio)
      return this.setState({ ...this.state, soundobj: status, songplaying: true });
    }
    if (this.state.soundobj.isLoaded && this.state.soundobj.isPlaying && this.state.currentsong.id !== audio.id && !this.state.wait) {
      console.log('4')
      //console.log('songplay was pressed', audio)
      playbackobj.stopAsync();
      playbackobj.unloadAsync();
      const status = await playbackobj.loadAsync({ uri: audio.uri }, { shouldPlay: true });
      this.setState({ ...this.state, wait: true })
      this.addSongtolist(status)
      console.log('timer @')
      //setTimeout(this.setState({ ...this.state, wait: false }), 4000);
      //this.addSongtolist(audio)
      /*
            const { comments } = this.state;
            comments.unshift({ reply: audio });
            console.log(comments);
            this.setState({ comments: comments.slice(0) });
      */
      return this.setState({ ...this.state, playbackobj: playbackobj, soundobj: status, currentsong: audio, songplaying: true })
    }
    if (this.state.soundobj.isLoaded && !this.state.soundobj.isPlaying && this.state.currentsong.id !== audio.id && !this.state.wait) {
      console.log('5')
      //console.log('songplay was pressed', audio)
      playbackobj.stopAsync();
      playbackobj.unloadAsync();
      const status = await playbackobj.loadAsync({ uri: audio.uri }, { shouldPlay: true });
      this.setState({ ...this.state, wait: true })
      this.addSongtolist(status)
      console.log('timer @')
      //setTimeout(this.setState({ ...this.state, wait: false }), 4000);
      //this.addSongtolist(audio)
      return this.setState({ ...this.state, playbackobj: playbackobj, soundobj: status, currentsong: audio, songplaying: true })
    }

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
          <Songitem title={item.filename} duration={item.duration} songname={this.state.songname} ispaused={this.state.paused}
            onOptionpress={() => {
              console.log('option pressed', item.filename, item.duration)
              this.setState({ optioncardvisibility: true });
              this.setState({ songname: item.filename });
              this.setState({ songduration: item.duration });
            }}
            //onSongpress={() => this.Songpress(item)} />
            onSongpress={() => this.testfunc(item, item.filename)} />
        )}
        <OptionCard visible={this.state.optioncardvisibility}
          name={this.state.songname}
          duration={this.state.songduration}
          onPlaypress={() => console.log('play pressed')}
          onAddtopress={() => console.log('add to playlist pressed')}
          onClosepress={() => this.setState({ optioncardvisibility: false })} />
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