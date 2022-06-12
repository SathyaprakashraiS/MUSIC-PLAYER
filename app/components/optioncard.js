//import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Modal, StatusBar, Text, TouchableWithoutFeedback } from 'react-native';
import color from "../misc/color";

const OptionCard = ({ visible, onClose, onPlaypress, onAddtopress }) => {
    //const { songname } = selectedsong;
    console.log('the visibility', { visible })
    return (
        <>
            <StatusBar hidden />
            <Modal animationType='slide' transparent={true} visible={visible}>
                <View style={styles.card}>
                    <Text style={styles.trackname} numberOfLines={1}>test</Text>
                    <View style={styles.optioncard}>
                        <TouchableWithoutFeedback onPress={onPlaypress}>
                            <Text style={styles.choice}>play</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={onAddtopress}>
                            <Text style={styles.choice}>add to playlist</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.cardcolor} />
                </TouchableWithoutFeedback>
            </Modal >
        </>
    )
}

const styles = StyleSheet.create({
    container: {

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
})

export default OptionCard;