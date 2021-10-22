import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, I18nManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';

const Home = ({ navigation }) => {

    const { t, i18n } = useTranslation();
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.sectionWrapper}>
                    <Text style={styles.heading}>{t('Hi')}</Text>
                    <Text>{t('How are you doing ?')}</Text>
                </View>

                <View style={styles.sectionWrapper}>
                    <Text style={styles.emptyText}>{t('Testing Rows')}</Text>
                    <View style={styles.row}>
                        <Text>{t('column 1')}</Text>
                        <Text>{t('column 2')}</Text>
                        <Text>{t('column 3')}</Text>
                    </View>
                </View>
                <View style={styles.sectionWrapper}>
                    <Text style={styles.heading}>{t('testing input')}</Text>

                </View>
                <View style={styles.sectionWrapper}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Inner') }}>
                        <Text style={styles.emptyText}>{t('to inner screen')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            i18n.changeLanguage(i18n.language === 'ar' ? 'end' : 'ar')
                                .then(() => {
                                    I18nManager.forceRTL(i18n.language === 'ar')
                                    RNRestart.Restart();
                                })

                        }}>
                        <Text style={styles.emptyText}>{t('change language')}</Text>
                    </TouchableOpacity>
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
    emptyText: {
        textAlign: 'left',
    },
    heading: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'left'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Home;
