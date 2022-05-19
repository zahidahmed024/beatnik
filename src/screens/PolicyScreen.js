import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PolicyFlatlist, SearchInput, Switch, } from '../components';
import { colors, strings } from '../constants';
import { vs } from '../utils';


export default function PolicyScreen() {
    return (
        <View style={styles.container}>
            <View
                style={styles.filterContainer}
            >
                <SearchInput
                    placeholder={strings.search_here}
                />
                <Switch />
            </View>
            <PolicyFlatlist />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingVertical: vs(10),
    }


})
