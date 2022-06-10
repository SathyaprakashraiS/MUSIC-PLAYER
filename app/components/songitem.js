import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import color from '../misc/color';

const Songitem = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.leftcontainer}>
                    <View style={styles.thumbnail}>
                        <Text style={styles.thumbnailtext}>Q</Text>
                    </View>
                    <View style={StyleSheet.titlecontainer}>
                        <Text numberOfLines={1} style={styles.title}>Song Name</Text>
                        <Text numberOfLines={1} style={styles.duration}>2.54</Text>
                    </View>
                </View>
                <View style={styles.rightcontainer}>
                    <Entypo name="dots-three-vertical" size={24} color={color.FONT_MEDIUM} />
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
        marginBottom: 10,
        //backgroundColor: 'blue',
    },
    leftcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
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
        marginTop: 10,
    },
})

export default Songitem;