import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import color from '../misc/color';
const thethumbnailletter = (songname) => songname[0]
const Songitem = ({ title, duration, onOptionpress, onSongpress, songname, ispaused }) => {
    console.log('this is from songitem', songname)
    //<Ionicons name="play" size={24} color="black" />
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftcontainer} onPress={onSongpress}>
                    <View style={styles.leftcontainer}>
                        <View style={styles.thumbnail}>
                            {
                                songname === title && ispaused ?
                                    <MaterialIcons name="pause" size={24} color="black" />
                                    :
                                    <>
                                        {
                                            songname === title && !ispaused ?
                                                <Ionicons name="play" size={24} color="black" />
                                                :
                                                <Text style={styles.thumbnailtext}>{thethumbnailletter(title)}</Text>
                                        }
                                    </>

                            }
                        </View>
                        <View style={styles.titlecontainer}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                            <Text numberOfLines={1} style={styles.duration}>{duration}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.rightcontainer}>
                    <Entypo name="dots-three-vertical" size={24} color={color.FONT_MEDIUM} onPress={onOptionpress} />
                </View>

            </View>
            <View style={styles.line}></View>
        </>
    );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width,
        marginTop: 5,
        marginBottom: 5,
        //backgroundColor: 'blue',
    },
    leftcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        //backgroundColor: 'blue',
    },
    rightcontainer: {
        flexBasis: 50,
        alignSelf: 'center',
        //backgroundColor: 'green',
    },
    thumbnail: {
        height: 50,
        flexBasis: 50,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: color.FONT_LIGHT,
    },
    thumbnailtext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: color.FONT,
    },
    titlecontainer: {
        width: width - 1,
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        paddingLeft: 10,
        color: color.FONT,
    },
    duration: {
        fontSize: 14,
        paddingLeft: 10,
        color: color.FONT_LIGHT,
    },
    line: {
        width: width,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
})

export default Songitem;