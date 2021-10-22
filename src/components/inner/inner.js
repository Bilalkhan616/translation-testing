import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Inner = ({ navigation }) => {
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.sectionWrapper}>
                    <Text style={styles.heading}>This is the inner screen </Text>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f3f3f3',
        flex: 1,
    },
    sectionWrapper: {
        padding: 20,
    },
    heading: {
        fontSize: 20,
        marginBottom: 15,
    },
});

export default Inner;
