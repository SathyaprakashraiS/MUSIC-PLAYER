import { getPermissionsAsync } from 'expo-media-library';
import React, { Component, createContext } from 'react';
import { Text, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native-web';
import { DataProvider } from 'recyclerlistview';

export let AudioContext = createContext()
export class AudioFiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            audioFiles: [],
            dataProvider: new DataProvider((r1, r2) => r1 !== r2)

        }
    }

    permissionAllert = () => {
        Alert.alert("PERMISSION REQUIRED", "I WANT TO SEE UR FILES :)", [{ text: 'im ready', onPress: () => this.getPermission() }, { text: 'cancel', onPress: () => this.permissionAllert() }])
    }

    getAudioFiles = async () => {
        /*
        let media = await MediaLibrary.getAssetsAsync({ mediaType: 'audio' });
        console.log(media);
        */
        const { dataProvider, audioFiles } = this.state
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio
        });
        media = await MediaLibrary.getAssetsAsync({
            mediaType: MediaLibrary.MediaType.audio,
            first: media.totalCount,
        });
        this.setState({ ...this.state, dataProvider: dataProvider.cloneWithRows([...audioFiles, ...media.assets]), audioFiles: [...audioFiles, ...media.assets] });
        /*
        console.log(media);
        console.log(media.assets.length);
        */
    };

    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log(permission)
        if (permission.granted) {
            //get all audio files in media
            this.getAudioFiles()
        }
        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskagain } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskagain) {
                this.permissionAllert()
                //alert user to make them agree to it
            }
            if (status === 'granted') {
                //get all audio files from media
                this.getAudioFiles()
            }
            if (status === 'denied' && !canAskagain) {
                //display some error
            }
        }
    }

    componentDidMount() {
        this.getPermission()
    }

    render() {
        const { audioFiles, dataProvider } = this.state
        return (
            <AudioContext.Provider value={{ audioFiles, dataProvider }}>
                {this.props.children}
            </AudioContext.Provider>
        );
    }
}

export default AudioFiles;