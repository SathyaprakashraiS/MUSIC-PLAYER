//import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Modal, StatusBar, Text, TouchableWithoutFeedback, Alert, TouchableOpacity } from 'react-native';
import color from "../misc/color";

const OptionCard = ({ visible, name, duration, onPlaypress, onAddtopress, onClosepress }) => {
    //const { tname } = name;
    //const { tduration } = duration;
    //console.log('the name and duration is :', tname, tduration, name, duration)
    return (
        <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={onClosepress}>
            <TouchableOpacity style={styles.container} onPress={onClosepress}>
            </TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.trackname} numberOfLines={1}>{name}</Text>
                <View style={styles.optioncard}>
                    <TouchableWithoutFeedback onPress={onPlaypress}>
                        <Text style={styles.choice}>Play</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onAddtopress}>
                        <Text style={styles.choice}>Add to playlist</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: color.APP_BG,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
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
    closecard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
    },
})

export default OptionCard;